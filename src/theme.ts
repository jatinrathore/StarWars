import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#e5edff",
      100: "#b6c8fb",
      200: "#87a3f6",
      300: "#597ff3",
      400: "#2e5aef",
      500: "#1a42d7",
      600: "#1232a7",
      700: "#0b2478",
      800: "#041649",
      900: "#00071c",
    },
  },
});

export default theme;
