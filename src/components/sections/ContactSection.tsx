import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const AiCraftSection = () => {
  const socialLinks = [
    { 
      id: "vk", 
      name: "Картины 21 века от AI", 
      url: "https://vk.com/aicraftmymyth92", 
      bgColor: "bg-[#0077FF]", 
      hoverColor: "hover:bg-[#0077FF]/90" 
    },
    { 
      id: "telegram", 
      name: "Картины 21 века от AI", 
      url: "https://t.me/AiCraftMyMyth92",
      bgColor: "bg-[#229ED9]", 
      hoverColor: "hover:bg-[#229ED9]/90" 
    },
  ];

  return (
    <Card className="p-6 mb-8 gaming-card">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 text-black bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center gap-2">
            <Palette className="h-8 w-8 text-black" />
            Обои на рабочий стол
          </h2>
          <p className="text-gray-600">Авторские обои на рабочий стол</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-105"
            >
              <Button 
                variant="outline" 
                className={`w-full ${link.bgColor} ${link.hoverColor} text-white border-0 flex items-center justify-center`}
              >
                {link.id === "vk" ? (
                  <svg className="mr-2 h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.372 0 0 5.372 0 12C0 18.628 5.372 24 12 24C18.628 24 24 18.628 24 12C24 5.372 18.628 0 12 0ZM18.523 16.452C18.455 16.567 18.286 16.594 18.286 16.594H16.599C16.599 16.594 16.109 16.664 15.538 16.26C14.826 15.749 14.157 14.695 13.657 14.863C13.151 15.035 13.162 16.079 13.162 16.079C13.162 16.079 13.164 16.286 13.064 16.388C12.953 16.505 12.723 16.516 12.723 16.516H12.136C12.136 16.516 10.346 16.651 8.763 15.002C7.024 13.189 5.486 9.574 5.486 9.574C5.486 9.574 5.409 9.36 5.493 9.256C5.588 9.14 5.855 9.135 5.855 9.135H7.643C7.643 9.135 7.825 9.163 7.953 9.267C8.059 9.353 8.116 9.513 8.116 9.513C8.116 9.513 8.409 10.316 8.795 11.054C9.543 12.492 9.893 12.842 10.145 12.662C10.5 12.415 10.377 10.642 10.377 10.642C10.377 10.642 10.388 9.939 10.162 9.659C9.986 9.439 9.666 9.38 9.537 9.366C9.432 9.355 9.621 9.101 9.863 8.982C10.214 8.815 10.795 8.803 11.48 8.808C12.004 8.813 12.117 8.842 12.273 8.898C12.65 9.024 12.627 9.345 12.583 10.014C12.57 10.236 12.556 10.485 12.556 10.778C12.556 10.882 12.552 10.995 12.547 11.111C12.533 11.608 12.515 12.164 12.798 12.356C12.951 12.466 13.39 12.369 14.235 11.072C14.637 10.32 14.94 9.455 14.94 9.455C14.94 9.455 15.006 9.291 15.113 9.222C15.224 9.151 15.371 9.17 15.371 9.17L17.254 9.181C17.254 9.181 17.939 9.079 18.033 9.368C18.133 9.675 17.826 10.355 17.051 11.352C16.321 12.285 15.97 12.632 16.007 12.885C16.033 13.062 16.299 13.299 16.845 13.806C17.847 14.735 18.097 15.289 18.173 15.429C18.177 15.437 18.18 15.443 18.183 15.447C18.523 16.038 18.523 16.452 18.523 16.452Z" fill="currentColor"/>
                  </svg>
                ) : (
                  <svg className="mr-2 h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM17.855 8.212L15.87 17.176C15.725 17.764 15.389 17.904 14.898 17.635L11.893 15.409L10.45 16.793C10.295 16.948 10.164 17.079 9.862 17.079L10.068 14.024L15.615 9.038C15.852 8.827 15.565 8.709 15.256 8.921L8.51 13.292L5.55 12.401C4.973 12.22 4.961 11.845 5.669 11.562L17.021 7.166C17.502 6.993 17.916 7.274 17.855 8.212Z" fill="currentColor"/>
                  </svg>
                )}
                <span>{link.name}</span>
                <ExternalLink className="ml-2 h-3 w-3 text-white opacity-70" />
              </Button>
            </a>
          ))}
        </div>
      </motion.div>
    </Card>
  );
};

export default AiCraftSection;