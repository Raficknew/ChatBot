export function ChatBotLoadingResponse() {
  return (
    <div className="flex gap-2 items-center">
      <img src="/src/assets/images/ChatAvatar.svg" alt="ChatAvatar" />
      <p className="animate-pulse">Thinking...</p>
    </div>
  );
}
