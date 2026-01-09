import { LucideIcon, User, Send, Users, Mail, MessageCircle, Youtube, Twitch, Gamepad2, Palette, DollarSign } from "lucide-react";

export interface PageItem {
  labelKey: keyof typeof import("@/i18n/translations/ru").ru.pages;
  href: string;
}

export interface SectionItem {
  labelKey: keyof typeof import("@/i18n/translations/ru").ru.nav;
  href: string;
  icon: LucideIcon;
}

// Меню страниц (залитые кнопки, слева)
export const pageNavigationItems: PageItem[] = [
  { labelKey: "home", href: "/" },
  { labelKey: "viewerInfo", href: "/stream-rules" },
];

// Меню разделов главной страницы (обычные кнопки, справа)
export const sectionNavigationItems: SectionItem[] = [
  { labelKey: "aboutMe", href: "#about-me-section", icon: User },
  { labelKey: "telegram", href: "#telegram-section", icon: Send },
  { labelKey: "vk", href: "#vk-section", icon: Users },
  { labelKey: "contacts", href: "#contact-section", icon: Mail },
  { labelKey: "discord", href: "#discord-section", icon: MessageCircle },
  { labelKey: "youtube", href: "#youtube-section", icon: Youtube },
  { labelKey: "twitch", href: "#twitch-section", icon: Twitch },
  { labelKey: "gamingPlatforms", href: "#contacts-section", icon: Gamepad2 },
  { labelKey: "authorCreations", href: "#author-creations-section", icon: Palette },
  { labelKey: "projectSupport", href: "#donation-section", icon: DollarSign },
];
