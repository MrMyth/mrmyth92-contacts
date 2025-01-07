import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, CreditCard, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const DonationSection = () => {
  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    toast.success(message);
  };

  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 justify-center text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9]">
        <DollarSign className="text-[#8B5CF6]" />
        Прием пожертвований
      </h2>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <p className="text-xl text-[#F1F1F1]">Номер карты: 5599002035781774</p>
          <Button
            onClick={() =>
              copyToClipboard(
                "5599002035781774",
                "Номер карты скопирован в буфер обмена!"
              )
            }
            variant="outline"
            className="gaming-button bg-[#8B5CF6] hover:bg-[#8B5CF6]/80 text-white border-0"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Копировать номер
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="https://boosty.to/mrmyth92_ds/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="w-full gaming-button bg-[#F15B3D] hover:bg-[#F15B3D]/80 text-white border-0" variant="outline">
              <DollarSign className="mr-2 h-4 w-4" />
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
              <DollarSign className="mr-2 h-4 w-4" />
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
              <DollarSign className="mr-2 h-4 w-4" />
              ЮMoney
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default DonationSection;