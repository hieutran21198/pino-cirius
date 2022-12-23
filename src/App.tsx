import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "components/shared/box";
import AppThemeProvider from "theme/provider";

const S = {
  App: styled(Box)``,
  FontFaces: css`
    @font-face {
      font-family: "DaddyTimeMono";
      src: url("src/assets/fonts/DaddyTimeMono-Nerd-Font-Complete.ttf") format("truetype");
    }
  `,
};

function App() {
  return (
    <AppThemeProvider>
      <Global styles={S.FontFaces} />
      <S.App></S.App>
    </AppThemeProvider>
  );
}

export default App;
