import React, { useState } from "react";
import { Gamepad2, Volume2, Palette, MessageCircle, ArrowLeft, Info, Clock, Heart, Terminal, Copy, Check, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    <div className="min-h-screen bg-background text-foreground">
      <NavigationMenu />
      <main className="container px-4 py-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t.streamRules.backToMain}
            </Button>
          </Link>
          
          <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3"
            >
              <Info className="h-8 w-8 text-green-600" />
              {t.streamRules.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mb-10"
            >
              {t.streamRules.subtitle}
            </motion.p>
            
            <div className="grid gap-6">
              {t.streamRules.rules.map((rule, index) => {
                const IconComponent = ruleIcons[index];
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-xl p-6 shadow-md card-hover-effect"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
                          <h2 className="text-xl font-semibold text-foreground">{rule.title}</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{rule.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>

          {/* Chat Commands */}
          <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3"
            >
              <Terminal className="h-8 w-8 text-green-600" />
              {t.streamRules.chatCommandsTitle}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mb-10"
            >
              {t.streamRules.chatCommandsSubtitle}
            </motion.p>
            
            <div className="grid gap-4">
              {t.streamRules.chatCommands.map((cmd, index) => (
                <motion.div 
                  key={cmd.command}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between gap-4 bg-card border border-border rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <code className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-md font-mono text-sm font-semibold">
                      {cmd.command}
                    </code>
                    <span className="text-muted-foreground">{cmd.description}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(cmd.command)} className="flex-shrink-0 gap-2">
                    {copiedCommand === cmd.command ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    {copiedCommand === cmd.command ? t.streamRules.copied : t.streamRules.copy}
                  </Button>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Fundraising Goal */}
          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center gap-3"
            >
              <Target className="h-8 w-8 text-amber-600" />
              {t.streamRules.fundraisingTitle}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-amber-200 rounded-xl p-6 shadow-md"
            >
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-600 mb-4">{t.streamRules.fundraisingAmount}</p>
                <p className="text-muted-foreground leading-relaxed">{t.streamRules.fundraisingDesc}</p>
              </div>
            </motion.div>
          </Card>

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t.streamRules.backToMain}
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StreamRules;
