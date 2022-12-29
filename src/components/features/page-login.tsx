import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { Box } from "components/shared/box";
import { Button } from "components/shared/button";
import { Form } from "components/shared/form";
import { InputGroup } from "components/shared/input-group";
import { APP_CONFIG } from "constants/config";
import { githubAuthorize } from "http/oauth/github";
import { MediaWidth } from "theme/constants";
import { hexToRGBA, media } from "theme/utils";

const S = {
  PageLogin: styled(Box)``,
  Container: styled(Box)<{ isLoading: boolean }>`
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    position: relative;
    ${media(MediaWidth.LG)} {
      flex-direction: row;
      align-items: flex-start;
    }
    ${(props) =>
      props.isLoading &&
      css`
        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: ${hexToRGBA(props.theme.backgroundColor, 0.5)};
        }
      `}
  `,
  Form: styled(Form)`
    ${media(MediaWidth.LG)} {
      width: 450px;
    }
  `,
  InputGroup: styled(InputGroup)`
    input {
      width: 100%;
    }
  `,
  ButtonLogin: styled(Button)`
    background-color: ${(props) => props.theme.primaryColor};
    color: #fff;
    ${media(MediaWidth.LG)} {
      width: 6em;
      justify-self: end;
    }
  `,
  AnotherMethodContainer: styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 1em;
  `,
  ButtonGoogle: styled(Button)`
    background-color: #4285f4;
    color: #fff;
  `,
  ButtonGithub: styled(Button)`
    background-color: #333;
    color: #fff;
  `,
};

export const PageLogin: React.FC = () => {
  const githubAuthorizeResult = useQuery({
    queryKey: [githubAuthorize],
    queryFn: async () =>
      await githubAuthorize({
        client_id: APP_CONFIG.VITE_GH_CLIENT_ID,
      }),
  });

  const handleOnClickLoginWithGithub = (): void => {};

  const isLoading = githubAuthorizeResult.isLoading;

  return (
    <S.PageLogin>
      <h1>Welcome!</h1>
      <S.Container isLoading={isLoading}>
        <S.Form>
          <S.InputGroup label="Username" placeholder="Your email address" />
          <S.InputGroup label="Password" placeholder="Your secure password" />
          <S.ButtonLogin>Login</S.ButtonLogin>
        </S.Form>
        <S.AnotherMethodContainer>
          <S.ButtonGoogle>Login via Google account </S.ButtonGoogle>
          <S.ButtonGithub onClick={handleOnClickLoginWithGithub}>Login via Github account </S.ButtonGithub>
        </S.AnotherMethodContainer>
      </S.Container>
    </S.PageLogin>
  );
};
