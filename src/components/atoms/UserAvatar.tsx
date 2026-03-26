import userAvatarSrc from "../../assets/images/UserAvatar.png";

export function UserAvatar({ src = userAvatarSrc }: { src?: string }) {
  return (
    <img
      src={src}
      alt="User Avatar"
      className="rounded-sm"
      width={40}
      height={40}
    />
  );
}
