import { useEffect, useRef, useState } from "react";
import { ChatBotResponses } from "../../mocks/ChatBotResponses";
import type { ChatMessages, Message } from "../../types/types";
import { BotMessage } from "../molecules/BotMessage";
import { ChatInput } from "../molecules/ChatInput";
import { UserMessage } from "../molecules/UserMessage";
import { ChatBotLoadingResponse } from "../atoms/ChatBotLoadingResponse";

export function Chat({
  messages,
  setMessages,
}: {
  messages: ChatMessages[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessages[]>>;
}) {
  const [isBotThinking, setIsBotThinking] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    if (!isBotThinking) return;
    const timer = setTimeout(() => {
      setIsBotThinking(false);
      setMessages((prev) => [...prev, ChatBotResponses[0]]);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isBotThinking, setMessages]);

  const handleSend = (message: Message) => {
    setMessages((prev) => [...prev, message]);
    setIsBotThinking(true);
  };

  return (
    <div className="bg-surface h-full w-full flex flex-col justify-between rounded-2xl px-16 py-10">
      <div className="flex flex-col gap-4 overflow-y-auto flex-1 py-4">
        {messages.map((entry, index) => {
          if (entry.sender === "user") {
            return <UserMessage key={entry.id} content={entry.text} />;
          }

          const precedingUserMessage = messages
            .slice(0, index)
            .findLast((msg) => msg.sender === "user");

          return (
            <BotMessage
              key={entry.id}
              threadTitle={precedingUserMessage?.text ?? ""}
              content={entry}
            />
          );
        })}
        {isBotThinking && <ChatBotLoadingResponse />}
        <div ref={bottomRef} />
      </div>
      <ChatInput onSubmit={handleSend} />
    </div>
  );
}
