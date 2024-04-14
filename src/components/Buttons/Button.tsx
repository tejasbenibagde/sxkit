import * as React from "react";

import { getButtonColor } from "../../utils/colors/generator/Button/buttonColors";
import { getButtonSize } from "../../utils/size/generator/Button/buttonSize";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  color?:
    | "gray"
    | "red"
    | "green"
    | "blue"
    | "orange"
    | "yellow"
    | "pink"
    | "indigo"
    | "purple"
    | "black";
  theme?: "dark" | "light";
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  color = "gray",
  theme = "light",
  style,
  ...rest
}) => {
  const sizeStyle = getButtonSize(size);
  const styles = getButtonColor(color, theme);
  const buttonStyles: React.CSSProperties = {
    color: styles.color,
    backgroundColor: styles.backgroundColor,
    transition: "background-color 0.2s",
    border: "none",

    ...sizeStyle,
    ...style,
  };

  return (
    <button
      style={buttonStyles}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = styles.hoverBgColor;
        e.currentTarget.style.color = styles.hoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = styles.backgroundColor;
        e.currentTarget.style.color = styles.color;
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
