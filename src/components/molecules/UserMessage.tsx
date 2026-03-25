import { SquarePen } from "lucide-react";
import { formatTimestamp } from "../../lib/utils";
import { IconButton } from "../atoms/IconButton";
import { UserAvatar } from "../atoms/UserAvatar";

export function UserMessage({
  content,
  timestamp,
}: {
  content: string;
  timestamp?: Date;
}) {
  return (
    <div className="flex flex-col items-end self-end gap-1">
      <div className="flex items-center gap-6">
        <IconButton className="bg-foreground rounded-lg">
          <SquarePen />
        </IconButton>
        <div className="flex gap-6 items-center bg-foreground border border-foreground/10 py-4 px-10 rounded-2xl">
          <UserAvatar />
          {content}
        </div>
      </div>
      {timestamp && (
        <span className="text-xs text-gray-400 mr-2">
          {formatTimestamp(timestamp)}
        </span>
      )}
    </div>
  );
}
