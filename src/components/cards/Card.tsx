import React, { createContext, useContext } from "react";

// Create a context for the card settings
const CardSettings = createContext({ backgroundUrl: undefined });

// Card component
const Card: React.FC = ({ children }) => {
  const { backgroundUrl } = useContext(CardSettings);

  return (
    <div className="relative card h-52 w-48 rounded-lg">
      {/* Use absolute positioning for the image */}
      <img
        src={backgroundUrl}
        alt="card-image"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
      />
      <div className="card-content">{children}</div>
    </div>
  );
};

// Header component
const Header: React.FC = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

// Footer component
const Footer: React.FC = ({ children }) => {
  return <div className="card-footer">{children}</div>;
};

export { CardSettings, Card, Header, Footer };
