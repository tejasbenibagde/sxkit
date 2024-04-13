import {
  gray, // not looking good
  red,
  green,
  blue,
  orange,
  yellow,
  pink,
  indigo,
  purple,
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
          border: false,
        };
      case "gray":
        return {
          backgroundColor: gray.gray5,
          color: gray.gray1,
          hoverBgColor: gray.gray7,
          hoverColor: gray.gray1,
          border: false,
        };
      case "green":
        return {
          backgroundColor: green.green5,
          color: green.green1,
          hoverBgColor: green.green7,
          hoverColor: green.green1,
          border: false,
        };
      case "blue":
        return {
          backgroundColor: blue.blue5,
          color: blue.blue1,
          hoverBgColor: blue.blue7,
          hoverColor: blue.blue1,
          border: false,
        };
      case "orange":
        return {
          backgroundColor: orange.orange5,
          color: orange.orange1,
          hoverBgColor: orange.orange7,
          hoverColor: orange.orange1,
          border: false,
        };
      case "yellow":
        return {
          backgroundColor: yellow.yellow5,
          color: yellow.yellow1,
          hoverBgColor: yellow.yellow7,
          hoverColor: yellow.yellow1,
          border: false,
        };
      case "pink":
        return {
          backgroundColor: pink.pink5,
          color: pink.pink1,
          hoverBgColor: pink.pink7,
          hoverColor: pink.pink1,
          border: false,
        };
      case "indigo":
        return {
          backgroundColor: indigo.indigo5,
          color: indigo.indigo1,
          hoverBgColor: indigo.indigo7,
          hoverColor: indigo.indigo1,
          border: false,
        };
      case "purple":
        return {
          backgroundColor: purple.purple5,
          color: purple.purple1,
          hoverBgColor: purple.purple7,
          hoverColor: purple.purple1,
          border: false,
        };
      default: {
        return {
          backgroundColor: "#18181b",
          color: "#ffffff",
          hoverBgColor: "#18181b",
          hoverColor: "#ffffff",
          border: false,
        };
      }
    }
  } else {
    return {
      backgroundColor: gray.gray1,
      color: gray.gray7,
      hoverBgColor: gray.gray3,
      hoverColor: gray.gray8,
      border: true,
      borderColor: gray.gray5,
    };
  }
};

export { getButtonColor };
