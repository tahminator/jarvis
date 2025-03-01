import { cn } from "@/lib/utils";
import React from "react";

type BlockQuoteProps = React.ComponentPropsWithRef<"blockquote">;

export default function BlockQuote({
  className,
  children,
  ...props
}: BlockQuoteProps) {
  return (
    <blockquote
      {...props}
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
    >
      {children}
    </blockquote>
  );
}
