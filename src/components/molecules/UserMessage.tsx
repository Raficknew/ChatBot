import { SquarePen } from "lucide-react";
import { IconButton } from "../atoms/IconButton";
import { UserAvatar } from "../atoms/UserAvatar";

export function UserMessage({ content }: { content: string }) {
  return (
    <div className="flex items-center self-end gap-6">
      <IconButton className="bg-foreground rounded-lg">
        <SquarePen />
      </IconButton>
      <div className="flex gap-6 items-center bg-foreground border border-foreground/10 py-4 px-10 rounded-2xl">
        <UserAvatar />
        {content}
      </div>
    </div>
  );
}
