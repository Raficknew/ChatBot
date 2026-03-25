import { CheckCheck } from "lucide-react";
import chatAvatarSrc from "../../assets/images/ChatAvatar.svg";
import type { BotResponse } from "../../types/types";
import { IconButton } from "../atoms/IconButton";

export function BotMessage({
  threadTitle,
  content,
}: {
  threadTitle: string;
  content: BotResponse;
}) {
  return (
    <div className="flex flex-col gap-2 w-full bg-foreground px-10 py-6 rounded-md">
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 items-center">
          <div className="self-start">
            <IconButton>
              <img src={chatAvatarSrc} alt="chatIcon" />
            </IconButton>
          </div>
          <div>
            <h3 className="break-all">{threadTitle}</h3>
          </div>
        </div>
        <div className="bg-gray-200 h-px w-full" />
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col max-w-203 gap-6">
          <h2 className="text-[18px]">{content.label}</h2>
          <section>
            {content.content.map((paragraph) => (
              <div key={paragraph} className="flex gap-6">
                <div>
                  <CheckCheck height={24} width={24} />
                </div>
                <p className="text-[20px]">{paragraph}</p>
              </div>
            ))}
          </section>
          <h2 className="text-[18px]">{content.footer}</h2>
        </div>
      </div>
    </div>
  );
}
