export function ChatTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold text-5xl bg-[linear-gradient(90deg,#2F82EF_0%,#FF3B3B_40%)] bg-clip-text text-transparent">
        {title}
      </h1>
      <h2 className="font-semibold text-[40px] text-gray-500">{description}</h2>
    </div>
  );
}
