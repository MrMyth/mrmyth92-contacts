import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Download, AlertCircle, MessagesSquare } from "lucide-react";

const DiscordWidget = () => {
  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-6 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
        <MessagesSquare className="h-8 w-8" />
        Discord сервер
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column - Widget */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">
            Виджет Discord сервера
          </h3>
          <iframe
            src="https://discord.com/widget?id=835802952521351180&theme=dark"
            width="100%"
            height="500"
            allowTransparency={true}
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="rounded-lg border border-[#8B5CF6]/20"
          ></iframe>
        </div>

        {/* Right column - Instructions and buttons */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Как присоединиться к серверу
            </h3>
            <p className="text-white mb-4">
              ЧТОБЫ ЗАЙТИ НА СЕРВЕР НАЖМИТЕ НА "ПРИСОЕДИНИТСЯ К DISCORD". ЕСЛИ ПРИГЛАШЕНИЕ НЕ СРАБОТАЛО, ТО ИСПОЛЬЗУЙТЕ КНОПКУ "JOIN DISCORD".
            </p>
            <a
              href="https://discord.gg/8C6HzXq92W"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block"
            >
              <Button 
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white border-0"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                ПРИСОЕДИНИТСЯ К DISCORD
              </Button>
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Дополнительно
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://discord.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button 
                  className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white border-0"
                >
                  <Download className="mr-2 h-5 w-5" />
                  СКАЧАТЬ DISCORD С ОФИЦИАЛЬНОГО САЙТА
                </Button>
              </a>
              <Button 
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white border-0"
                onClick={() => window.open('https://drive.google.com/file/d/1GEWBHezhE4-LJ9hMCk9oxg38dXf1tVSx/view', '_blank')}
              >
                <AlertCircle className="mr-2 h-5 w-5" />
                Разблокировка Discord в РФ
              </Button>
              <Button 
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white border-0"
                onClick={() => window.open('https://div2-fromrussia.lovable.app/', '_blank')}
              >
                <MessagesSquare className="mr-2 h-5 w-5" />
                Подробнее о сервере
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DiscordWidget;