"use client";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {

  const base = "btn ";
  const style = variant === "primary" ? "btn-primary" : "btn-outline";

  return (
    <button {...props} className={`${base}${style} ${className}`}>
      {children}
    </button>
  );
}
