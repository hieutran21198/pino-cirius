import "@emotion/react";
import { AppTheme } from "theme/model";

declare module "@emotion/react" {
  export interface Theme extends AppTheme {}
}
