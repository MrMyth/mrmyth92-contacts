
import React from "react";
import { motion } from "framer-motion";

interface BrandLogoProps {
  onClick?: () => void;
}

const BrandLogo: React.FC<BrandLogoProps> = React.memo(({ onClick }) => {
  // Enhanced animation variants
  const hoverAnimation = {
    rest: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    hover: { scale: 1.03, transition: { duration: 0.2, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004d00] to-[#006400] flex flex-col items-start cursor-pointer"
      variants={hoverAnimation}
      initial="rest"
      whileHover="hover"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="Логотип, вернуться наверх"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <span>MrMyth92</span>
      <span>Dmitry Starchikov</span>
    </motion.div>
  );
});

BrandLogo.displayName = "BrandLogo";

export default BrandLogo;
