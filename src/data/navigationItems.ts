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
  { labelKey: "streams", href: "/streams" },
  { labelKey: "socials", href: "/socials" },
  { labelKey: "contact", href: "/email" },
  { labelKey: "gaming", href: "/gaming" },
  { labelKey: "music", href: "/music" },
  { labelKey: "wallpapers", href: "/wallpapers" },
  { labelKey: "support", href: "/support" },
  { labelKey: "setup", href: "/setup" },
  { labelKey: "viewerInfo", href: "/stream-rules" },
];

// Меню разделов главной страницы (обычные кнопки, справа)
export const sectionNavigationItems: SectionItem[] = [
  { labelKey: "aboutMe", href: "#about-me-section", icon: User },
  { labelKey: "telegram", href: "#telegram-section", icon: Send },
  { labelKey: "vk", href: "#vk-section", icon: Users },
  { labelKey: "contacts", href: "#email-section", icon: Mail },
  { labelKey: "discord", href: "#discord-section", icon: MessageCircle },
  { labelKey: "gamingPlatforms", href: "/gaming", icon: Gamepad2 },
  { labelKey: "authorCreations", href: "#author-creations-section", icon: Palette },
  { labelKey: "projectSupport", href: "#donation-section", icon: DollarSign },
];
