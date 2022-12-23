import styled from "@emotion/styled";
import { Box } from "components/shared/box";
import AppThemeProvider from "theme/provider";

const S = {
  App: styled(Box)``,
};

function App() {
  return (
    <AppThemeProvider>
      <S.App></S.App>
    </AppThemeProvider>
  );
}

export default App;
