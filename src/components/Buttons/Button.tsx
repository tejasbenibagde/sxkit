import * as React from "react";

import { getButtonColor } from "../../utils/colors/generator/Button/buttoncolor";

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
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  color = "gray",
  theme = "light",
  ...rest
}) => {
  let buttonSizeClass = {
    padding: "8px 16px",
    fontSize: "16px",
    fontWeight: "500",
    borderRadius: "6px",
    cursor: "pointer",
  };
  switch (size) {
    case "small":
      buttonSizeClass = {
        padding: "4px 8px",
        fontSize: "12px",
        fontWeight: "500",
        borderRadius: "4px",
        cursor: "pointer",
      };
      break;
    case "large":
      buttonSizeClass = {
        padding: "16px 32px",
        fontSize: "18px",
        fontWeight: "500",
        borderRadius: "8px",
        cursor: "pointer",
      };
      break;
    default:
      break;
  }

  const styles = getButtonColor(color, theme);

  const buttonStyles: React.CSSProperties = {
    color: styles.color,
    backgroundColor: styles.backgroundColor,
    transition: "background-color 0.2s",
    border: styles.border ? "1px solid" : "none",
    borderColor: styles.border ? styles.borderColor : "white",

    ...buttonSizeClass,
  };

  return (
    <button
      className={`btn ${buttonSizeClass}`}
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
