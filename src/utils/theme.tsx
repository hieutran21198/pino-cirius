import { LocalStorageKeys, ThemePreset } from "constants/app";

const isThemePreset = (theme: string): theme is ThemePreset => {
  return Object.values(ThemePreset).includes(theme as ThemePreset);
};

export const getThemePreset = (): ThemePreset => {
  let themeName = localStorage.getItem(LocalStorageKeys.THEME);
  if (themeName === null || themeName === "") {
    themeName = ThemePreset.DARK;
  }

  return isThemePreset(themeName) ? themeName : ThemePreset.DARK;
};
