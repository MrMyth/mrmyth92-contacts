import React from "react";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { OKIcon, ContactIcon } from "@/components/icons/SocialIcons";
import SocialLinkCard from "@/components/ui/SocialLinkCard";

const ContactSection = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      name: t.contacts.ok,
      buttonText: t.contacts.goToProfile,
      username: "@MrMyth92",
      url: "https://ok.ru/profile/519663632974",
      icon: <OKIcon />,
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
          <ContactIcon className="h-8 w-8 text-green-600" />
          {t.contacts.title}
        </h2>
        <p className="text-center text-muted-foreground mb-6">{t.contacts.subtitle}</p>

        {/* Контакты */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-center text-green-600 flex items-center justify-center gap-2">
            <ContactIcon className="h-6 w-6" />
            {t.contacts.otherContacts}
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {contacts.map((contact, index) => (
              <SocialLinkCard
                key={index}
                href={contact.url}
                icon={contact.icon}
                buttonText={contact.buttonText}
                username={contact.username}
                bgColor={contact.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Card>
  );
};

export default ContactSection;
