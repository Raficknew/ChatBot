import type { MessageOptionType } from "../../types/types";
import { IconButton } from "../atoms/IconButton";

export function MessageOption({
  title,
  icon,
  onClick,
  gradientColor,
}: MessageOptionType) {
  return (
    <button
      type="button"
      style={{
        borderColor: gradientColor,
      }}
      className="w-full flex-1 max-w-67.5 h-auto sm:h-53.25 bg-foreground px-4 py-6 pb-10 sm:px-6 sm:py-9 cursor-pointer text-start relative flex flex-col justify-start message-option-scoop border"
      onClick={() => {
        onClick?.();
      }}
    >
      <h2 className="text-text-secondary">{title}</h2>
      <div className="absolute bottom-0 right-2">
        <IconButton className="bg-foreground rounded-lg border border-surface">
          {icon}
        </IconButton>
      </div>
    </button>
  );
}
