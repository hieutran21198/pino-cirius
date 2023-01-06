import { APP_CONFIG } from "./config";

export enum APIKeys {
  LOGIN_VIA_GOOGLE = "LOGIN_VIA_GOOGLE",
}

class ServerApis {
  private readonly endpoint: string = APP_CONFIG.VITE_SERVER_ENDPOINT;

  readonly githubAuthorizeUrl = "https://github.com/login/oauth/authorize";

  loginViaGoogleUrl = `${this.endpoint}/oauth/v1/google/login`;
}

// server apis
export const API = new ServerApis();
