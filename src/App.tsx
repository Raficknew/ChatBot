import { useState } from "react";
import "./App.css";
import { ChatPreview } from "./components/organisms/ChatPreview";
import { Sidebar } from "./components/organisms/Sidebar";
import { Chat } from "./components/organisms/Chat";
import type { ChatMessages, Message } from "./types/types";

function App() {
  const [messages, setMessages] = useState<ChatMessages[]>([]);

  const handleStartChat = (message: Message) => {
    setMessages([message]);
  };

  return (
    <div className="bg-background w-full h-screen px-20 py-22">
      <div className="h-full rounded-md bg-foreground px-10 py-22">
        <main className="flex flex-row gap-10 h-full">
          <Sidebar />
          {messages.length > 0 ? (
            <Chat messages={messages} setMessages={setMessages} />
          ) : (
            <ChatPreview onStartChat={handleStartChat} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
