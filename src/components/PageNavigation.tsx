import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { pageNavigationItems } from "@/data/navigationItems";
import { useLanguage } from "@/i18n/LanguageContext";

const PageNavigation = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const currentPath = location.pathname;

  const currentIndex = pageNavigationItems.findIndex(
    (item) => item.href === currentPath || (item.href === "/" && currentPath === "")
  );

  if (currentIndex === -1) return null;

  const prevItem = currentIndex > 0 ? pageNavigationItems[currentIndex - 1] : null;
  const nextItem = currentIndex < pageNavigationItems.length - 1 ? pageNavigationItems[currentIndex + 1] : null;

  if (!prevItem && !nextItem) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-12 border-t border-border/50 mt-12">
      <div className="w-full sm:w-auto">
        {prevItem && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
          >
            <Link to={prevItem.href}>
              <Button variant="outline" className="w-full sm:w-auto group gap-3 h-14 px-8 rounded-2xl border-border/50 hover:border-green-600/30 hover:bg-green-600/5 transition-all duration-300">
                <ChevronLeft className="h-5 w-5 text-green-600 group-hover:-translate-x-1 transition-transform" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                    {t.navigation.previous}
                  </span>
                  <span className="text-sm font-black uppercase tracking-wider text-gradient-primary">
                    {t.pages[prevItem.labelKey]}
                  </span>
                </div>
              </Button>
            </Link>
          </motion.div>
        )}
      </div>

      <div className="w-full sm:w-auto ml-auto">
        {nextItem && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: 5 }}
          >
            <Link to={nextItem.href}>
              <Button variant="outline" className="w-full sm:w-auto group gap-3 h-14 px-8 rounded-2xl border-border/50 hover:border-green-600/30 hover:bg-green-600/5 transition-all duration-300">
                <div className="flex flex-col items-end text-right">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                    {t.navigation.next}
                  </span>
                  <span className="text-sm font-black uppercase tracking-wider text-gradient-primary">
                    {t.pages[nextItem.labelKey]}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-green-600 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PageNavigation;
