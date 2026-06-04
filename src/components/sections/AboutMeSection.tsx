import React from "react";
import { Card } from "@/components/ui/card";
import { User, Gamepad2, Youtube, Twitch, Disc3, Paintbrush, AlertCircle, Info } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

type BiographyItemProps = {
  label: string;
  value: string;
};

const BiographyItem: React.FC<BiographyItemProps> = ({ label, value }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, margin: "-50px" }}
    className="flex items-start gap-3"
  >
    <span className="text-green-500 mt-1">•</span>
    <p className="text-foreground">
      <span className="font-semibold">{label}</span> {value}
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
    <p className="text-foreground">{children}</p>
  </motion.div>
);

const AboutMeSection = () => {
  const { t } = useLanguage();
  
  const biographyItems = [
    { 
      id: "name", 
      label: t.about.fullName, 
      value: t.about.fullNameValue
    },
    { 
      id: "birthdate", 
      label: t.about.birthDate, 
      value: t.about.birthDateValue
    }
  ];

  return (
    <section className="py-24 border-t border-border/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img 
              src="/images/my-ava.jpg" 
              alt={t.about.photoAlt} 
              className="w-full h-full object-cover transition-all duration-700" 
              loading="lazy" 
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-green-600/10 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Content Column */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2 pb-8 border-b border-border/50"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase flex items-center gap-4 text-gradient-primary">
              <User className="h-10 w-10 text-green-600" />
              {t.about.title}
            </h2>
            <p className="text-xl font-medium text-gradient-secondary">{t.about.subtitle}</p>
          </motion.div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3 text-gradient-secondary">
                <Info className="h-6 w-6 text-green-600" />
                {t.about.personalInfoTitle}
              </h3>
              <div className="flex flex-col gap-4">
                {biographyItems.map((item) => (
                  <BiographyItem 
                    key={item.id} 
                    label={item.label} 
                    value={item.value}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3 text-gradient-secondary">
                <Paintbrush className="h-6 w-6 text-green-600" />
                {t.about.skillsTitle}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {t.about.skills.map((skill, index) => (
                  <SkillItem key={index}>{skill}</SkillItem>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-amber-500/5 border border-amber-500/10 p-6 rounded-3xl"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                <p className="text-sm text-amber-700 dark:text-amber-300 font-medium leading-relaxed">
                  {t.about.warning1}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-500/5 border border-blue-500/10 p-6 rounded-3xl"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-sm text-blue-700 dark:text-blue-300 font-medium leading-relaxed">
                  {t.about.warning2}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
