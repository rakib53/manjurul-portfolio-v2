"use client";
import React, { useState } from "react";

export default function SocialButton({
  icon,
  label,
  className,
  hoverClass,
  labelClass,
  href,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`socialBtn transition duration-300 ease-linear p-3 h-[50px] ${
        isHovered && hoverClass
      } ${className}`}
    >
      <span>{icon}</span>
      <span
        className={`text-sm font-medium ${
          isHovered ? "inline-block" : "hidden"
        } ${labelClass}`}
      >
        {label}
      </span>
    </a>
  );
}
