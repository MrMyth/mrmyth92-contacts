
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Download, AlertCircle, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const DiscordWidget = () => {
  const { toast } = useToast();
  const discordUsername = "MrMyth92";

  const handleCopyDiscordUsername = () => {
    navigator.clipboard.writeText(discordUsername);
    toast({
      title: "Discord ник скопирован",
      description: "Ник Discord был скопирован в буфер обмена"
    });
  };

  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-2 text-center text-black bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
        <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor" />
        </svg>
        Discord
      </h2>
      <p className="text-center text-gray-600 mb-6">Все, что связано с Discord</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column - Widget */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-black">Виджет Discord сервера &quot;From Russia&quot;</h3>
          <iframe 
            src="https://discord.com/widget?id=835802952521351180&theme=dark" 
            width="100%" 
            height="500" 
            allowTransparency={true}
            frameBorder="0" 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" 
            className="rounded-lg border border-[#8B5CF6]/20"
            title="Discord Widget"
            loading="lazy"
          ></iframe>
        </div>

        {/* Right column - Instructions and buttons */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">
              Как присоединиться к серверу
            </h3>
            <p className="text-black mb-4">Чтобы зайти на сервер нажмите на &quot;Присоединится к Discord&quot;. Если приглашение не сработало, то используйте кнопку &quot;Join Discord&quot;.</p>
            <div className="flex flex-col gap-3">
              <a href="https://discord.gg/rk7ZeadZGH" target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white border-0">
                  <MessageCircle className="mr-2 h-5 w-5 text-white" />
                  Присоединится к Discord
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-black">
              Дополнительно
            </h3>
            <div className="flex flex-col gap-3">
              <a href="https://discord.com/download" target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white border-0">
                  <Download className="mr-2 h-5 w-5 text-white" />
                  Скачать Discord с официального сайта
                </Button>
              </a>
              <Button 
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white border-0" 
                onClick={() => window.open('https://drive.google.com/file/d/1GEWBHezhE4-LJ9hMCk9oxg38dXf1tVSx/view', '_blank')}
              >
                <AlertCircle className="mr-2 h-5 w-5 text-white" />
                Разблокировка Discord в РФ
              </Button>
              <Button 
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white border-0" 
                onClick={() => window.open('https://div2-fromrussia.lovable.app/', '_blank')}
              >
                <svg className="mr-2 h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor" />
                </svg>
                Подробнее о сервере
              </Button>
              
              {/* Discord username block */}
              <div className="flex items-center gap-3 p-3 mt-3 rounded-lg bg-primary-foreground">
                <p className="text-black">Мой ник Discord: {discordUsername}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleCopyDiscordUsername} 
                  className="ml-auto bg-[#1B4D3E] hover:bg-[#1B4D3E]/90 text-white border-0"
                  aria-label="Копировать Discord ник"
                >
                  <Copy className="mr-2 h-4 w-4 text-white" />
                  Копировать
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DiscordWidget;
