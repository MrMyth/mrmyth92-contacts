import React, { useState } from "react";
import { Gamepad2, Volume2, Palette, MessageCircle, ArrowLeft, Info, Clock, Heart, Terminal, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

const ruleIcons = [Gamepad2, Volume2, Palette, MessageCircle, Clock, Heart];

const StreamRules = () => {
  const { t } = useLanguage();
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      toast.success(t.streamRules.commandCopied);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      toast.error(t.streamRules.copyFailed);
    }
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-24 py-12">
        <section className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/50">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase flex items-center gap-4 text-gradient-primary">
                  <Info className="h-10 w-10 text-green-600" />
                  {t.streamRules.title}
                </h1>
                <p className="text-xl font-medium text-gradient-secondary">{t.streamRules.subtitle}</p>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.streamRules.rules.map((rule, index) => {
              const IconComponent = ruleIcons[index % ruleIcons.length];
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-green-600/30 transition-all duration-500 space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-green-600/10 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <span className="text-4xl font-black tracking-tighter text-muted-foreground/20">0{index + 1}</span>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-black tracking-tight uppercase text-gradient-primary">{rule.title}</h2>
                    <p className="text-muted-foreground leading-relaxed font-medium">{rule.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Chat Commands */}
        <section className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/50">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase flex items-center gap-4 text-gradient-primary">
                  <Terminal className="h-10 w-10 text-green-600" />
                  {t.streamRules.chatCommandsTitle}
                </h2>
                <p className="text-xl font-medium text-gradient-secondary">{t.streamRules.chatCommandsSubtitle}</p>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.streamRules.chatCommands.map((cmd, index) => (
              <motion.div 
                key={cmd.command}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between gap-4 bg-card border border-border/50 rounded-2xl p-6 hover:border-green-600/30 transition-all duration-300"
              >
                <div className="flex flex-col gap-1">
                  <code className="text-lg font-black tracking-tighter text-green-600 uppercase">
                    {cmd.command}
                  </code>
                  <span className="text-sm text-muted-foreground font-medium">{cmd.description}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => copyToClipboard(cmd.command)} 
                  className="flex-shrink-0 h-10 w-10 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  {copiedCommand === cmd.command ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                </Button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StreamRules;
