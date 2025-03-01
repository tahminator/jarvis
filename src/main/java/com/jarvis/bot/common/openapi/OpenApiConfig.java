package com.jarvis.bot.common.openapi;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;

@Configuration
public class OpenApiConfig {
    @Bean
    public OpenAPI customOpenAPI() {
        OpenAPI openAPI = new OpenAPI();

        // openAPI.path("/api/auth/flow/discord", CustomOpenApiAuthItems.getDiscordOAuthFlow());

        // openAPI.path("/api/auth/flow/callback/discord", CustomOpenApiAuthItems.getDiscordOAuthFlowCallback());

        return openAPI;
    }
}
