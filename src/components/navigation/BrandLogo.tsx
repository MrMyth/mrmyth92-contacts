
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

  return null;
});

BrandLogo.displayName = "BrandLogo";

export default BrandLogo;
