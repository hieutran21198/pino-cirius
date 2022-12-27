import styled from "@emotion/styled";
import { Box } from "components/shared/box";
import { Button } from "components/shared/button";
import { Form } from "components/shared/form";
import { InputGroup } from "components/shared/input-group";
import { MediaWidth } from "theme/constants";
import { media } from "theme/utils";

const S = {
  PageLogin: styled(Box)``,
  Container: styled(Box)`
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    ${media(MediaWidth.LG)} {
      flex-direction: row;
      align-items: flex-start;
    }
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
  return (
    <S.PageLogin>
      <h1>Welcome!</h1>
      <S.Container>
        <S.Form>
          <S.InputGroup label="Username" placeholder="Your email address" />
          <S.InputGroup label="Password" placeholder="Your secure password" />
          <S.ButtonLogin>Login</S.ButtonLogin>
        </S.Form>
        <S.AnotherMethodContainer>
          <S.ButtonGoogle>Login via Google account </S.ButtonGoogle>
          <S.ButtonGithub>Login via Github account </S.ButtonGithub>
        </S.AnotherMethodContainer>
      </S.Container>
    </S.PageLogin>
  );
};
