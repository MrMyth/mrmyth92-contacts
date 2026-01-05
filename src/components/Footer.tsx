import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Heart } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="mt-12 py-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            {t.footer.madeWith} <Heart className="h-4 w-4 text-red-500 fill-red-500" /> {t.footer.forCommunity}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
