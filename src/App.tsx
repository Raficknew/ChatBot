import "./App.css";
import { ChatPreview } from "./components/organisms/ChatPreview";
import { Sidebar } from "./components/organisms/Sidebar";

function App() {
  return (
    <div className="bg-background w-full h-screen px-20 py-22">
      <div className="h-full rounded-md bg-foreground px-10 py-22">
        <main className="flex flex-row gap-10 h-full">
          <Sidebar />
          <ChatPreview />
        </main>
      </div>
    </div>
  );
}

export default App;
