import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Phone, MessageCircle, Video, Users } from "lucide-react";

const ContactSection = () => {
  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-6 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9]">
        Контакты
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          href="https://vk.com/mrmyth92ds"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#0077FF] hover:bg-[#0077FF]/90 text-white border-0">
            <MessageSquare className="mr-2 h-4 w-4" />
            VK (MrMyth92DS)
          </Button>
        </a>
        <a
          href="https://vk.com/mrmyth92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#0077FF] hover:bg-[#0077FF]/90 text-white border-0">
            <MessageSquare className="mr-2 h-4 w-4" />
            VK (MrMyth92)
          </Button>
        </a>
        <a href="https://t.me/MrMyth92" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full bg-[#229ED9] hover:bg-[#229ED9]/90 text-white border-0">
            <MessageCircle className="mr-2 h-4 w-4" />
            Telegram
          </Button>
        </a>
        <a
          href="https://wa.me/79898191101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white border-0">
            <Phone className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </a>
        <a
          href="skype:Dmstarchikov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#00AFF0] hover:bg-[#00AFF0]/90 text-white border-0">
            <Video className="mr-2 h-4 w-4" />
            Skype
          </Button>
        </a>
        <a
          href="https://ok.ru/profile/519663632974"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#EE8208] hover:bg-[#EE8208]/90 text-white border-0">
            <Users className="mr-2 h-4 w-4" />
            Одноклассники
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default ContactSection;