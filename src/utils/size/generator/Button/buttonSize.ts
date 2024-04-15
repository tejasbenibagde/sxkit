interface SizeConfig {
  padding: string;
  fontSize: string;
  fontWeight: string;
  borderRadius: string;
  cursor: string;
}

const sizeOptions: Record<string, SizeConfig> = {
  small: {
    padding: "0.25rem 0.5rem",
    fontSize: "0.75rem",
    fontWeight: "500",
    borderRadius: "0.25rem",
    cursor: "pointer",
  },
  large: {
    padding: "1rem 2rem",
    fontSize: "1.125rem",
    fontWeight: "500",
    borderRadius: "0.5rem",
    cursor: "pointer",
  },
  medium: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    fontWeight: "500",
    borderRadius: "0.375rem",
    cursor: "pointer",
  },
};

const getButtonSize = (size: keyof typeof sizeOptions): React.CSSProperties => {
  return sizeOptions[size] || sizeOptions.medium;
};

export { getButtonSize };
