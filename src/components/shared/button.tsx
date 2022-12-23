import styled from "@emotion/styled";

const S = {
  Button: styled.button``,
};

export type ButtonProps = {} & JSX.IntrinsicElements["button"];

export const Button = (props: ButtonProps) => {
  return <S.Button {...props} />;
};
