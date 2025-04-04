
import React from "react";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

type BiographyItemProps = {
  label: string;
  value: string;
};

const BiographyItem: React.FC<BiographyItemProps> = ({ label, value }) => (
  <p><span className="font-semibold">{label}</span> {value}</p>
);

const AboutMeSection = () => {
  const biographyItems = [
    { id: "name", label: "ФИО:", value: "Старчиков Дмитрий Олегович." },
    { id: "birthdate", label: "Дата рождения:", value: "11 сентября 1992 года." }
  ];

  const skills = [
    "Я инвалид первой группы из-за врожденного заболевания. Но я веду активный образ жизни. Люблю компьютерные игры и все что, связано с ПК. Веду два Youtube канала по франшизам The Division & Assassin's Creed.",
    "Игры обеих франшиз я стримлю на один Twitch канал.",
    "Дополнительно все это зеркалится в мою группу в VK.",
    "Мастерская настройка Discord серверов.",
    "Мастерская работа в графических нейросетях, создание собственных изображений."
  ];

  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-6 text-center text-black bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
        <User className="h-8 w-8" />
        Немного обо мне
      </h2>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 space-y-3 text-left">
          {biographyItems.map((item) => (
            <BiographyItem key={item.id} label={item.label} value={item.value} />
          ))}
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
        <div className="flex-shrink-0">
          <img 
            src="https://i.ibb.co/qdqTfTZ/my-ava.jpg" 
            alt="Дмитрий Старчиков" 
            className="rounded-lg shadow-lg w-64 h-auto" 
            loading="lazy" 
          />
        </div>
      </div>
    </Card>
  );
};

export default AboutMeSection;
