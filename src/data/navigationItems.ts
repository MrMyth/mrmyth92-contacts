
export interface NavigationItem {
  labelKey: keyof typeof import("@/i18n/translations/ru").ru.nav;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { labelKey: "aboutMe", href: "#about-me-section" },
  { labelKey: "telegram", href: "#telegram-section" },
  { labelKey: "vk", href: "#vk-section" },
  { labelKey: "contacts", href: "#contact-section" },
  { labelKey: "discord", href: "#discord-section" },
  { labelKey: "youtube", href: "#youtube-section" },
  { labelKey: "twitch", href: "#twitch-section" },
  { labelKey: "gamingPlatforms", href: "#contacts-section" },
  { labelKey: "authorCreations", href: "#author-creations-section" },
  { labelKey: "viewerInfo", href: "/stream-rules" },
  { labelKey: "projectSupport", href: "#donation-section" },
];
