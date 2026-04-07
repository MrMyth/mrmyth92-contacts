import React from "react";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const PCSpecsLink = () => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto py-12"
    >
      <div className="relative group overflow-hidden rounded-[2.5rem] bg-card border border-border/50 p-8 md:p-12 shadow-2xl hover:border-green-600/30 transition-all duration-500">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-green-600/5 rounded-full blur-3xl group-hover:bg-green-600/10 transition-all duration-500" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="p-3 bg-green-600/10 rounded-2xl">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-gradient-primary">
                {t.setup.title}
              </h2>
            </div>
            <p className="text-lg font-medium text-gradient-secondary max-w-md">
              {t.setup.subtitle}
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto"
          >
            <Link to="/setup">
              <Button className="w-full md:w-auto h-14 px-10 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-black uppercase tracking-widest shadow-lg shadow-green-600/20">
                {t.pages.setup}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PCSpecsLink;
