import { IconButton } from "../atoms/IconButton";

export function MessageOption({
  title,
  icon,
  onClick,
}: {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className="w-full flex-1 max-w-67.5 h-auto sm:h-53.25 bg-foreground rounded-[14px] px-4 py-6 pb-10 sm:px-6 sm:py-9 cursor-pointer text-start relative flex flex-col justify-start"
      onClick={() => {
        onClick?.();
      }}
    >
      <h2 className="text-text-secondary">{title}</h2>
      <div className="absolute bottom-0 right-2">
        <IconButton>{icon}</IconButton>
      </div>
    </button>
  );
}
