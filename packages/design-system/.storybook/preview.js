import { GlobalStyle } from '../styles'

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  a11y: {
    element: '#root',
    manual: false,
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