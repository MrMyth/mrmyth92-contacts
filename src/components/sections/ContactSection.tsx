import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <Card className="p-6 mb-8 bg-card hover:animate-card-hover transition-all">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Контакты</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          href="https://vk.com/mrmyth92ds"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full text-white">
            VK (MrMyth92DS)
          </Button>
        </a>
        <a
          href="https://vk.com/mrmyth92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full text-white">
            VK (MrMyth92)
          </Button>
        </a>
        <a href="https://t.me/MrMyth92" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full text-white">
            Telegram
          </Button>
        </a>
        <a
          href="https://wa.me/79898191101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full text-white">
            WhatsApp
          </Button>
        </a>
        <a
          href="skype:Dmstarchikov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full text-white">
            Skype
          </Button>
        </a>
        <a
          href="https://ok.ru/profile/519663632974"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full text-white">
            Одноклассники
          </Button>
        </a>
        <a
          href="mailto:starchikovd@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full text-white">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
        </a>
        <a
          href="https://discord.gg/vZrmPCUN7p"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full text-white">
            Discord
          </Button>
        </a>
        <a href="https://vk.me/AiCraftMyMyth92" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full text-white">
            VK Messages (AiCraft)
          </Button>
        </a>
        <a href="https://t.me/AiCraftMyMyth92" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full text-white">
            Telegram (AiCraft)
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default ContactSection;