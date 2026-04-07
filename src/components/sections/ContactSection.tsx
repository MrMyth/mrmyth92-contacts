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
      name: t.contacts.email,
      buttonText: t.contacts.sendEmail,
      username: "dmstarchikov@outlook.com",
      url: "mailto:dmstarchikov@outlook.com",
      copyValue: "dmstarchikov@outlook.com",
      icon: <Mail className="h-8 w-8" />,
      color: "bg-[#1B4D3E] hover:bg-[#1B4D3E]/90"
    }
  ];

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <SocialLinkCard
              key={index}
              href={contact.url}
              icon={contact.icon}
              buttonText={contact.buttonText}
              username={contact.username}
              bgColor={contact.color}
              copyValue={contact.copyValue}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
