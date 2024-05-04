import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  label: ReactNode | string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  disabled?: boolean;
  outline?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  label,
  secondary,
  disabled,
  fullWidth,
  large,
  onClick,
  outline,
  type,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        "rounded-full font-semibold border transition hover:opacity-80 disabled:opacity-70",
        fullWidth ? "w-full" : "w-fit",
        secondary ? "bg-white text-black" : "bg-sky-500 text-white",
        large ? "text-xl px-5 py-3" : "text-md px-4 py-3",
        outline
          ? "bg-transparent border-slate-600 text-sky-500 hover:bg-slate-800/40"
          : ""
      )}
    >
      {label}
    </button>
  );
};

export default Button;
