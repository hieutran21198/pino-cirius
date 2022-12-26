import { AppTheme } from "./model";
import { css, Global, Interpolation, Theme, ThemeProvider } from "@emotion/react";
import { DEFAULT_THEME, MediaWidth } from "./constants";

export interface Props {
  theme?: AppTheme;
  children?: React.ReactNode;
}
const AppThemeProvider: React.FC<Props> = (props: Props) => {
  const setCommonGlobalTheme: Interpolation<Theme> = (t: Theme) => {
    return css`
      :root {
        font-family: ${t.fontFamily};
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;

        color: ${t.textColor};
        background-color: ${t.backgroundColor};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
      }

      html {
        box-sizing: border-box;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      /* Reset margins and paddings on most elements */
      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ul,
      ol,
      li,
      p,
      pre,
      blockquote,
      figure,
      hr {
        margin: 0;
        padding: 0;
      }

      /* Removes discs from ul */
      ul {
        list-style: none;
      }

      /* inherit typography for forms and buttons */
      input,
      textarea,
      select,
      button {
        color: inherit;
        font: inherit;
        letter-spacing: inherit;
      }

      /* common border style */
      input,
      textarea,
      button {
        border: ${t.border};
      }

      table {
        table-layout: fixed;
        width: 100%;
      }

      [hidden] {
        display: none !important;
      }

      /* noscript styles */
      noscript {
        display: block;
        margin-bottom: 1em;
        margin-top: 1em;
      }

      a {
        font-weight: 500;
        color: ${t.primaryColorLighter};
        text-decoration: inherit;
      }
      a:hover {
        color: ${t.primaryColor};
      }

      body {
        margin: 0;
        display: flex;
        place-items: center;
        min-width: ${MediaWidth.SM};
        min-height: 100vh;
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }
    `;
  };

  return (
    <ThemeProvider theme={props.theme ?? DEFAULT_THEME}>
      <Global styles={setCommonGlobalTheme} />
      {props.children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
