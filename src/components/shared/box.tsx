import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MediaWidth } from "theme/constants";
import { media } from "theme/utils";

interface BoxStyleProps {
  responsive: boolean;
  card: boolean;
}

const S = {
  Box: styled.div<BoxStyleProps>`
    ${(props) =>
      props.card &&
      css`
        background-color: ${props.theme.backgroundColor};
        border-radius: 8px;
        border: 1px solid gray;
      `}
    ${(props) =>
      props.responsive &&
      css`
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        padding-left: 1em;
        padding-right: 1em;
        ${media(MediaWidth.LG)} {
          width: ${MediaWidth.BOX_LG};
        }
        ${media(MediaWidth.XL)} {
          width: ${MediaWidth.BOX_XL};
        }
      `}
  `,
};

export type BoxProps = {} & Partial<BoxStyleProps> & JSX.IntrinsicElements["div"];

export const Box: React.FC<BoxProps> = ({ responsive = false, card = false, ...boxProps }: BoxProps) => {
  return <S.Box responsive={responsive} card={card} {...boxProps} />;
};
