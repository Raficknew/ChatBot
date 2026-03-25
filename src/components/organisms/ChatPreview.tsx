import { Eye, Home, Lightbulb } from "lucide-react";
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

export function ChatPreview() {
  return (
    <div className="bg-surface h-full w-full flex flex-col justify-between rounded-2xl px-16 py-10">
      <ChatTitle
        title="Hi Milano Cherry"
        description="How can i help you today"
      />
      <div className="flex gap-6">
        {messageOptions.map((option) => (
          <MessageOption
            key={option.title}
            title={option.title}
            icon={option.icon}
          />
        ))}
      </div>
      <ChatInput />
    </div>
  );
}
