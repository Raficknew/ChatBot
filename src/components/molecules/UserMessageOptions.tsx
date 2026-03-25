import {
  Clipboard,
  RefreshCcw,
  ThumbsDown,
  ThumbsUp,
  Volume2,
} from "lucide-react";

export function UserMessageOptions() {
  return (
    <div className="flex flex-col gap-10 bg-foreground p-6 rounded-lg">
      <RefreshCcw />
      <ThumbsUp />
      <ThumbsDown />
      <Clipboard />
      <Volume2 />
    </div>
  );
}
