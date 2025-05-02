
import React from "react";
import { motion } from "framer-motion";

const BrandLogo = () => {
  return (
    <motion.div 
      className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004d00] to-[#006400] flex flex-col items-start"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <span>MrMyth92</span>
      <span>Dmitry Starchikov</span>
    </motion.div>
  );
};

export default BrandLogo;
