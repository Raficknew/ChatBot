export type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
};

export type BotResponse = {
  id: string;
  label: string;
  content: [string] | [string, string];
  footer: string;
};
