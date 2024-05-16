"use client";
import React, { useState } from "react";

const ClickToCopy = ({
  text,
  className,
  icon,
  label,
  afterCopyIcon,
  afterCopyLabel,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        // Optionally, reset the copied state after a certain time
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <button className={className} onClick={handleCopy}>
      <span>{copied ? afterCopyIcon : icon}</span>
      <span> {copied ? afterCopyLabel : label}</span>
    </button>
  );
};

export default ClickToCopy;
