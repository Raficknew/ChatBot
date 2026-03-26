import { Compass, History, House, Plus } from "lucide-react";
import chatAvatarSrc from "../../assets/images/ChatAvatar.svg";
import { IconButton, IconButtonWithBackground } from "../atoms/IconButton";
import { UserAvatar } from "../atoms/UserAvatar";

export function Sidebar() {
  return (
    <div className="fixed md:relative left-0 bottom-0 md:h-full bg-surface border border-surface/10 p-4 md:py-10 md:px-6 w-full md:w-fit md:rounded-full flex md:flex-col justify-between items-center">
      <div className="flex md:flex-col items-center gap-6">
        <img src={chatAvatarSrc} alt="chatIcon" />
        <IconButtonWithBackground>
          <Plus color="white" />
        </IconButtonWithBackground>
      </div>
      <div className="flex md:flex-col gap-2 md:w-full items-center">
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
