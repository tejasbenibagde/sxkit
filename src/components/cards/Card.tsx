import React from "react";
import { CardSettingsProvider, useCardSettings } from "./CardContextProvider";

interface CardProps {
  backgroundImage?: string;
  size?: "small" | "medium" | "large";
  color?: string;
  variant?: string;
  children: React.ReactNode;
}
interface CardComponentsProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
}
const Card: React.FC<CardProps> = ({
  backgroundImage,
  size,
  color,
  variant,
  children,
}) => {
  const cardSize = {
    small: "200px",
    medium: "250px",
    large: "300px",
  };

  return (
    <CardSettingsProvider
      backgroundImage={backgroundImage}
      size={size}
      color={color}
      variant={variant}
    >
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding:
            size === "small" ? "8px" : size === "large" ? "24px" : "16px",
          width: cardSize[size || "medium"],
          height: cardSize[size || "medium"],
          color: color || "inherit",
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        {children}
      </div>
    </CardSettingsProvider>
  );
};

const Header: React.FC<CardComponentsProps> = ({ children, ...rest }) => {
  const { size, color, variant } = useCardSettings();

  return (
    <div
      style={{
        fontSize:
          size === "small" ? "1rem" : size === "large" ? "2rem" : "1.5rem",
        color: color || "inherit",
        fontWeight: variant === "primary" ? "bold" : "normal",
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

const Body: React.FC<CardComponentsProps> = ({ children, ...rest }) => {
  const { size, color, variant } = useCardSettings();

  return (
    <div
      style={{
        fontSize:
          size === "small" ? "0.8rem" : size === "large" ? "1.2rem" : "1rem",
        color: color || "inherit",
        fontWeight: variant === "primary" ? "bold" : "normal",
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

const Footer: React.FC<CardComponentsProps> = ({
  children,
  style,
  ...rest
}) => {
  const { size, color, variant } = useCardSettings();

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        padding: "8px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        backgroundColor: "#ffffff50",
        borderTop: "1px solid #ffffff60",
        backdropFilter: "blur(5px)",
        fontSize:
          size === "small" ? "0.7rem" : size === "large" ? "1.1rem" : "0.9rem",
        color: color || "inherit",
        fontWeight: variant === "primary" ? "bold" : "normal",
        borderRadius: "12px",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export { Card, Header, Body, Footer };
