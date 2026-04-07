import React, { useEffect } from "react";
import AboutMeSection from "@/components/sections/AboutMeSection";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  // Update document title based on language
  useEffect(() => {
    document.title = t.pageTitle.main;
  }, [t]);

  // Обрабатываем начальную прокрутку к хэшу при загрузке страницы
  useEffect(() => {
    const handleInitialScroll = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    };
    setTimeout(handleInitialScroll, 100);
  }, []);

  return (
    <Layout>
      <div className="space-y-12">
        <section id="about-me-section" className="scroll-mt-20">
          <AboutMeSection />
        </section>
      </div>
    </Layout>
  );
};

export default Index;