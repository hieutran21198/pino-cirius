import styled from "@emotion/styled";

const S = {
  Button: styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background: ${({ theme }) => theme.buttonBackgroundColor};
    cursor: pointer;
    transition: all 0.25s;
    :hover {
      border-color: ${({ theme }) => theme.primaryColor};
    }
    :focus,
    :focus-visible {
      outline-style: solid;
      outline-color: ${({ theme }) => theme.primaryColor};
    }
  `,
};

export type ButtonProps = {} & JSX.IntrinsicElements["button"];

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <S.Button {...props} />;
};
