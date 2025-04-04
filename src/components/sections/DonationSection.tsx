import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Gift, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const DonationSection = () => {
  const { toast } = useToast();
  const cardNumber = "2202200321251892";

  const handleCopyCard = () => {
    navigator.clipboard.writeText(cardNumber);
    toast({
      title: "Номер карты скопирован",
      description: "Номер карты скопирован в буфер обмена!",
    });
  };

  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-2 text-center text-black bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
        <Gift className="h-8 w-8 text-black" />
        Прием пожертвований
      </h2>
      <p className="text-center text-gray-600 mb-6">Все способы, с помощью которых вы можете поддержать любой мой проект</p>
      
      {/* Bank Card */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
        <p className="text-xl text-black">Номер карты: {cardNumber}</p>
        <Button
          onClick={handleCopyCard}
          variant="outline"
          className="gaming-button bg-[#1B4D3E] hover:bg-[#1B4D3E]/80 text-white border-0"
        >
          <Copy className="mr-2 h-4 w-4 text-white" />
          Копировать номер
        </Button>
      </div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="https://boosty.to/mrmyth92_ds/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="w-full gaming-button bg-[#F15B3D] hover:bg-[#F15B3D]/80 text-white border-0" variant="outline">
              <Gift className="mr-2 h-4 w-4 text-white" />
              Поддержать на Boosty
            </Button>
          </a>
          
          <a
            href="https://donatty.com/mrmyth92"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="w-full gaming-button bg-[#6366F1] hover:bg-[#6366F1]/80 text-white border-0" variant="outline">
              <Gift className="mr-2 h-4 w-4 text-white" />
              Поддержать на Donatty
            </Button>
          </a>
          
          <a
            href="https://yoomoney.ru/to/4100118249151359"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="w-full gaming-button bg-[#F59E0B] hover:bg-[#F59E0B]/80 text-white border-0" variant="outline">
              <Gift className="mr-2 h-4 w-4 text-white" />
              Поддержать через Юмани
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default DonationSection;