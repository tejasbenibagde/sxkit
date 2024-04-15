import { red, green, orange, indigo, purple, slate } from "../../palette/color";

interface ColorConfig {
  backgroundColor: string;
  color: string;
  hoverBgColor: string;
  hoverColor: string;
}

interface ThemeColors {
  [key: string]: ColorConfig;
}

const darkThemeColors: ThemeColors = {
  red: {
    backgroundColor: red.red5,
    color: red.red1,
    hoverBgColor: red.red7,
    hoverColor: red.red1,
  },
  green: {
    backgroundColor: green.green5,
    color: green.green1,
    hoverBgColor: green.green7,
    hoverColor: green.green1,
  },
  orange: {
    backgroundColor: orange.orange5,
    color: orange.orange1,
    hoverBgColor: orange.orange7,
    hoverColor: orange.orange1,
  },
  indigo: {
    backgroundColor: indigo.indigo5,
    color: indigo.indigo1,
    hoverBgColor: indigo.indigo7,
    hoverColor: indigo.indigo1,
  },
  purple: {
    backgroundColor: purple.purple5,
    color: purple.purple1,
    hoverBgColor: purple.purple7,
    hoverColor: purple.purple1,
  },
  default: {
    backgroundColor: slate.slate8,
    color: slate.slate1,
    hoverBgColor: slate.slate0,
    hoverColor: slate.slate1,
  },
};

const lightThemeColors: ColorConfig = {
  backgroundColor: slate.slate2,
  color: slate.slate7,
  hoverBgColor: slate.slate4,
  hoverColor: slate.slate8,
};

const getButtonColor = (
  color: keyof ThemeColors,
  theme: string = "dark"
): ColorConfig => {
  if (theme === "light") {
    return lightThemeColors;
  } else {
    return darkThemeColors[color] || darkThemeColors.default;
  }
};

export { getButtonColor };
