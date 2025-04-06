import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Gift, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const DonationSection = () => {
  const { toast } = useToast();
  const cardNumber = "2202200321251892";

  const handleCopyCard = () => {
    navigator.clipboard.writeText(cardNumber);
    toast({
      title: "Номер карты скопирован",
      description: "Номер карты скопирован в буфер обмена!",
      duration: 2000,
    });
  };

  const donationMethods = [
    {
      name: "Поддержать на Boosty",
      url: "https://boosty.to/mrmyth92_ds/",
      icon: <Gift className="h-5 w-5" />,
      color: "bg-[#F15B3D] hover:bg-[#F15B3D]/90"
    },
    {
      name: "Поддержать на Donatty",
      url: "https://donatty.com/mrmyth92",
      icon: <Gift className="h-5 w-5" />,
      color: "bg-[#6366F1] hover:bg-[#6366F1]/90"
    },
    {
      name: "Поддержать через Юмани",
      url: "https://yoomoney.ru/to/4100118249151359",
      icon: <Gift className="h-5 w-5" />,
      color: "bg-[#F59E0B] hover:bg-[#F59E0B]/90"
    }
  ];

  return (
    <Card className="p-8 mb-8 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center gap-3">
          <Gift className="h-8 w-8 text-purple-600" />
          Прием пожертвований
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Все способы, с помощью которых вы можете поддержать любой мой проект
        </p>
        
        {/* Bank Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8 p-4 bg-gray-100 rounded-xl"
        >
          <p className="text-xl font-medium text-gray-900">
            Номер карты: <span className="font-mono text-purple-600">{cardNumber}</span>
          </p>
          <Button
            onClick={handleCopyCard}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Copy className="mr-2 h-4 w-4" />
            Копировать номер
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {donationMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className={`w-full ${method.color} text-white`}>
                {method.icon}
                {method.name}
              </Button>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Card>
  );
};

export default DonationSection;