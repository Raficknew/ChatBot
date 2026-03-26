import { Eye, Lightbulb } from "lucide-react";
import ImageSearchIcon from "../../assets/icons/ImageSearch.svg";
import Robot from "../../assets/images/Robot.svg";
import type { Message, MessageOptionType } from "../../types/types";
import { ChatTitle } from "../atoms/ChatTitle";
import { ChatInput } from "../molecules/ChatInput";
import { MessageOption } from "../molecules/MessageOption";

const messageOptions: MessageOptionType[] = [
  {
    title: "Create an image for my presentation",
    icon: <img src={ImageSearchIcon} aria-label="ImageSearchIcon" />,
  },
  {
    title: "What to do with kids’ art",
    icon: <Lightbulb color="#F1A62D" />,
  },
  {
    title: "Find the decade that a photo is from",
    icon: <Eye color="#37C390" />,

  },
];

export function ChatPreview({
  onStartChat,
}: {
  onStartChat: (message: Message) => void;
}) {
  return (
    <div className="bg-surface h-full w-full flex flex-col justify-between rounded-2xl px-4 py-6 md:px-16 md:py-10">
      <ChatTitle
        title="Hi Milano Cherry"
        description="How can i help you today"
      />
      <div className="flex gap-4 md:gap-6 w-full">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 flex-1 min-w-0 w-full">
          {messageOptions.map((option) => (
            <MessageOption
              key={option.title}
              title={option.title}
              icon={option.icon}
              onClick={() =>
                onStartChat({
                  id: crypto.randomUUID(),
                  text: option.title,
                  sender: "user",
                  timestamp: new Date(),
                })
              }
            />
          ))}
        </div>
        <div className="hidden 2xl:block fixed right-40 bottom-70">
          <img src={Robot} alt="Robot" className="object-contain" />
        </div>
      </div>
      <div className="mb-8 md:mt-6 md:mb-0">
        <ChatInput onSubmit={(msg) => onStartChat(msg)} />
      </div>
    </div>
  );
}
