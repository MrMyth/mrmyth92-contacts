
import React from "react";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const AboutMeSection = () => {
  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-6 text-center text-black bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
        <User className="h-8 w-8" />
        Немного обо мне
      </h2>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 space-y-3 text-left">
          <p><span className="font-semibold">ФИО:</span> Старчиков Дмитрий Олегович.</p>
          <p><span className="font-semibold">Дата рождения:</span> 11 сентября 1992 года.</p>
          <p>Веду два Youtube канала по франшизам The Division & Assassin's Creed.</p>
          <p>Прямые эфиры по обоим франшизам идут на Twitch канале.</p>
          <p>Дополнительно все это зеркалится в мою группу в VK.</p>
          <p>Мастерская настройка Discord серверов.</p>
          <p>Мастерская работа в графических нейросетях, создание собственных изображений.</p>
        </div>
        <div className="flex-shrink-0">
          <img 
            src="https://i.ibb.co/qdqTfTZ/my-ava.jpg" 
            alt="Дмитрий Старчиков" 
            className="rounded-lg shadow-lg w-64 h-auto"
          />
        </div>
      </div>
    </Card>
  );
};

export default AboutMeSection;
