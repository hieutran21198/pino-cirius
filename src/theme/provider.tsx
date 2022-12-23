import { AppTheme } from "./model";
import { ThemeProvider } from "@emotion/react";
import { DEFAULT_THEME } from "./constant";

export type Props = {
  theme?: AppTheme;
  children?: React.ReactNode;
};
export default function AppThemeProvider(props: Props) {
  const theme = props.theme ?? DEFAULT_THEME;

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
