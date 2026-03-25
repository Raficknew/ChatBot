import "./App.css";
import { ChatView } from "./components/organisms/ChatView";
import { Sidebar } from "./components/organisms/Sidebar";

function App() {
  return (
    <div className="bg-background w-full h-screen px-20 py-22">
      <div className="h-full rounded-md bg-foreground px-10 py-22">
        <main className="flex flex-row gap-10 h-full">
          <Sidebar />
          <ChatView />
        </main>
      </div>
    </div>
  );
}

export default App;
