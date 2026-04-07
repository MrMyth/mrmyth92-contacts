
import React from "react";
import { motion } from "framer-motion";

interface BrandLogoProps {
  onClick?: () => void;
}

const BrandLogo: React.FC<BrandLogoProps> = React.memo(({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 group"
    >
      {/* Nickname removed as requested */}
    </motion.button>
  );
});

BrandLogo.displayName = "BrandLogo";

export default BrandLogo;
