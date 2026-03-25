export type Message = {
  id: string;
  text: string;
  sender: "user";
};

export type BotResponse = {
  id: string;
  label: string;
  content: [string] | [string, string];
  footer: string;
  sender: "bot";
};

export type ChatMessages = Message | BotResponse;
