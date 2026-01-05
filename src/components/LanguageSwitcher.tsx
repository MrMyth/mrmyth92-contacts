import React from "react";
import { useLanguage, Language } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const newLang: Language = language === "ru" ? "en" : "ru";
    setLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 hover:bg-green-200 text-green-700 font-medium text-sm transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`${t.language.switchTo} ${language === "ru" ? "English" : "Русский"}`}
    >
      <Globe className="h-4 w-4" />
      <span>{language === "ru" ? t.language.en : t.language.ru}</span>
    </motion.button>
  );
};

export default LanguageSwitcher;
