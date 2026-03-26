import {
  Clipboard,
  RefreshCcw,
  ThumbsDown,
  ThumbsUp,
  Volume2,
} from "lucide-react";

export function UserMessageOptions() {
  return (
    <div className="flex flex-row md:flex-col flex-wrap gap-4 md:gap-10 bg-foreground p-4 md:p-6 rounded-lg">
      <RefreshCcw />
      <ThumbsUp />
      <ThumbsDown />
      <Clipboard />
      <Volume2 />
    </div>
  );
}
