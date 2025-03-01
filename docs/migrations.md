# Database Migrations

**TLDR**: If you are looking for the command to run migrations, it is
`dotenvx run -- mvn flyway:migrate -Dflyway.locations=filesystem:./db/migration`
and to run production migrations (BE CAREFUL), it is:
`dotenvx run -f .env.production -- mvn flyway:migrate -Dflyway.locations=filesystem:./db/migration`
[You must manually fill .env.production yourself if you have the required access to the secrets.]

We use Flyway to handle our database migrations. However, we perform migrations manually, so it's crucial to exercise extreme caution when dealing with data.

View the current migrations folder [here](https://github.com/tahminator/jarvis/tree/main/src/main/resources/db/migration)

## Migration File Naming

Migration files must follow this naming pattern:

```
V{version}__{description}.sql
```

Examples:

- `V0001__create_users_table.sql`
- `V0002__add_email_column_to_users.sql`
- `V0003__create_posts_table.sql`

### Naming Requirements

- Version numbers must be sequential and unique
- Double underscores (`__`) separate the version from the description
- Use underscores (`_`) instead of spaces in descriptions
- Files must have `.sql` extension

## Types of Migrations

### Version Migrations (V)

- Standard version migration
- Runs exactly once

## Best Practices

Do not feel pressured to squeeze multiple changes into a single .sql file. It's better to have multiple focused migration files than one large file with many changes.

**Important:** Always test migrations in a development environment first, and **do not** commit migrations to production without discussing your changes with another team member.

## Running Migrations

### Using Maven

You can run Flyway commands through Maven (mvn) like this:

```bash
# Runs any pending migrations
mvn flyway:migrate
```

### Using Environment Variables

Always pipe in the .env file when running migrations using dotenx:

```bash
# dotenvx will automatically find the .env file as long as you are typing commands in the root directory
dotenvx run -- mvn flyway:migrate -X
# -X shows debug information
```

If you are missing dotenvx, please check `local.md` to make sure all of your tools are up to date.

## Common Commands

### Check Migration Status

```bash
mvn flyway:info
```

### Apply All Pending Migrations

```bash
mvn flyway:migrate
```

### Clean Database (Use with Caution!)

```bash
mvn flyway:clean
```

### Validate Migrations

```bash
mvn flyway:validate
```

## Transactions

Flyway automatically wraps the .sql files in transactions. This means that if any part of a .sql file fails to execute, none of the changes in that file will be applied. This helps maintain database consistency and prevents partial updates.
