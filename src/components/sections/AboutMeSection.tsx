import React from "react";
import { Card } from "@/components/ui/card";
import { User, Gamepad2, Youtube, Twitch, Disc3, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";

type BiographyItemProps = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

const BiographyItem: React.FC<BiographyItemProps> = ({ label, value, icon }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, margin: "-50px" }}
    className="flex items-start gap-3"
  >
    {icon && <span className="text-green-500 mt-1">{icon}</span>}
    <p className="text-gray-800">
      <span className="font-semibold text-gray-900">{label}</span> {value}
    </p>
  </motion.div>
);

const SkillItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, margin: "-50px" }}
    className="flex items-start gap-3"
  >
    <span className="text-green-500 mt-1">•</span>
    <p className="text-gray-800">{children}</p>
  </motion.div>
);

const AboutMeSection = () => {
  const biographyItems = [
    { 
      id: "name", 
      label: "ФИО:", 
      value: "Старчиков Дмитрий Олегович.",
      icon: <User className="h-4 w-4" />
    },
    { 
      id: "birthdate", 
      label: "Дата рождения:", 
      value: "11 сентября 1992 года.",
      icon: <Disc3 className="h-4 w-4" />
    }
  ];

  const skills = [
    "Я инвалид первой группы из-за врожденного заболевания. Но я веду активный образ жизни. Люблю компьютерные игры и все что, связано с ПК. Веду два Youtube канала по франшизам The Division & Assassin's Creed.",
    "Игры обеих франшиз я стримлю на один Twitch канал.",
    "Дополнительно все это зеркалится в мою группу в VK.",
    "Мастерская настройка Discord серверов.",
    "Мастерская работа в графических нейросетях, создание собственных изображений."
  ];

  return (
    <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3"
      >
        <User className="h-8 w-8 text-purple-600" />
        Немного обо мне
      </motion.h2>
      
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1 space-y-4 text-left">
          {biographyItems.map((item) => (
            <BiographyItem 
              key={item.id} 
              label={item.label} 
              value={item.value}
              icon={item.icon}
            />
          ))}
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-4 space-y-4"
          >
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Paintbrush className="h-5 w-5 text-purple-600" />
              Мои навыки и увлечения:
            </h3>
            <div className="space-y-3 pl-2">
              {skills.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <img 
            src="https://i.ibb.co/qdqTfTZ/my-ava.jpg" 
            alt="Дмитрий Старчиков" 
            className="rounded-xl shadow-xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-purple-500/20" 
            loading="lazy" 
          />
        </motion.div>
      </div>
    </Card>
  );
};

export default AboutMeSection;