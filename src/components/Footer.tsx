import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-6 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-muted-foreground text-[9px] font-black uppercase tracking-[0.2em]">
            {t.footer.madeWith} 
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="h-2.5 w-2.5 text-red-500 fill-red-500" />
            </motion.div>
            {t.footer.forCommunity}
          </div>
          
          <div className="text-[3vw] md:text-[1.5vw] font-black tracking-tighter text-muted-foreground/10 uppercase select-none leading-none">
            MrMyth92
          </div>
          
          <div className="text-[8px] text-muted-foreground/40 font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} — All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
