import { AppTheme } from "./model";

export const DEFAULT_THEME: AppTheme = {
  imgFallback: "https://picsum.photos/id/237/200/300",
  fontFamily: "DaddyTimeMono, Inter, Avenir, Helvetica, Arial, sans-serif",
  textColor: "rgba(255,255,255, 0.87)",
  backgroundColor: "#242424",
  backgroundDimmer: "rgba(0,0,0,0.5)",
  buttonBackgroundColor: "#1a1a1a",
  border: "1px solid gray",
  primaryColor: "#535bf2",
  primaryColorLighter: "#646cff",
  headerHeight: "3em",
  headerHeightLG: "4em",
};

export enum MediaWidth {
  SX = "0em",
  SM = "30em",
  MD = "48em",
  LG = "62em",
  XL = "75em",
  BOX_LG = "60em",
  BOX_XL = "70em",
}
