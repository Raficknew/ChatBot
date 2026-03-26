import { CheckCheck } from "lucide-react";
import chatAvatarSrc from "../../assets/images/ChatAvatar.svg";
import type { BotResponse } from "../../types/types";
import { IconButton } from "../atoms/IconButton";
import { motion } from "motion/react";

export function BotMessage({
  threadTitle,
  content,
}: {
  threadTitle: string;
  content: BotResponse;
}) {
  return (
    <motion.div
      className="flex flex-col gap-2 w-full bg-foreground p-4 md:px-10 md:py-6 rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeIn", delay: 0.2 }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 items-center">
          <div className="self-start">
            <IconButton>
              <img src={chatAvatarSrc} alt="chatIcon" />
            </IconButton>
          </div>
          <div className="min-w-0">
            <h3 className="wrap-break-word">{threadTitle}</h3>
          </div>
        </div>
        <div className="bg-gray-200 h-px w-full" />
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col max-w-full md:max-w-203 gap-4 md:gap-6">
          <h2 className="text-base md:text-[18px]">{content.label}</h2>
          <section>
            {content.content.map((paragraph) => (
              <div key={paragraph} className="flex gap-4 md:gap-6">
                <div>
                  <CheckCheck height={24} width={24} />
                </div>
                <p className="text-base md:text-[20px]">{paragraph}</p>
              </div>
            ))}
          </section>
          <h2 className="text-base md:text-[18px]">{content.footer}</h2>
        </div>
      </div>
    </motion.div>
  );
}
