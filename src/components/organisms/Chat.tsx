import { ChatBotResponses } from "../../mocks/ChatBotResponses";
import type { Message } from "../../types/types";
import { BotMessage } from "../molecules/BotMessage";
import { ChatInput } from "../molecules/ChatInput";
import { UserMessage } from "../molecules/UserMessage";

export function Chat({
  messages,
  setMessages,
}: {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}) {
  const handleSend = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className="bg-surface h-full w-full flex flex-col justify-between rounded-2xl px-16 py-10">
      <div className="flex flex-col gap-4 overflow-y-auto flex-1 py-4">
        {messages.map((message) => {
          const isUserMessage = message.sender === "user";

          return isUserMessage ? (
            <UserMessage key={message.id} content={message.text} />
          ) : null;
        })}
        <BotMessage
          threadTitle={messages[0]?.text}
          content={ChatBotResponses[0]}
        />
      </div>
      <ChatInput onSubmit={handleSend} />
    </div>
  );
}
