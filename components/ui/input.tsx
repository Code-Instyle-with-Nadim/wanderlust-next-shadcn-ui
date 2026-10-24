import * as React from "react";
import { cn } from "@/lib/utils";
export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => <input type={type} className={cn("flex h-11 w-full rounded-xl border border-[#e0e8e3] bg-white px-3 py-2 text-sm outline-none placeholder:text-[#98a49e] focus:border-[#176b55] focus:ring-2 focus:ring-[#176b55]/10 disabled:cursor-not-allowed disabled:opacity-50", className)} ref={ref} {...props} />);
Input.displayName = "Input";
