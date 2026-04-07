import React from "react";
import { Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import SocialLinkCard from "@/components/ui/SocialLinkCard";

const CopyDataSection = () => {
  const { t } = useLanguage();
  
  const gameServices = [
    { 
      name: "Ubisoft Connect", 
      username: "MrMyth92", 
      copyValue: "MrMyth92",
      icon: <Gamepad2 />, 
      color: "bg-[#0070FF] hover:bg-[#0070FF]/90",
      rotation: -12,
      number: 1 
    },
    { 
      name: "EA", 
      username: "MrMyth92", 
      copyValue: "MrMyth92",
      icon: <Gamepad2 />, 
      color: "bg-[#FF4747] hover:bg-[#FF4747]/90",
      rotation: 8,
      number: 2 
    },
    { 
      name: "Epic Games", 
      username: "MrMyth1992", 
      copyValue: "MrMyth1992",
      icon: <Gamepad2 />, 
      color: "bg-[#F4D124] hover:bg-[#F4D124]/90",
      textColor: "text-black",
      rotation: -5,
      number: 3 
    },
    { 
      name: "Steam", 
      username: "882746935", 
      copyValue: "882746935",
      icon: <Gamepad2 />, 
      color: "bg-[#1b2838] hover:bg-[#1b2838]/90",
      rotation: 15,
      number: 4,
      isCode: true
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {gameServices.map((service, index) => (
            <SocialLinkCard
              key={service.name}
              icon={service.icon}
              buttonText={service.name + (service.isCode ? ` ${t.gaming.friendCode}` : "")}
              username={service.username}
              bgColor={service.color}
              textColor={service.textColor}
              copyValue={service.copyValue}
              rotation={service.rotation}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CopyDataSection;
