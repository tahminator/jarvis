import { cn } from "@/lib/utils";
import React from "react";

type H2Props = React.ComponentPropsWithRef<"h2">;

export default function H2({ className, children, ...props }: H2Props) {
  return (
    <h2
      {...props}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}
