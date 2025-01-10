import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const EmailSection = () => {
  const { toast } = useToast();
  const email = "dmstarchikov@outlook.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Email скопирован",
      description: "Email адрес был скопирован в буфер обмена",
    });
  };

  return (
    <Card className="p-6 mb-8 gaming-card">
      <h2 className="text-3xl font-bold mb-6 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
        <Mail className="h-8 w-8" />
        Почта
      </h2>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <p className="text-xl text-[#F1F1F1]">Email: {email}</p>
        <Button
          onClick={handleCopyEmail}
          variant="outline"
          className="gaming-button bg-[#8B5CF6] hover:bg-[#8B5CF6]/80 text-white border-0"
        >
          <Copy className="mr-2 h-4 w-4" />
          Копировать Email
        </Button>
      </div>
    </Card>
  );
};

export default EmailSection;