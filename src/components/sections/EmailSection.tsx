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
      <h2 className="text-3xl font-bold mb-6 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9]">
        Почта
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full bg-[#404040] hover:bg-[#404040]/90 text-white border-0">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
        </a>
        <Button
          variant="outline"
          className="w-full bg-[#404040] hover:bg-[#404040]/90 text-white border-0"
          onClick={handleCopyEmail}
        >
          <Copy className="mr-2 h-4 w-4" />
          Копировать Email
        </Button>
      </div>
    </Card>
  );
};

export default EmailSection;