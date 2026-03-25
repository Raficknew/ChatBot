import { Mic, Send } from "lucide-react";
import { IconButton, IconButtonWithBackground } from "../atoms/IconButton";

export function ChatInput() {
  return (
    <div className="flex w-full items-center justify-between bg-foreground py-4 px-10 border border-foreground/10 rounded-full">
      <div className="flex gap-2">
        <IconButton>
          <Mic color="gray" />
        </IconButton>
        <input type="text" placeholder="Ask anything from here" />
      </div>
      <IconButtonWithBackground>
        <Send color="white" />
      </IconButtonWithBackground>
    </div>
  );
}
