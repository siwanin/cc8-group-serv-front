import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html , body": {
        padding: 0,
        margin: 0,
      },
      "*": {
        boxSizing: "border-box",
      },
    },
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["120px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
      color: "#032D23",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
  colors: {
    primary: {
      200: "#FFFFFF",
      100: "#032D23",
    },
    secondary: "#C06014",
    highlight: {
      100: "#F27B19",
    },
    muted: {
      300: "#F3F4ED",
      200: "#FCFCFC",
      100: "#FFFFFF",
    },
  },
  fonts: {
    heading: "Kanit",
    body: "Kanit",
  },
});
