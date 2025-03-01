import { cn } from "@/lib/utils";
import React from "react";

type H1Props = React.ComponentPropsWithRef<"h1">;

export default function H1({ className, children, ...props }: H1Props) {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
