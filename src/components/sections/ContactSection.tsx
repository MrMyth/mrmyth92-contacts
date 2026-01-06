import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  
  const whatsappContacts = [
    {
      name: t.contacts.whatsapp,
      buttonText: t.contacts.write,
      username: "@MrMyth92",
      url: "https://wa.me/79898191101",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.5027 3.48916C18.2375 1.23991 15.2512 0 12.0961 0C5.4873 0 0.119427 5.34539 0.119427 11.9236C0.119427 14.0354 0.701678 16.0931 1.81499 17.8775L0 24L6.25989 22.2274C7.98425 23.2416 9.99876 23.7748 12.0904 23.7748H12.0961C18.6992 23.7748 24 18.4294 24 11.8519C24 8.70895 22.7678 5.73841 20.5027 3.48916ZM12.0961 21.7747C10.2547 21.7747 8.4476 21.2646 6.88571 20.3079L6.52715 20.1014L2.83547 21.1996L3.95455 17.6023L3.72428 17.2319C2.66782 15.6054 2.12574 13.7992 2.12574 11.9236C2.12574 6.45123 6.60286 1.9944 12.1018 1.9944C14.7074 1.9944 17.1652 3.02171 19.015 4.85991C20.8647 6.69811 21.9994 9.14241 21.994 11.8519C21.994 17.3301 17.5168 21.7747 12.0961 21.7747Z" fill="currentColor"/>
        </svg>
      ),
      color: "bg-[#25D366] hover:bg-[#25D366]/90"
    },
    {
      name: t.contacts.whatsapp,
      buttonText: t.contacts.download,
      username: "whatsapp.com",
      url: "https://www.whatsapp.com/",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.5027 3.48916C18.2375 1.23991 15.2512 0 12.0961 0C5.4873 0 0.119427 5.34539 0.119427 11.9236C0.119427 14.0354 0.701678 16.0931 1.81499 17.8775L0 24L6.25989 22.2274C7.98425 23.2416 9.99876 23.7748 12.0904 23.7748H12.0961C18.6992 23.7748 24 18.4294 24 11.8519C24 8.70895 22.7678 5.73841 20.5027 3.48916ZM12.0961 21.7747C10.2547 21.7747 8.4476 21.2646 6.88571 20.3079L6.52715 20.1014L2.83547 21.1996L3.95455 17.6023L3.72428 17.2319C2.66782 15.6054 2.12574 13.7992 2.12574 11.9236C2.12574 6.45123 6.60286 1.9944 12.1018 1.9944C14.7074 1.9944 17.1652 3.02171 19.015 4.85991C20.8647 6.69811 21.9994 9.14241 21.994 11.8519C21.994 17.3301 17.5168 21.7747 12.0961 21.7747Z" fill="currentColor"/>
        </svg>
      ),
      color: "bg-gray-600 hover:bg-gray-600/90"
    }
  ];

  const otherContacts = [
    {
      name: t.contacts.ok,
      buttonText: t.contacts.goToProfile,
      username: "@MrMyth92",
      url: "https://ok.ru/profile/519663632974",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.37097 0 0 5.37097 0 12C0 18.629 5.37097 24 12 24C18.629 24 24 18.629 24 12C24 5.37097 18.629 0 12 0ZM12 3.54839C13.9355 3.54839 15.5323 5.14516 15.5323 7.08065C15.5323 9.01613 13.9355 10.6129 12 10.6129C10.0645 10.6129 8.46774 9.01613 8.46774 7.08065C8.46774 5.14516 10.0645 3.54839 12 3.54839Z" fill="currentColor"/>
        </svg>
      ),
      color: "bg-[#EE8208] hover:bg-[#EE8208]/90"
    },
    {
      name: t.contacts.email,
      buttonText: t.contacts.sendEmail,
      username: "dmstarchikov@outlook.com",
      url: "mailto:dmstarchikov@outlook.com",
      icon: <Mail className="h-8 w-8" />,
      color: "bg-[#1B4D3E] hover:bg-[#1B4D3E]/90"
    }
  ];

  return (
    <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-muted/50 to-card">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3">
          <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12 3C14.209 3 16 4.791 16 7C16 9.209 14.209 11 12 11C9.791 11 8 9.209 8 7C8 4.791 9.791 3 12 3ZM18 20C18 20.552 17.552 21 17 21H7C6.448 21 6 20.552 6 20V19C6 16.791 7.791 15 10 15H14C16.209 15 18 16.791 18 19V20Z" fill="currentColor"/>
          </svg>
          {t.contacts.title}
        </h2>
        <p className="text-center text-muted-foreground mb-6">{t.contacts.subtitle}</p>
        
        {/* WhatsApp подраздел */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-center text-green-600 flex items-center justify-center gap-2">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M20.5027 3.48916C18.2375 1.23991 15.2512 0 12.0961 0C5.4873 0 0.119427 5.34539 0.119427 11.9236C0.119427 14.0354 0.701678 16.0931 1.81499 17.8775L0 24L6.25989 22.2274C7.98425 23.2416 9.99876 23.7748 12.0904 23.7748H12.0961C18.6992 23.7748 24 18.4294 24 11.8519C24 8.70895 22.7678 5.73841 20.5027 3.48916Z" fill="currentColor"/>
            </svg>
            {t.contacts.whatsapp}
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {whatsappContacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center rounded-md overflow-hidden ${contact.color} text-white min-h-[80px]`}
              >
                <div className="flex items-center justify-center bg-black/20 px-4 h-full min-h-[80px]">
                  {contact.icon}
                </div>
                <div className="flex-1 px-4 py-2 h-full flex flex-col justify-center">
                  <div className="text-sm font-semibold mb-1">
                    {contact.buttonText}
                  </div>
                  <div className="text-xs opacity-80">
                    {contact.username}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Другие контакты */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-center text-green-600 flex items-center justify-center gap-2">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12 3C14.209 3 16 4.791 16 7C16 9.209 14.209 11 12 11C9.791 11 8 9.209 8 7C8 4.791 9.791 3 12 3ZM18 20C18 20.552 17.552 21 17 21H7C6.448 21 6 20.552 6 20V19C6 16.791 7.791 15 10 15H14C16.209 15 18 16.791 18 19V20Z" fill="currentColor"/>
            </svg>
            {t.contacts.otherContacts}
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {otherContacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center rounded-md overflow-hidden ${contact.color} text-white min-h-[80px]`}
              >
                <div className="flex items-center justify-center bg-black/20 px-4 h-full min-h-[80px]">
                  {contact.icon}
                </div>
                <div className="flex-1 px-4 py-2 h-full flex flex-col justify-center">
                  <div className="text-sm font-semibold mb-1">
                    {contact.buttonText}
                  </div>
                  <div className="text-xs opacity-80">
                    {contact.username}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </Card>
  );
};

export default ContactSection;
