import styled from "@emotion/styled";
import { Box } from "components/shared/box";
import { AUTO_CLOSE_TIMEOUT, FORCE_LOAD_AUTH_CHANNEL, LocalStorageKeys } from "constants/app";
import { isValidOAuthProvider } from "constants/oauth";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const S = {
  PageOAuthRedirected: styled(Box)``,
};

export const PageOAuthRedirected: React.FC = () => {
  // get query params
  const [searchParams] = useSearchParams();
  const [timeLeft, setTimeleft] = useState(AUTO_CLOSE_TIMEOUT);

  const provider = searchParams.get("provider");
  const accessToken = searchParams.get("access_token");

  const closeTab = (): void => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };

  useEffect(() => {
    const authorization = JSON.stringify({
      provider,
      accessToken,
      tokenType: searchParams.get("token_type"),
    });

    console.log(authorization);

    if (!isValidOAuthProvider(provider) || accessToken?.length === 0) {
      return;
    }

    localStorage.setItem(LocalStorageKeys.AUTHORIZATION, authorization);

    const autoCloseHandler = setInterval(() => {
      setTimeleft((prev) => prev - 1);
    }, 1000);

    const channel = new BroadcastChannel(FORCE_LOAD_AUTH_CHANNEL);
    channel.postMessage(true);

    return () => {
      clearInterval(autoCloseHandler);
      setTimeleft(AUTO_CLOSE_TIMEOUT);
    };
  }, [searchParams]);

  useEffect(() => {
    if (timeLeft === 0) {
      closeTab();
    }
  }, [timeLeft]);

  return (
    <S.PageOAuthRedirected>
      <h1>Welcome</h1>
      <h3>
        You have been logged in via {searchParams.get("provider")}. This window will be auto closed in {timeLeft}
        &nbsp;second{timeLeft >= 2 && "s"}.
      </h3>
    </S.PageOAuthRedirected>
  );
};
