import { Eye, Home, Lightbulb } from "lucide-react";
import type { Message } from "../../types/types";
import { ChatTitle } from "../atoms/ChatTitle";
import { ChatInput } from "../molecules/ChatInput";
import { MessageOption } from "../molecules/MesssageOption";

const messageOptions = [
  {
    title: "Cretae an image for my presentation",
    icon: <Home color="#2F82EF" />,
  },
  { title: "What to do with kids’ art", icon: <Lightbulb color="#F1A62D" /> },
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
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full">
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
      <div className="mt-6">
        <ChatInput onSubmit={(msg) => onStartChat(msg)} />
      </div>
    </div>
  );
}
