import { MediaWidth } from "./constant";

export const media = (m: MediaWidth): string => {
  return `@media (min-width: ${m})`;
};
