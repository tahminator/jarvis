import { cn } from "@/lib/utils";
import React from "react";

type H4Props = React.ComponentPropsWithRef<"h4">;

export default function H4({ className, children, ...props }: H4Props) {
  return (
    <h4
      {...props}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}
