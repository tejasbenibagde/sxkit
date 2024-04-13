interface ColorTheme {
  color: string;
  bgColor: string;
  hoverColor: string;
}

const getColorTheme = (theme: string): ColorTheme | undefined => {
  switch (theme) {
    case "zinc":
      return {
        color: "rgb(250, 250, 249)",
        bgColor: "rgb(12, 10, 9)",
        hoverColor: "rgb(87 83 78)",
      };
    default:
      return undefined;
  }
};

export { getColorTheme };
