import { cn } from "../../lib/utils";

export function IconButton({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className="size-10 flex items-center justify-center"
      onClick={onClick}
    >
      {children}
    </button>
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
      className={cn("bg-accent p-2 rounded-lg", disabled && "bg-gray-200")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
