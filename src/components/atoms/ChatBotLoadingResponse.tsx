import chatAvatarSrc from "../../assets/images/ChatAvatar.svg";

export function ChatBotLoadingResponse() {
  return (
    <div className="flex gap-2 items-center">
      <img src={chatAvatarSrc} alt="ChatAvatar" />
      <p className="animate-pulse">Thinking...</p>
    </div>
  );
}
