
import React from "react";
import { motion } from "framer-motion";

const BrandLogo = () => {
  return (
    <motion.a 
      href="#hero-section"
      className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004d00] to-[#006400] flex flex-col items-start no-underline"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
      aria-label="MrMyth92 - На главную страницу"
    >
      <span className="leading-tight tracking-tight">MrMyth92</span>
      <span className="text-sm text-gray-600 font-medium">Dmitry Starchikov</span>
    </motion.a>
  );
};

export default BrandLogo;
