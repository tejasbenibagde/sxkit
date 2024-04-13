import {
  gray,
  red,
  green,
  blue,
  orange,
  yellow,
  pink,
  indigo,
  purple,
} from "../../../colors/palette/color";

const getBorderStyle = (color: String, theme: String): React.CSSProperties => {
  if (theme === "light") {
    switch (color) {
      case "purple":
        return {
          border: `1px solid ${purple.purple7}`,
        };
      case "blue":
        return {
          border: `1px solid ${blue.blue7}`,
        };
      case "indigo":
        return {
          border: `1px solid ${indigo.indigo7}`,
        };
      case "pink":
        return {
          border: `1px solid ${pink.pink7}`,
        };
      case "orange":
        return {
          border: `1px solid ${orange.orange7}`,
        };
      case "yellow":
        return {
          border: `1px solid ${yellow.yellow7}`,
        };
      case "green":
        return {
          border: `1px solid ${green.green7}`,
        };
      case "red":
        return {
          border: `1px solid ${red.red7}`,
        };
      case "gray":
        return {
          border: `1px solid ${gray.gray7}`,
        };
      default:
        return {
          border: `1px solid ${gray.gray7}`,
        };
    }
  } else {
    switch (color) {
      case "gray":
        return { border: `1px solid ${gray.gray4}` };
      case "red":
        return { border: `1px solid ${red.red4}` };
      case "green":
        return { border: `1px solid ${green.green4}` };
      case "blue":
        return { border: `1px solid ${blue.blue4}` };
      case "orange":
        return { border: `1px solid ${orange.orange4}` };
      case "yellow":
        return { border: `1px solid ${yellow.yellow4}` };
      case "pink":
        return { border: `1px solid ${pink.pink4}` };
      case "indigo":
        return { border: `1px solid ${indigo.indigo4}` };
      case "purple":
        return { border: `1px solid ${purple.purple4}` };
      default:
        return { border: `1px solid ${gray.gray4}` };
    }
  }
};

export { getBorderStyle };
