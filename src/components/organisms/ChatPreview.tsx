import { ChatTitle } from "../atoms/ChatTitle";
import { ChatInput } from "../molecules/ChatInput";

export function ChatPreview() {
  return (
    <div className="bg-surface h-full w-full flex flex-col justify-between rounded-2xl px-16 py-10">
      <ChatTitle
        title="Hi Milano Cherry"
        description="How can i help you today"
      />
      <div>Message options</div>
      <ChatInput />
    </div>
  );
}
