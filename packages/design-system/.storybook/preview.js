import { GlobalStyle } from '../src/styles'
import theme from "./theme";

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  a11y: {
    element: '#root',
    manual: false,
  },
  docs: {
    theme,
  },
}

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];