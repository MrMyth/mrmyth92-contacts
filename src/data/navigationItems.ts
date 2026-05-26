export interface PageItem {
  labelKey: keyof typeof import("@/i18n/translations/ru").ru.pages;
  href: string;
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
