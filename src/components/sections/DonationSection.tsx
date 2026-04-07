import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Gift, Copy } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const DonationSection = () => {
  const { t } = useLanguage();
  const cardNumber = "2202200321251892";

  const handleCopyCard = () => {
    navigator.clipboard.writeText(cardNumber);
    toast.success(t.donations.cardCopied, {
      description: t.donations.cardCopiedDesc,
    });
  };

  const donationMethods = [
    {
      name: t.donations.boosty,
      url: "https://boosty.to/mrmyth92_ds/",
      icon: <Gift className="h-5 w-5" />,
      color: "bg-[#F15B3D] hover:bg-[#F15B3D]/90"
    },
    {
      name: t.donations.donateStream,
      url: "https://donate.stream/mrmyth92",
      icon: <Gift className="h-5 w-5" />,
      color: "bg-[#6366F1] hover:bg-[#6366F1]/90"
    },
    {
      name: t.donations.yoomoney,
      url: "https://yoomoney.ru/to/4100118249151359",
      icon: <Gift className="h-5 w-5" />,
      color: "bg-[#F59E0B] hover:bg-[#F59E0B]/90"
    }
  ];

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/50">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase flex items-center gap-4 text-gradient-primary">
              <Gift className="h-10 w-10 text-green-600" />
              {t.donations.title}
            </h2>
            <p className="text-xl font-medium text-gradient-secondary">{t.donations.subtitle}</p>
          </div>
        </div>
        
        {/* International Warning */}
        <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-8 flex items-center justify-center">
          <p className="text-amber-700 dark:text-amber-300 text-center font-black uppercase tracking-tight text-lg md:text-xl leading-tight">
            {t.donations.internationalWarning}
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Bank Card - Full Width Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full p-8 rounded-[2.5rem] bg-card border border-border/50 shadow-2xl space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm font-black uppercase tracking-widest text-muted-foreground">{t.donations.cardNumber}</p>
              <div className="flex items-center flex-wrap gap-3">
                <p className="text-3xl md:text-4xl font-black tracking-tighter text-green-600 font-mono">
                  {cardNumber.match(/.{1,4}/g)?.join(' ')}
                </p>
                <span className="text-sm font-bold text-muted-foreground/60 uppercase tracking-wider bg-muted/50 px-2 py-1 rounded-md border border-border/50">
                  {t.donations.sberbankHint}
                </span>
              </div>
            </div>
            <Button
              onClick={handleCopyCard}
              className="w-full h-14 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-black uppercase tracking-widest shadow-lg shadow-green-600/20"
            >
              <Copy className="mr-2 h-5 w-5" />
              {t.donations.copyNumber}
            </Button>
          </motion.div>
          
          {/* Donation Buttons - Single Row */}
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
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button className={`w-full h-auto min-h-[4.5rem] py-4 px-6 rounded-2xl ${method.color} text-white font-black uppercase tracking-widest shadow-lg shadow-black/10 text-sm flex items-center gap-4 text-left whitespace-normal`}>
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-white/20 rounded-xl">
                    {method.icon}
                  </div>
                  <span className="flex-1 leading-tight">{method.name}</span>
                </Button>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DonationSection;
