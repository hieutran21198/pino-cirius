import styled from "@emotion/styled";
import { Box } from "./box";

export interface SpacerProps {
  multi?: number;
}

const S = {
  Spacer: styled(Box)<{ multi: number }>`
    padding-top: calc(1em * ${(props) => props.multi});
  `,
};
export const Spacer: React.FC<SpacerProps> = ({ multi = 1 }: SpacerProps) => {
  return <S.Spacer multi={multi} />;
};
