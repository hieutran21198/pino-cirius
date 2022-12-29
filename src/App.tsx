import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { Header } from "components/features/header";
import { AppRoutes } from "components/routes";
import { Box } from "components/shared/box";
import {
  APP_NAME,
  FORCE_LOAD_AUTH_CHANNEL,
  HEADER_NAVIGATION_ITEMS,
  LIGHT_THEME,
  LocalStorageKeys,
  ThemePreset,
  THEME_PRESET_ICONS,
} from "constants/app";
import { RoutePath } from "constants/routes";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_THEME, MediaWidth } from "theme/constants";

import AppThemeProvider from "theme/provider";
import { media } from "theme/utils";
import { getThemePreset } from "utils/theme";

const S = {
  App: styled(Box)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  FontFaces: css`
    @font-face {
      font-family: "DaddyTimeMono";
      src: url("/fonts/DaddyTimeMono-Nerd-Font-Complete.ttf") format("truetype");
    }
  `,
  ContentContainer: styled(Box)`
    margin-top: calc(${(props) => props.theme.headerHeight} + 3em);
    ${media(MediaWidth.LG)} {
      margin-top: calc(${(props) => props.theme.headerHeightLG} + 4em);
    }
  `,
};

const App: React.FC = () => {
  const [themePreset, setThemePreset] = useState<ThemePreset>(getThemePreset());
  const location = useLocation();

  const handleOnClickChangeThemeButton = (): void => {
    const nextTheme = themePreset === ThemePreset.DARK ? ThemePreset.LIGHT : ThemePreset.DARK;

    setThemePreset(nextTheme);
  };

  useEffect(() => {
    localStorage.setItem(LocalStorageKeys.THEME, themePreset);
  }, [themePreset]);

  useEffect(() => {
    const channel = new BroadcastChannel(FORCE_LOAD_AUTH_CHANNEL);

    const getMessage = (event: { data: boolean }): void => {
      if (!location.pathname.startsWith(RoutePath.OAUTH_REDIRECTED) && event.data) {
        console.log(true);
      }
    };

    channel.addEventListener("message", getMessage);

    return () => {
      channel.removeEventListener("message", getMessage);
    };
  }, []);

  return (
    <AppThemeProvider theme={themePreset === ThemePreset.DARK ? DEFAULT_THEME : LIGHT_THEME}>
      <Global styles={S.FontFaces} />
      <S.App>
        <Header
          appName={APP_NAME}
          navItems={HEADER_NAVIGATION_ITEMS}
          selectedThemeContent={THEME_PRESET_ICONS[themePreset]}
          onClickChangeThemeButton={handleOnClickChangeThemeButton}
        />
        <S.ContentContainer responsive>
          <AppRoutes />
        </S.ContentContainer>
      </S.App>
    </AppThemeProvider>
  );
};

export default App;
