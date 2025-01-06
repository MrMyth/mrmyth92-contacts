import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Youtube,
  Heart,
  CreditCard,
  Mail,
  MessageCircle,
  Phone,
  ExternalLink,
} from "lucide-react";

const Index = () => {
  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    toast.success(message);
  };

  return (
    <div className="min-h-screen bg-accent text-accent-foreground">
      <div className="container px-4 py-8 mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dmitry Starchikov
          </h1>
          <p className="text-xl text-gray-300">MrMyth92</p>
        </div>

        {/* Donation Section */}
        <Card className="p-6 mb-8 bg-card hover:animate-card-hover transition-all">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Heart className="text-primary" />
            Прием пожертвований
          </h2>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <p className="text-lg">5599002035781774</p>
            <Button
              onClick={() =>
                copyToClipboard(
                  "5599002035781774",
                  "Номер карты скопирован в буфер обмена!"
                )
              }
              variant="outline"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Копировать номер
            </Button>
          </div>
        </Card>

        {/* Boosty Section */}
        <Card className="p-6 mb-8 bg-card hover:animate-card-hover transition-all">
          <a
            href="https://boosty.to/mrmyth92_ds/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full bg-primary hover:bg-primary/90">
              <ExternalLink className="mr-2 h-4 w-4" />
              Поддержать на Boosty
            </Button>
          </a>
        </Card>

        {/* YouTube Section */}
        <Card className="p-6 mb-8 bg-card hover:animate-card-hover transition-all">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Youtube className="text-primary" />
            YouTube
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="https://www.youtube.com/channel/UCNtBvyXLkPJpAnuMtB76LcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full" variant="outline">
                Посетить канал
              </Button>
            </a>
            <a
              href="https://www.youtube.com/channel/UCNtBvyXLkPJpAnuMtB76LcQ?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-primary hover:bg-primary/90">
                Подписаться
              </Button>
            </a>
          </div>
        </Card>

        {/* Contact Links Section */}
        <Card className="p-6 mb-8 bg-card hover:animate-card-hover transition-all">
          <h2 className="text-2xl font-bold mb-4">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="https://vk.com/mrmyth92ds"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                VK (MrMyth92DS)
              </Button>
            </a>
            <a
              href="https://vk.com/mrmyth92"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                VK (MrMyth92)
              </Button>
            </a>
            <a href="https://t.me/MrMyth92" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full">
                Telegram
              </Button>
            </a>
            <a
              href="https://wa.me/79898191101"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                WhatsApp
              </Button>
            </a>
            <a
              href="skype:Dmstarchikov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                Skype
              </Button>
            </a>
            <a
              href="https://ok.ru/profile/519663632974"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                Одноклассники
              </Button>
            </a>
            <a
              href="mailto:starchikovd@yahoo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
            </a>
            <a
              href="https://discord.gg/vZrmPCUN7p"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                Discord
              </Button>
            </a>
            <a href="https://vk.me/AiCraftMyMyth92" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full">
                VK Messages (AiCraft)
              </Button>
            </a>
            <a href="https://t.me/AiCraftMyMyth92" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full">
                Telegram (AiCraft)
              </Button>
            </a>
          </div>
        </Card>

        {/* Discord Widget */}
        <Card className="p-6 bg-card hover:animate-card-hover transition-all">
          <h2 className="text-2xl font-bold mb-4">Discord</h2>
          <div className="flex justify-center">
            <iframe
              src="https://discord.com/widget?id=1089843053176569913&theme=dark"
              width="350"
              height="500"
              allowTransparency={true}
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="max-w-full"
            ></iframe>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;