import styled from "@emotion/styled";
import { Box } from "./box";

const S = {
  InputGroup: styled(Box)``,
  Input: styled.input``,
};

export type InputProps = {} & JSX.IntrinsicElements["input"];

export const Input = (props: InputProps) => {
  return <S.Input {...props} />;
};

export type InputGroupProps = {
  inputClassName?: string;
  className?: string;
} & Omit<InputProps, "className">;

export const InputGroup = ({ className, inputClassName, ...inputProps }: InputGroupProps) => {
  return (
    <S.InputGroup className={className}>
      <Input {...inputProps} className={inputClassName} />
    </S.InputGroup>
  );
};
