
import React from "react";
import { User, Youtube, Twitch, MessageCircle, Download, HeartHandshake } from "lucide-react";
import TrovoIcon from "@/components/icons/TrovoIcon";
import { VK } from "@/components/icons/VK";
import { Discord } from "@/components/icons/Discord";
import { UbisoftConnect } from "@/components/icons/UbisoftConnect";

export interface NavigationItem {
  label: string;
  href: string;
  icon?: JSX.Element;
}

// Группируем навигационные элементы по категориям для лучшей организации
export const navigationItems: NavigationItem[] = [
  { label: "Обо мне", href: "#about-me-section", icon: <User className="w-4 h-4" /> },
  { label: "Ubisoft Connect", href: "#contacts-section", icon: <UbisoftConnect className="w-4 h-4" /> },
  { label: "Поддержка проектов", href: "#donation-section", icon: <HeartHandshake className="w-4 h-4" /> },
  { label: "YouTube", href: "#youtube-section", icon: <Youtube className="w-4 h-4" /> },
  { label: "Twitch", href: "#twitch-section", icon: <Twitch className="w-4 h-4" /> },
  { label: "Trovo", href: "#trovo-section", icon: <TrovoIcon className="w-4 h-4" /> },
  { label: "VK", href: "#vk-section", icon: <VK className="w-4 h-4" /> },
  { label: "Discord", href: "#discord-section", icon: <Discord className="w-4 h-4" /> },
  { label: "Контакты", href: "#contact-section", icon: <MessageCircle className="w-4 h-4" /> },
  { label: "Обои на рабочий стол", href: "#ai-craft-section", icon: <Download className="w-4 h-4" /> },
];
