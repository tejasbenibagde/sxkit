import {
  red,
  green,
  orange,
  indigo,
  purple,
  slate as black,
} from "../../palette/color";

const getButtonColor = (color: string, theme: string = "dark") => {
  if (theme === "dark") {
    switch (color) {
      case "red":
        return {
          backgroundColor: red.red5,
          color: red.red1,
          hoverBgColor: red.red7,
          hoverColor: red.red1,
        };
      case "green":
        return {
          backgroundColor: green.green5,
          color: green.green1,
          hoverBgColor: green.green7,
          hoverColor: green.green1,
        };
      case "orange":
        return {
          backgroundColor: orange.orange5,
          color: orange.orange1,
          hoverBgColor: orange.orange7,
          hoverColor: orange.orange1,
        };
      case "indigo":
        return {
          backgroundColor: indigo.indigo5,
          color: indigo.indigo1,
          hoverBgColor: indigo.indigo7,
          hoverColor: indigo.indigo1,
        };
      case "purple":
        return {
          backgroundColor: purple.purple5,
          color: purple.purple1,
          hoverBgColor: purple.purple7,
          hoverColor: purple.purple1,
        };
      default: {
        return {
          backgroundColor: black.slate8,
          color: black.slate1,
          hoverBgColor: black.slate0,
          hoverColor: black.slate1,
        };
      }
    }
  } else {
    return {
      backgroundColor: black.slate2,
      color: black.slate7,
      hoverBgColor: black.slate4,
      hoverColor: black.slate8,
    };
  }
};

export { getButtonColor };
