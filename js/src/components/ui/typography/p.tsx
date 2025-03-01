import { cn } from "@/lib/utils";
import React from "react";

type PProps = React.ComponentPropsWithRef<"p">;

export default function P({ className, children, ...props }: PProps) {
  return (
    <p
      {...props}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    >
      {children}
    </p>
  );
}
