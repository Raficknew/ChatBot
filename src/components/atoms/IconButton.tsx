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
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className="bg-accent p-2 rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
