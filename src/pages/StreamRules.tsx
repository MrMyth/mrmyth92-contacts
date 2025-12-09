import React, { useState } from "react";
import { Gamepad2, Volume2, Palette, MessageCircle, ArrowLeft, Info, Clock, Heart, Terminal, Copy, Check, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const rules = [
  {
    id: 1,
    icon: Gamepad2,
    title: "Особенности геймплея",
    description: "Я геймер-инвалид. Правая сторона тела движется хуже левой. Поэтому я играю в неспешном режиме и прохожу побочные места и квесты. Но также прохожу и сюжет. Пожалуйста помните, что скоростные забеги только по сюжету не для меня!"
  },
  {
    id: 2,
    icon: Volume2,
    title: "Аудио на стримах The Division 2",
    description: "Когда я стримлю Tom Clancy's The Division 2 — вы слышите всё, что я говорю, но вы не слышите то, что мне говорят через Discord."
  },
  {
    id: 3,
    icon: Palette,
    title: "Авторское оформление",
    description: "Оформление канала полностью сделано мной, оно не заказное."
  },
  {
    id: 4,
    icon: MessageCircle,
    title: "Общение в чате",
    description: "Пожалуйста, общайтесь со мной и другими зрителями в чате. Это поможет мне получить статус «Компаньона» Twitch."
  },
  {
    id: 5,
    icon: Clock,
    title: "Время запуска стримов (МСК)",
    description: "В период между 15 и 16 часами, либо около 20 часов. Пока что без привязки ко дню недели."
  },
  {
    id: 6,
    icon: Heart,
    title: "Поддержка стримов",
    description: "Чем больше донатов, тем больше стримов."
  }
];

const chatCommands = [
  { command: "!site", description: "Контакты автора. Получить ссылку на сайт-визитку." },
  { command: "!help", description: "Способы отправки пожертвований." },
  { command: "!altcontect", description: "Список альтернативных платформ." },
  { command: "!images", description: "Авторские обои на рабочий стол." }
];

const StreamRules = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      toast.success("Команда скопирована!");
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      toast.error("Не удалось скопировать");
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
              Вернуться на главную
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
              Информация для зрителей
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mb-10"
            >
              Важная информация о моих трансляциях
            </motion.p>
            
            <div className="grid gap-6">
              {rules.map((rule, index) => (
                <motion.div 
                  key={rule.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 shadow-md card-hover-effect"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <rule.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          #{index + 1}
                        </span>
                        <h2 className="text-xl font-semibold text-foreground">
                          {rule.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Цель текущего сбора */}
          <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center gap-3"
            >
              <Target className="h-8 w-8 text-amber-600" />
              Цель текущего сбора
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-amber-200 rounded-xl p-6 shadow-md"
            >
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-600 mb-4">25 000 ₽</p>
                <p className="text-muted-foreground leading-relaxed">
                  Нужно на доступ к серверному железу для работы с более крутыми нейросетями.
                </p>
              </div>
            </motion.div>
          </Card>

          {/* Команды для чата */}
          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3"
            >
              <Terminal className="h-8 w-8 text-green-600" />
              Команды для чата
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mb-10"
            >
              Полезные команды, которые можно использовать в чате стрима
            </motion.p>
            
            <div className="grid gap-4">
              {chatCommands.map((cmd, index) => (
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
                    <span className="text-muted-foreground">
                      {cmd.description}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(cmd.command)}
                    className="flex-shrink-0 gap-2"
                  >
                    {copiedCommand === cmd.command ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copiedCommand === cmd.command ? "Скопировано" : "Копировать"}
                  </Button>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Кнопка возврата внизу */}
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
                Вернуться на главную
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
