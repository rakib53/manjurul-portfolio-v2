"use client";

export default function SocialButton({
  icon,
  label,
  className,
  hoverClass,
  labelClass,
  href,
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={`socialBtn transition duration-300 ease-linear p-3 w-[44px] h-[44px] ${
        isHovered && hoverClass
      } ${className}`}
    >
      <span>{icon}</span>
      <span
        className={`text-sm font-medium transition duration-300 ease-linear ${
          isHovered
            ? "visible transition duration-300 ease-linear"
            : "invisible transition duration-300 ease-linear"
        } ${labelClass}`}
      >
        {label}
      </span>
    </a>
  );
}
