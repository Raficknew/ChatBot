import { useState } from "react";
import "./App.css";
import { ThemeSwitcher } from "./components/atoms/ThemeSwitcher";
import { Chat } from "./components/organisms/Chat";
import { ChatPreview } from "./components/organisms/ChatPreview";
import { Sidebar } from "./components/organisms/Sidebar";
import type { ChatMessages, Message } from "./types/types";

function App() {
  const [messages, setMessages] = useState<ChatMessages[]>([]);

  const handleStartChat = (message: Message) => {
    setMessages([message]);
  };

  return (
    <div className="bg-background w-full h-screen px-4 py-4 md:px-10 md:py-6 lg:px-20 lg:py-22">
      <div className="h-full rounded-md bg-foreground px-4 py-4 md:px-10 md:py-10 lg:py-22">
        <main className="flex flex-col md:flex-row gap-4 md:gap-10 h-full">
          <Sidebar messages={messages} onNewChatClick={() => setMessages([])} />
          {messages.length > 0 ? (
            <Chat messages={messages} setMessages={setMessages} />
          ) : (
            <ChatPreview onStartChat={handleStartChat} />
          )}
        </main>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default App;
