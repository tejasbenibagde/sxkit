import React, { createContext, useContext, ReactNode } from "react";

// Define the context and its default values
const CardSettingsContext = createContext({
  backgroundImage: "",
  size: "medium",
  color: "",
  variant: "",
});

interface CardSettingsProps {
  backgroundImage?: string;
  size?: "small" | "medium" | "large";
  color?: string;
  variant?: string;
  children: ReactNode;
}

export const CardSettingsProvider: React.FC<CardSettingsProps> = ({
  backgroundImage = "",
  size = "medium",
  color = "",
  variant = "",
  children,
}) => {
  return (
    <CardSettingsContext.Provider
      value={{ backgroundImage, size, color, variant }}
    >
      {children}
    </CardSettingsContext.Provider>
  );
};

export const useCardSettings = () => useContext(CardSettingsContext);
