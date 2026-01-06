import React from "react";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

const StreamRulesLink = () => {
  const { t } = useLanguage();
  
  return (
    <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-muted/50 to-card">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3">
            <Info className="h-8 w-8 text-green-600" />
            {t.streamRulesLink.title}
          </h2>
          <p className="text-muted-foreground whitespace-nowrap">{t.streamRulesLink.subtitle}</p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <Link to="/stream-rules" className="block w-full">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white gap-2">
              <Info className="h-5 w-5" />
              {t.streamRulesLink.button}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Card>
  );
};

export default StreamRulesLink;
