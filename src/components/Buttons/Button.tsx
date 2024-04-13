import * as React from "react";

import { getButtonColor } from "../../utils/colors/generator/Button/buttonColors";
import { getButtonSize } from "../../utils/size/generator/Button/buttonSize";
import { getBorderStyle } from "../../utils/styles/generator/Button/buttonStyles";

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
    | "purple";
  theme?: "dark" | "light";
  border?: Boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  color = "gray",
  theme = "light",
  border = false,
  ...rest
}) => {
  const sizeStyle = getButtonSize(size);
  const styles = getButtonColor(color, theme);
  const borderStyle = border ? getBorderStyle(color, theme) : {};
  const buttonStyles: React.CSSProperties = {
    color: styles.color,
    backgroundColor: styles.backgroundColor,
    transition: "background-color 0.2s",
    border: styles.border ? "1px solid" : "none",
    borderColor: styles.border ? styles.borderColor : "white",

    ...borderStyle,
    ...sizeStyle,
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
