import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SocialLinkCardProps {
  href: string;
  icon: React.ReactNode;
  buttonText: string;
  username: string;
  bgColor: string;
  index?: number;
}

const SocialLinkCard: React.FC<SocialLinkCardProps> = ({
  href,
  icon,
  buttonText,
  username,
  bgColor,
  index = 0,
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex items-center rounded-md overflow-hidden text-white min-h-[80px]",
        bgColor
      )}
    >
      <div className="flex items-center justify-center bg-black/20 px-4 h-full min-h-[80px]">
        {icon}
      </div>
      <div className="flex-1 px-4 py-2 h-full flex flex-col justify-center text-left">
        <div className="text-sm font-semibold mb-1">{buttonText}</div>
        <div className="text-xs opacity-80">{username}</div>
      </div>
    </motion.a>
  );
};

export default SocialLinkCard;
