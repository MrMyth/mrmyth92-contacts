import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Cpu, HardDrive, Wind, Monitor, Mic, Headphones, Zap, Box, Terminal } from "lucide-react";

const PCSpecs = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t.pages.setup} - ${t.header.title}`;
    window.scrollTo(0, 0);
  }, [t]);

  const specGroups = [
    {
      title: t.setup.categories.core,
      icon: <Cpu className="h-8 w-8 text-green-600" />,
      specs: [
        { label: t.setup.specs.cpu, value: t.setup.specs.cpuValue },
        { label: t.setup.specs.gpu, value: t.setup.specs.gpuValue },
        { label: t.setup.specs.ram, value: t.setup.specs.ramValue },
        { label: t.setup.specs.motherboard, value: t.setup.specs.motherboardValue },
      ]
    },
    {
      title: t.setup.categories.storage,
      icon: <HardDrive className="h-8 w-8 text-green-600" />,
      specs: [
        { label: t.setup.specs.ssd1, value: t.setup.specs.ssd1Value },
        { label: t.setup.specs.ssd2, value: t.setup.specs.ssd2Value },
        { label: t.setup.specs.hdd, value: t.setup.specs.hddValue },
      ]
    },
    {
      title: t.setup.categories.cooling,
      icon: <Wind className="h-8 w-8 text-green-600" />,
      specs: [
        { label: t.setup.specs.psu, value: t.setup.specs.psuValue },
        { label: t.setup.specs.cooler, value: t.setup.specs.coolerValue },
        { label: t.setup.specs.case, value: t.setup.specs.caseValue },
        { label: t.setup.specs.fans, value: t.setup.specs.fansValue },
      ]
    },
    {
      title: t.setup.categories.peripherals,
      icon: <Monitor className="h-8 w-8 text-green-600" />,
      specs: [
        { label: t.setup.specs.monitor, value: t.setup.specs.monitorValue },
        { label: t.setup.specs.keyboard, value: t.setup.specs.keyboardValue },
        { label: t.setup.specs.mouse, value: t.setup.specs.mouseValue },
        { label: t.setup.specs.mic, value: t.setup.specs.micValue },
        { label: t.setup.specs.soundCard, value: t.setup.specs.soundCardValue },
        { label: t.setup.specs.headphones, value: t.setup.specs.headphonesValue },
      ]
    },
    {
      title: t.setup.categories.os,
      icon: <Terminal className="h-8 w-8 text-green-600" />,
      specs: [
        { label: t.setup.specs.os, value: t.setup.specs.osValue },
      ]
    }
  ];

  return (
    <Layout>
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/50">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase flex items-center gap-4 text-gradient-primary">
                <Zap className="h-10 w-10 text-green-600" />
                {t.pages.setup}
              </h1>
              <p className="text-xl font-medium text-gradient-secondary">{t.setup.subtitle}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-green-600/30 transition-all duration-500 space-y-8 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-600/10 rounded-2xl">
                  {group.icon}
                </div>
                <h2 className="text-2xl font-black tracking-tight uppercase text-gradient-primary">
                  {group.title}
                </h2>
              </div>
              
              <div className="space-y-6">
                {group.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="space-y-1">
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                      {spec.label}
                    </p>
                    <p className="text-lg font-bold tracking-tight text-foreground leading-tight">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PCSpecs;
