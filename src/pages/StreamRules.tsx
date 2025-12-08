import React from "react";
import { Gamepad2, Volume2, Palette, MessageCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

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
  }
];

const StreamRules = () => {
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
          
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Правила стрима
          </h1>
          <p className="text-center text-muted-foreground mb-10">
            Важная информация для зрителей моих трансляций
          </p>
          
          <div className="grid gap-6">
            {rules.map((rule, index) => (
              <div 
                key={rule.id}
                className="bg-card border border-border rounded-xl p-6 shadow-lg card-hover-effect"
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
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StreamRules;
