import styled from "@emotion/styled";
import { Box } from "./box";

const S = {
  InputGroup: styled(Box)``,
  Input: styled.input`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    transition: all 0.25s;
    background: ${({ theme }) => theme.buttonBackgroundColor};
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

export type InputProps = {} & JSX.IntrinsicElements["input"];

export const Input: React.FC<InputProps> = (props: InputProps) => {
  return <S.Input {...props} />;
};

export type InputGroupProps = {
  inputClassName?: string;
  className?: string;
  label?: string;
} & Omit<InputProps, "className">;

export const InputGroup: React.FC<InputGroupProps> = ({
  className,
  inputClassName,
  label,
  ...inputProps
}: InputGroupProps) => {
  return (
    <S.InputGroup className={className}>
      {label ?? <label>{label}</label>}
      <Input {...inputProps} className={inputClassName} />
    </S.InputGroup>
  );
};
