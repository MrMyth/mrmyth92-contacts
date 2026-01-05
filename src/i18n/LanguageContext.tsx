import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ru } from "./translations/ru";
import { en } from "./translations/en";

export type Language = "ru" | "en";
export type Translations = typeof ru;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = { ru, en };

// Detect language based on geolocation using free IP API
async function detectLanguageByGeo(): Promise<Language> {
  try {
    // Using ipapi.co free tier (1000 requests/day)
    const response = await fetch("https://ipapi.co/json/", { 
      signal: AbortSignal.timeout(3000) 
    });
    
    if (!response.ok) throw new Error("Failed to fetch");
    
    const data = await response.json();
    const countryCode = data.country_code?.toUpperCase();
    
    // Russian-speaking countries
    const russianCountries = ["RU", "BY", "KZ", "UA", "KG", "UZ", "TJ", "TM", "AZ", "AM", "GE", "MD"];
    
    return russianCountries.includes(countryCode) ? "ru" : "en";
  } catch (error) {
    console.log("Geolocation detection failed, using browser language fallback");
    // Fallback to browser language
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith("ru") ? "ru" : "en";
  }
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem("language");
    if (saved === "ru" || saved === "en") {
      return saved;
    }
    // Default to Russian while detecting
    return "ru";
  });
  
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Only detect on first visit (no saved preference)
    const savedLang = localStorage.getItem("language");
    if (!savedLang) {
      detectLanguageByGeo().then((detectedLang) => {
        setLanguageState(detectedLang);
        localStorage.setItem("language", detectedLang);
        setIsInitialized(true);
      });
    } else {
      setIsInitialized(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
