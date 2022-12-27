import { RoutePath } from "components/routes";
import { AppTheme } from "theme/model";

export const APP_NAME = "Pino Cirius";

export const HEADER_NAVIGATION_ITEMS = [
  {
    to: RoutePath.POSTS,
    name: "Posts",
  },
  {
    to: RoutePath.TAGS,
    name: "Tags",
  },
  {
    to: RoutePath.ABOUT,
    name: "About",
  },
];

export enum ThemePreset {
  DARK = "dark",
  LIGHT = "light",
}

export const THEME_PRESET_ICONS = {
  [ThemePreset.DARK]: "",
  [ThemePreset.LIGHT]: "",
};

export enum LocalStorageKeys {
  THEME = "theme",
}

export const LIGHT_THEME: AppTheme = {
  imgFallback: "https://picsum.photos/id/237/200/300",
  fontFamily: "DaddyTimeMono, Inter, Avenir, Helvetica, Arial, sans-serif",
  textColor: "#000000",
  backgroundColor: "#ffffff",
  backgroundDimmer: "rgba(0, 0, 0, 0.05)",
  buttonBackgroundColor: "#f0f0f0",
  border: "1px solid gray",
  primaryColor: "#535bf2",
  primaryColorLighter: "#646cff",
  headerHeight: "3em",
  headerHeightLG: "4em",
};

export const NO_RESULT_ID = "no_result";

export const HEADER_SEARCH_INPUT_NO_RESULT = [
  {
    id: NO_RESULT_ID,
    name: "No result",
  },
];
