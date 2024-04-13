const getButtonSize = (size: String): React.CSSProperties => {
  switch (size) {
    case "small":
      return {
        padding: "4px 8px",
        fontSize: "12px",
        fontWeight: "500",
        borderRadius: "4px",
        cursor: "pointer",
      };
    case "large":
      return {
        padding: "16px 32px",
        fontSize: "18px",
        fontWeight: "500",
        borderRadius: "8px",
        cursor: "pointer",
      };
    default:
      // case for medium
      return {
        padding: "8px 16px",
        fontSize: "16px",
        fontWeight: "500",
        borderRadius: "6px",
        cursor: "pointer",
      };
  }
};

export { getButtonSize };
