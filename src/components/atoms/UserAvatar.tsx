import userAvatarSrc from "../../assets/images/UserAvatar.svg";

export function UserAvatar({ src = userAvatarSrc }: { src?: string }) {
  return <img src={src} alt="User Avatar" />;
}
