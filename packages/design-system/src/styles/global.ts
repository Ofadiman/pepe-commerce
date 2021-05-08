import { createGlobalStyle, css } from 'styled-components'

import { color } from './palette'
import { typography } from './typography'

const bodyStyles = css`
  font-family: ${typography.font.primary};
  font-size: ${typography.size.s3};
  color: ${color('mono900')};
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }
  button,
  input,
  textarea,
  select {
    font-family: ${typography.font.primary};
  }
  sub,
  sup {
    font-size: 0.8em;
  }
  sub {
    bottom: -0.2em;
  }
  sup {
    top: -0.2em;
  }
  b,
  em {
    font-weight: ${typography.weight.bold};
  }
  hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    clear: both;
    margin-bottom: 1.25rem;
  }
  code,
  pre {
    font-family: ${typography.font.code};
    font-size: ${typography.size.s2};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;
    color: ${color('secondary')};
  }
  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;
    background: rgba(0, 0, 0, 0.05);
    color: ${color('mono100')};
    border-radius: 3px;
    margin: 1rem 0;
  }
  // Overriding react-modal component
  &.ReactModal__Body--open {
    overflow: hidden;
    &.hide-intercom #intercom-container {
      display: none;
    }
  }
  .ReactModalPortal > div {
    opacity: 0;
  }
  .ReactModalPortal .ReactModal__Overlay {
    transition: all 200ms ease-in;
    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
`

// Allow design system consumers to access font settings but control how and
// where they load the font.
export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700,800,900&display=swap'

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }

  // Easily maintainable through DevTools
  :root {
      // Palette
      --colors-primary: 255, 71, 133;
      --colors-secondary: 30, 167, 253;
      --colors-tertiary: 221, 221, 221;
      
      --colors-orange: 252, 82, 31;
      --colors-gold: 255, 174, 0;
      --colors-green: 102, 191, 60;
      --colors-seafoam: 55, 213, 211;
      --colors-purple: 111, 44, 172;
      --colors-ultraviolet: 42, 4, 129;
      
      // Monochrome
      --colors-monochrome-100: 255, 255, 255;
      --colors-monochrome-200: 248, 248, 248;
      --colors-monochrome-300: 243, 243, 243;

      --colors-monochrome-400: 238, 238, 238;
      --colors-monochrome-500: 221, 221, 221;
      --colors-monochrome-600: 153, 153, 153;

      --colors-monochrome-700: 68, 68, 68;
      --colors-monochrome-800: 34, 34, 34;
      --colors-monochrome-900: 0, 0, 0;
      
      // Status
      --colors-status-positive: 102, 191, 60;
      --colors-status-negative: 255, 68, 0;
      --colors-status-warning: 230, 157, 0;
      
      // Breakpoints
      --breakpoints-xs: '600px';
      --breakpoints-sm: '920px';
      --breakpoints-md: '1280px';
      --breakpoints-lg: '1440px';
      --breakpoints-xl: '1600px';
  }
  
  // leaving it for further dark mode implementation
  // https://epicreact.dev/css-variables/
  
  // prevent mouse-clicks from focusing elements
  // this removes the ugly blue outline
  :focus:not(:focus-visible) {
    outline: none;
  }
`
