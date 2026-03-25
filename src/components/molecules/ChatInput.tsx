import { Mic, Send } from "lucide-react";
import { useState } from "react";
import type { Message } from "../../types/types";
import { IconButton, IconButtonWithBackground } from "../atoms/IconButton";

export function ChatInput({
  onSubmit,
}: {
  onSubmit?: (message: Message) => void;
} = {}) {
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSubmit = (text: string) => {
    if (!text?.trim()) return;
    setCurrentMessage("");
    onSubmit?.({ id: crypto.randomUUID(), text, sender: "user" });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(currentMessage);
      }}
      className="flex w-full items-center justify-between bg-foreground py-4 px-10 border border-foreground/10 rounded-full gap-2"
    >
      <div className="flex flex-1 gap-2">
        <IconButton>
          <Mic color="gray" />
        </IconButton>
        <div className="flex flex-1 items-center">
          <input
            type="text"
            placeholder="Ask anything from here"
            className="w-full outline-none"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
        </div>
      </div>
      <IconButtonWithBackground type="submit" disabled={!currentMessage}>
        <Send color="white" />
      </IconButtonWithBackground>
    </form>
  );
}
