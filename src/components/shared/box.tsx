import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { forwardRef, ReactElement } from "react";
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

const Component = (
  { responsive = false, card = false, ...boxProps }: BoxProps,
  ref: React.LegacyRef<HTMLDivElement> | undefined,
): ReactElement => {
  return <S.Box ref={ref} responsive={responsive} card={card} {...boxProps} />;
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(Component);
