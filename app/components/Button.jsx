import React from "react";

export default function Button({
  icon,
  iconPosition,
  label,
  className,
  labelClass,
  link,
  linkTarget,
}) {
  let render;

  if (iconPosition === "left") {
    render = (
      <>
        <span>{icon}</span>
        <span className={labelClass}>{label}</span>
      </>
    );
  } else if (iconPosition === "right") {
    render = (
      <>
        <span className={labelClass}>{label}</span>
        <span>{icon}</span>
      </>
    );
  } else {
    render = (
      <>
        <span className={labelClass}>{label}</span>
      </>
    );
  }

  return (
    <React.Fragment>
      {link ? (
        <a href={link} target={linkTarget ? linkTarget : "_parent"}>
          <button className={`font-rocGroteskMid w-full ${className}`}>
            {render}
          </button>
        </a>
      ) : (
        <button className={`font-rocGroteskMid ${className}`}>{render}</button>
      )}
    </React.Fragment>
  );
}
