import * as React from "react";

import { getButtonColor } from "../../utils/colors/generator/Button/buttonColors";
import { getButtonSize } from "../../utils/size/generator/Button/buttonSize";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  color?: "red" | "green" | "orange" | "indigo" | "purple" | "black";
  theme?: "dark" | "light";
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  color = "gray",
  theme = "dark",
  style,
  ...rest
}) => {
  const sizeStyle = getButtonSize(size);
  const {
    color: colour,
    backgroundColor,
    hoverBgColor,
    hoverColor,
  } = getButtonColor(color, theme);
  const buttonStyles: React.CSSProperties = {
    transition: "background-color 0.25s",
    border: "none",

    color: colour,
    backgroundColor,

    ...sizeStyle,
    ...style,
  };

  return (
    <button
      style={buttonStyles}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverBgColor;
        e.currentTarget.style.color = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = backgroundColor;
        e.currentTarget.style.color = colour;
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
