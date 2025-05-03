
import React from "react";
import { motion } from "framer-motion";

interface BrandLogoProps {
  onClick?: () => void;
}

const BrandLogo: React.FC<BrandLogoProps> = React.memo(({ onClick }) => {
  return (
    <motion.div 
      className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004d00] to-[#006400] flex flex-col items-start cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <span>MrMyth92</span>
      <span>Dmitry Starchikov</span>
    </motion.div>
  );
});

BrandLogo.displayName = "BrandLogo";

export default BrandLogo;
