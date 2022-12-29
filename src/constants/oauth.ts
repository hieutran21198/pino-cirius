export enum Provider {
  GITHUB = "github",
  GOOGLE = "google",
}

export const isValidOAuthProvider = (v: unknown): v is Provider => {
  if (typeof v !== "string") {
    return false;
  }

  return Object.values(Provider).includes(v as Provider);
};
