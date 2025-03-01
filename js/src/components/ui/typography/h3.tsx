import { cn } from "@/lib/utils";
import React from "react";

type H3Props = React.ComponentPropsWithRef<"h3">;

export default function H3({ className, children, ...props }: H3Props) {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}
