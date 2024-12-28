import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { cn } from "../utils/utils";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "flex items-center justify-center font-bold transition-colors duration-150",
  {
    variants: {
      variant: {
        default: "bg-slate-500 text-white font-bold hover:bg-slate-600",
        primary: "bg-blue-500 text-white font-bold hover:bg-blue-600",
        secondary: "bg-purple-500 text-white hover:bg-purple-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        ghost: "hover:bg-slate-400 hover:text-white border border-slate-400",
      },
      outline: {
        true: "border border-input bg-transparent text-slate-600 hover:bg-slate-500 hover:text-white",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-8 text-lg",
        lg: "h-14 px-12 text-lg",
        full: "h-16 px-14 text-2xl w-full",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        outline: true,
        className: "border-blue-500 hover:bg-blue-500",
      },
      {
        variant: "secondary",
        outline: true,
        className: "border-purple-500 hover:bg-purple-500",
      },
      {
        variant: "success",
        outline: true,
        className: "border-green-500 hover:bg-green-500",
      },
      {
        variant: "warning",
        outline: true,
        className: "border-yellow-500 hover:bg-yellow-500",
      },
      {
        variant: "danger",
        outline: true,
        className: "border-red-500 hover:bg-red-500",
      },
      {
        variant: "ghost",
        outline: true,
        className: "border-slate-500 hover:bg-slate-500",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
    },
  }
);

export interface ButtonsProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: FC<ButtonsProps> = forwardRef<
  HTMLButtonElement,
  ButtonsProps
>(({ children, className, variant, size, rounded, outline, ...props }, ref) => {
  return (
    <button
      className={cn(button({ variant, size, rounded, outline, className }))}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
});
