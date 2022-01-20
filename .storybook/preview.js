import GlobalStyles from "../src/styles/globalStyle";
import theme from "../src/styles/theme";
import { ThemeProvider } from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story />
      </ThemeProvider>
  ),
];