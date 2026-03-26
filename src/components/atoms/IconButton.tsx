import { cn } from "../../lib/utils";

export function IconButton({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "size-10 flex items-center justify-center cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function IconButtonWithBackground({
  children,
  type = "button",
  disabled,
  onClick,
}: {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "bg-accent p-2 rounded-lg cursor-pointer",
        disabled && "bg-border",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
