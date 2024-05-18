import React from "react";

export default function Button({
  icon,
  iconPosition,
  label,
  className,
  labelClass,
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

  return <button className={className}>{render}</button>;
}
