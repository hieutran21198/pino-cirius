import styled from "@emotion/styled";
import { MediaWidth } from "theme/constants";
import { media } from "theme/utils";

const S = {
  Box: styled.div<{
    responsive?: boolean;
  }>`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    ${media(MediaWidth.LG)} {
      width: ${MediaWidth.BOX_LG};
    }
    ${media(MediaWidth.XL)} {
      width: ${MediaWidth.BOX_XL};
    }
  `,
};

export type BoxProps = {
  responsive?: boolean;
} & JSX.IntrinsicElements["div"];

export const Box = (props: BoxProps) => {
  return <S.Box {...props} />;
};
