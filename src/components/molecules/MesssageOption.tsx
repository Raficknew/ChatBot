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
      className="w-67.5 h-53.25 bg-foreground rounded-[14px] px-6 py-9 cursor-pointer text-start relative"
      onClick={() => {
        onClick?.();
      }}
    >
      <h2 className="text-gray-700">{title}</h2>
      <div className="absolute bottom-0 right-2">
        <IconButton>{icon}</IconButton>
      </div>
    </button>
  );
}
