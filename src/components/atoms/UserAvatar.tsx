export function UserAvatar({
  src = "/src/assets/images/userAvatar.svg",
}: {
  src?: string;
}) {
  return <img src={src} alt="User Avatar" />;
}
