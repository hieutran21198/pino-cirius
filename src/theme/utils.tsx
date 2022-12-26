import { MediaWidth } from "./constants";

export const media = (m: MediaWidth): string => {
  return `@media (min-width: ${m})`;
};
