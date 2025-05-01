
import React from "react";

const TrovoIcon = ({ className }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512" 
      className={className}
      fill="currentColor"
    >
      <path d="M442.79,107H363.71v86l-58-86H226.61v222.1h79.07v-86l58,86h79.1Zm-283.33,0h-79.1v86l-58-86H0v222.1H79.07v-86.05l58,86h22.39Zm34.16,0V221.47H226.6v-36H193.62Zm0,108.52H226.6v-36H193.62Z"/>
    </svg>
  );
};

export default TrovoIcon;
