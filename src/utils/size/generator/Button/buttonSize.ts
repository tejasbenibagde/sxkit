const getButtonSize = (size: string): React.CSSProperties => {
  switch (size) {
    case "small":
      return {
        padding: "0.25rem 0.5rem",
        fontSize: "0.75rem",
        fontWeight: "500",
        borderRadius: "0.25rem",
        cursor: "pointer",
      };
    case "large":
      return {
        padding: "1rem 2rem",
        fontSize: "1.125rem",
        fontWeight: "500",
        borderRadius: "0.5rem",
        cursor: "pointer",
      };
    default:
      // case for medium
      return {
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        fontWeight: "500",
        borderRadius: "0.375rem",
        cursor: "pointer",
      };
  }
};

export { getButtonSize };
