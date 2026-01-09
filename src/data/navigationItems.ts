
export interface PageItem {
  labelKey: keyof typeof import("@/i18n/translations/ru").ru.pages;
  href: string;
}

export interface SectionItem {
  labelKey: keyof typeof import("@/i18n/translations/ru").ru.nav;
  href: string;
}

// Меню страниц (залитые кнопки, слева)
export const pageNavigationItems: PageItem[] = [
  { labelKey: "home", href: "/" },
  { labelKey: "viewerInfo", href: "/stream-rules" },
];

// Меню разделов главной страницы (обычные кнопки, справа)
export const sectionNavigationItems: SectionItem[] = [
  { labelKey: "aboutMe", href: "#about-me-section" },
  { labelKey: "telegram", href: "#telegram-section" },
  { labelKey: "vk", href: "#vk-section" },
  { labelKey: "contacts", href: "#contact-section" },
  { labelKey: "discord", href: "#discord-section" },
  { labelKey: "youtube", href: "#youtube-section" },
  { labelKey: "twitch", href: "#twitch-section" },
  { labelKey: "gamingPlatforms", href: "#contacts-section" },
  { labelKey: "authorCreations", href: "#author-creations-section" },
  { labelKey: "projectSupport", href: "#donation-section" },
];
