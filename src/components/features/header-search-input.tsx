import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "components/shared/box";
import { InputGroup } from "components/shared/input-group";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

export interface HeaderSearchInputProps {
  placeholder: string;
  onSearchDebounced: (value: string) => void;
  // enter, click
  onSelectResult: (result: Result) => void;
  results: Result[];
  debouncedTime?: number;
  className?: string;
}

export interface Result {
  id: string;
  name: string;
}

const S = {
  HeaderSearchInput: styled(Box)`
    position: relative;
  `,
  SearchInputGroup: styled(InputGroup)`
    input {
      width: 18.75em;
    }
  `,
  ResultContainer: styled(Box)<{
    expand: boolean;
  }>`
    position: absolute;
    background-color: ${(props) => props.theme.backgroundColor};
    margin-top: 0.5em;
    left: 0;
    right: 0;
    padding: 0 1em;
    height: max-content;
    max-height: 500px;
    transition: all 0.3s ease-in-out;
    ${(props) =>
      props.expand
        ? css`
            padding: 1em;
          `
        : css`
            border-width: 0 !important;
          `}
  `,
  ResultItem: styled(Box)``,
};

export interface HeaderSearchInputRef {
  setResultsContainerStatus: (expand: boolean) => void;
  getResultsContainerStatus: () => boolean;
}

const Component: React.ForwardRefRenderFunction<HeaderSearchInputRef, HeaderSearchInputProps> = (
  { placeholder, results, onSearchDebounced, debouncedTime = 500, className }: HeaderSearchInputProps,
  ref: React.ForwardedRef<HeaderSearchInputRef>,
) => {
  const [resultContainerStatus, setResultsContainerStatus] = useState(false);
  const debouncingOnChangeRef = useRef<NodeJS.Timeout | null>(null);

  useImperativeHandle(ref, () => ({
    setResultsContainerStatus: (expand: boolean) => {
      setResultsContainerStatus(expand);
    },
    getResultsContainerStatus: () => {
      return resultContainerStatus;
    },
  }));

  const renderResultItems = (): React.ReactNode => {
    return results.map((result) => <S.ResultItem key={result.id}>{result.name}</S.ResultItem>);
  };

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (debouncingOnChangeRef.current != null) {
      clearTimeout(debouncingOnChangeRef.current);
    }

    const searchValue = e.currentTarget.value;

    debouncingOnChangeRef.current = setTimeout(() => onSearchDebounced(searchValue), debouncedTime);
  };

  useEffect(() => {
    setResultsContainerStatus(results.length > 0);
  }, [results]);

  return (
    <S.HeaderSearchInput className={className}>
      <S.SearchInputGroup placeholder={placeholder} onChange={handleOnChangeInput} />
      <S.ResultContainer card expand={resultContainerStatus}>
        {renderResultItems()}
      </S.ResultContainer>
    </S.HeaderSearchInput>
  );
};

export const HeaderSearchInput = forwardRef<HeaderSearchInputRef, HeaderSearchInputProps>(Component);
