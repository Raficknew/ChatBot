import { Compass, History, House, Plus } from "lucide-react";
import { IconButton, IconButtonWithBackground } from "../atoms/IconButton";
import { UserAvatar } from "../atoms/UserAvatar";

export function Sidebar() {
  return (
    <div className="h-full bg-surface border border-surface/10 py-10 px-6 rounded-full flex flex-col justify-between items-center">
      <div className="flex flex-col items-center gap-6">
        <img src="/src/assets/images/chatIcon.svg" alt="chatIcon" />
        <IconButtonWithBackground>
          <Plus color="white" />
        </IconButtonWithBackground>
      </div>
      <div className="flex flex-col gap-2 w-full items-center">
        <IconButton>
          <House />
        </IconButton>
        <IconButton>
          <History color="gray" />
        </IconButton>
        <IconButton>
          <Compass color="gray" />
        </IconButton>
      </div>
      <UserAvatar />
    </div>
  );
}
