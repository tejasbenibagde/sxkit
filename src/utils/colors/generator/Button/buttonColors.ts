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
  slate,
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
      case "gray":
        return {
          backgroundColor: gray.gray5,
          color: gray.gray1,
          hoverBgColor: gray.gray7,
          hoverColor: gray.gray1,
        };
      case "green":
        return {
          backgroundColor: green.green5,
          color: green.green1,
          hoverBgColor: green.green7,
          hoverColor: green.green1,
        };
      case "blue":
        return {
          backgroundColor: blue.blue5,
          color: blue.blue1,
          hoverBgColor: blue.blue7,
          hoverColor: blue.blue1,
        };
      case "orange":
        return {
          backgroundColor: orange.orange5,
          color: orange.orange1,
          hoverBgColor: orange.orange7,
          hoverColor: orange.orange1,
        };
      case "yellow":
        return {
          backgroundColor: yellow.yellow5,
          color: yellow.yellow1,
          hoverBgColor: yellow.yellow7,
          hoverColor: yellow.yellow1,
        };
      case "pink":
        return {
          backgroundColor: pink.pink5,
          color: pink.pink1,
          hoverBgColor: pink.pink7,
          hoverColor: pink.pink1,
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
          backgroundColor: slate.slate8,
          color: slate.slate1,
          hoverBgColor: slate.slate0,
          hoverColor: slate.slate1,
        };
      }
    }
  } else {
    return {
      backgroundColor: gray.gray1,
      color: gray.gray7,
      border: `1px solid ${gray.gray8}`,
      hoverBgColor: gray.gray3,
      hoverColor: gray.gray8,
      borderColor: gray.gray5,
    };
  }
};

export { getButtonColor };
