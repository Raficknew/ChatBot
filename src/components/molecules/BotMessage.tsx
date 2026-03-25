import { CheckCheck } from "lucide-react";
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
    <div className="flex flex-col gap-2 w-full bg-foreground px-10 py-6 rounded-md ">
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 items-center">
          <IconButton>
            <img src="/src/assets/images/ChatAvatar.svg" alt="chatIcon" />
          </IconButton>
          <div>
            <h3>{threadTitle}</h3>
          </div>
        </div>
        <div className="bg-gray-200 h-px w-full" />
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col max-w-203 gap-6">
          <h2>{content.label}</h2>
          <section>
            {content.content.map((paragraph) => (
              <div key={paragraph} className="flex gap-6">
                <div>
                  <CheckCheck height={24} width={24} />
                </div>
                <p className="break-all">{paragraph}</p>
              </div>
            ))}
          </section>
          <h2>{content.footer}</h2>
        </div>
      </div>
    </div>
  );
}
