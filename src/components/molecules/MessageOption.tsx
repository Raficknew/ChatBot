import type { MessageOptionType } from "../../types/types";
import { IconButton } from "../atoms/IconButton";

export function MessageOption({ title, icon, onClick }: MessageOptionType) {
  return (
    <button
      type="button"
      className="w-full md:flex-1 md:max-w-[270px] min-h-32 md:min-h-[213px] bg-foreground px-4 py-4 pb-10 sm:px-6 sm:py-9 cursor-pointer text-start relative flex flex-col justify-start inverted"
      onClick={() => {
        onClick?.();
      }}
    >
      <h2 className="text-text-secondary text-sm sm:text-base">{title}</h2>
      <div className="absolute bottom-0 right-0">
        <IconButton className="bg-foreground rounded-lg border border-surface">
          {icon}
        </IconButton>
      </div>
    </button>
  );
}
