import { useCallback, useEffect, useRef, useState } from "react";
import { ChatBotResponses } from "../../mocks/ChatBotResponses";
import type { ChatMessages, Message } from "../../types/types";
import { ChatBotLoadingResponse } from "../atoms/ChatBotLoadingResponse";
import { BotMessage } from "../molecules/BotMessage";
import { ChatInput } from "../molecules/ChatInput";
import { UserMessage } from "../molecules/UserMessage";
import { UserMessageOptions } from "../molecules/UserMessageOptions";

export function Chat({
  messages,
  setMessages,
}: {
  messages: ChatMessages[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessages[]>>;
}) {
  const [isBotThinking, setIsBotThinking] = useState(true);
  const [lastUserText, setLastUserText] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleBotResponse = useCallback(
    (userText: string) => {
      const matchedIndex = ChatBotResponses.findIndex(
        (response) =>
          response.sampleQuestion.toLowerCase() === userText.toLowerCase(),
      );

      const indexToUse =
        matchedIndex !== -1
          ? matchedIndex
          : Math.floor(Math.random() * ChatBotResponses.length);

      setMessages((prev) => [...prev, ChatBotResponses[indexToUse]]);
      setIsBotThinking(false);
    },
    [setMessages],
  );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    if (!isBotThinking) return;
    const timer = setTimeout(() => {
      handleBotResponse(lastUserText);
    }, 3000);
    return () => clearTimeout(timer);
  }, [handleBotResponse, isBotThinking, lastUserText]);

  const handleSend = (message: Message) => {
    setLastUserText(message.text);
    setMessages((prev) => [...prev, message]);
    setIsBotThinking(true);
  };

  return (
    <div className="bg-surface h-full w-full flex flex-col justify-between rounded-2xl px-16 py-10">
      <div className="flex flex-col gap-10 overflow-y-auto flex-1 py-4">
        {messages.map((entry, index) => {
          if (entry.sender === "user") {
            return (
              <UserMessage
                key={entry.id}
                content={entry.text}
                timestamp={entry.timestamp}
              />
            );
          }

          const precedingUserMessage = messages
            .slice(0, index)
            .findLast((msg) => msg.sender === "user");

          return (
            <div key={entry.id} className="flex items-center gap-6">
              <BotMessage
                threadTitle={precedingUserMessage?.text ?? ""}
                content={entry}
              />
              <UserMessageOptions />
            </div>
          );
        })}
        {isBotThinking && <ChatBotLoadingResponse />}
        <div ref={bottomRef} />
      </div>
      <ChatInput onSubmit={handleSend} />
    </div>
  );
}
