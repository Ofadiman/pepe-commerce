import { createGlobalStyle, css } from 'styled-components'

import { palette } from './palette'
import { typography } from './typography'

const bodyStyles = css`
  font-family: ${typography.font.primary};
  font-size: ${typography.size.s3};
  color: ${palette.black.dark};
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
    border-top: 1px solid ${palette.border};
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
    color: ${palette.secondary};
  }
  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;
    background: rgba(0, 0, 0, 0.05);
    color: ${palette.black.dark};
    border-radius: 3px;
    margin: 1rem 0;
  }
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
export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900&display=swap'

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }

  
  :root {
      // Palette
      --colors-primary: #FF4785;
      --colors-secondary: #1EA7FD;
      --colors-tertiary: #DDDDDD;
      
      --colors-orange: #FC521F;
      --colors-gold: #FFAE00;
      --colors-green: #66BF3C;
      --colors-seafoam: #37D5D3;
      --colors-purple: #6F2CAC;
      --colors-ultraviolet: #2A0481;
      
      
      // Monochrome
      --colors-white-light: #FFFFFF;
      --colors-white-medium: #F8F8F8;
      --colors-white-dark: #F3F3F3;
      
      --colors-gray-light: #EEEEEE;
      --colors-gray-medium: #DDDDDD;
      --colors-gray-dark: #999999;
      
      --colors-black-light: #444444;
      --colors-black-medium: #222222;
      --colors-black-dark: #000000;
      
      --colors-border: 'rgba(0,0,0,.1)';

      // Status
      --colors-status-positive: #66BF3C;
      --colors-status-negative: #FF4400;
      --colors-status-warning: #E69D00;
      
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
