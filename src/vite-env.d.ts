/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SERVER_ENDPOINT: string;

  readonly VITE_GH_CLIENT_ID: string;
  readonly VITE_GH_REDIRECT_URL: string;

  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_GOOGLE_REDIRECT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
