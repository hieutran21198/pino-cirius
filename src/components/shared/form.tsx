import styled from "@emotion/styled";

const S = {
  Form: styled.form`
    display: grid;
    gap: 1em;
  `,
};
export type FormProps = {} & JSX.IntrinsicElements["form"];
export const Form: React.FC<FormProps> = ({ ...props }: FormProps) => {
  return <S.Form {...props} />;
};
