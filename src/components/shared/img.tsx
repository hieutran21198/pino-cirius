import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { SyntheticEvent } from "react";

export type ImgProps = { fallbackSrc?: string } & JSX.IntrinsicElements["img"];

const S = {
  Img: styled.img<{ fallbackSrc?: string }>``,
};

export const Img = (props: ImgProps) => {
  const theme = useTheme();

  const handleOnError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.preventDefault();

    const fallbackSrc = props.fallbackSrc || theme.imgFallback;

    e.currentTarget.src = fallbackSrc;
  };

  return <S.Img {...props} onError={handleOnError} />;
};
