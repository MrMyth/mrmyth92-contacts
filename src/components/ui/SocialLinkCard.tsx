import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Copy, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

interface SocialLinkCardProps {
  href?: string;
  icon: React.ReactNode;
  buttonText: string;
  username: string;
  bgColor: string;
  textColor?: string;
  index?: number;
  onCopy?: () => void;
  copyValue?: string;
  rotation?: number;
}

const SocialLinkCard: React.FC<SocialLinkCardProps> = ({
  href,
  icon,
  buttonText,
  username,
  bgColor,
  textColor = "text-white",
  index = 0,
  onCopy,
  copyValue,
  rotation = 6,
}) => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onCopy) {
      onCopy();
    } else if (copyValue) {
      navigator.clipboard.writeText(copyValue);
      toast({
        title: t.gaming.nameCopied || "Copied",
        description: t.gaming.copiedToClipboard || "Value copied to clipboard",
        duration: 2000,
      });
    }
  };

  const CardContent = (
    <div className={cn(
      "group relative flex items-center p-6 rounded-3xl transition-all duration-500 overflow-hidden w-full text-left",
      "bg-card border border-border/50 hover:border-green-600/50 hover:shadow-2xl hover:shadow-green-600/10"
    )}>
      <div className={cn(
        "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 shrink-0 group-hover:scale-110",
        bgColor,
        textColor
      )} style={{ transform: `rotate(${rotation}deg)` }}>
        {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8" })}
      </div>
      
      <div className="ml-6 flex-1 min-w-0">
        <h3 className="text-lg font-black tracking-tight uppercase group-hover:text-green-600 transition-colors truncate text-gradient-primary">
          {buttonText}
        </h3>
        <p className="text-sm text-muted-foreground font-medium truncate">
          {username}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {(onCopy || copyValue) && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-green-600 hover:text-white transition-all duration-300 text-muted-foreground font-bold text-sm"
            title={t.gaming.copy}
          >
            <Copy className="w-4 h-4" />
            <span>{t.gaming.copyBtn || "Copy"}</span>
          </button>
        )}
        {href && (
          <div className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <ArrowRight className="w-6 h-6 stroke-[3]" />
          </div>
        )}
      </div>
    </div>
  );

  if (href && !onCopy && !copyValue) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="block"
      >
        {CardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="block cursor-default"
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  );
};

export default SocialLinkCard;
