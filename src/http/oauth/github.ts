import axios from "axios";

export interface GithubAuthorizeRequest {
  client_id: string;
  redirect_uri?: string;
  scope?: string;
  state?: string;
  allow_signup?: boolean;
}

export interface GithubAuthorizeResponse {
  data: string;
}

export const githubAuthorize = async (conf: GithubAuthorizeRequest): Promise<GithubAuthorizeResponse> => {
  const params: Partial<GithubAuthorizeRequest> = {
    ...conf,
  };

  const resp = await axios.get<GithubAuthorizeResponse>("https://github.com/login/oauth/authorize", {
    params,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  return resp.data;
};
