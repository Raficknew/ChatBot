export type Message = {
  id: string;
  text: string;
  sender: "user";
  timestamp: Date;
};

export type BotResponse = {
  id: string;
  sampleQuestion: string;
  label: string;
  content: [string] | [string, string];
  footer: string;
  sender: "bot";
};

export type ChatMessages = Message | BotResponse;

export type Theme = "light" | "dark";
