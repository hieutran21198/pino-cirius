import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "components/shared/box";
import { Button } from "components/shared/button";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MediaWidth } from "theme/constants";
import { media } from "theme/utils";
import { mockSearchResults } from "__mocks__/mockSearchResults";
import { HeaderSearchInput, HeaderSearchInputRef, Result } from "./header-search-input";

export interface HeaderProps {
  appName: string;
  navItems: NavigationItem[];
  selectedThemeContent: string;
  onClickChangeThemeButton: () => void;
}

interface NavigationItem {
  to: string;
  name: string;
}

const S = {
  Header: styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.backgroundColor};
  `,
  ContentContainer: styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${(props) => props.theme.headerHeight};
    border-bottom: ${(props) => props.theme.border};
    transition: all 0.3s ease-in-out;
    ${media(MediaWidth.LG)} {
      justify-content: space-between;
      height: ${(props) => props.theme.headerHeightLG};
    }
  `,
  LogoContainer: styled(Box)``,
  RightContainer: styled(Box)`
    display: none;
    gap: 1em;
    ${media(MediaWidth.LG)} {
      display: flex;
      align-items: center;
    }
  `,
  Navigation: styled(Box)`
    display: flex;
    gap: 1em;
  `,
  NavItem: styled(Box)``,
  SearchContainer: styled(Box)``,
  HeaderSearchInput: styled(HeaderSearchInput)<{ show: boolean }>`
    input {
      transition: all 0.3s ease-in-out;
      ${(props) =>
        !props.show &&
        css`
          width: 0 !important;
          padding: 0 !important;
          border: none !important;
        `}
    }
  `,
  SearchButton: styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ChangeThemeButton: styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export const Header: React.FC<HeaderProps> = ({
  appName,
  navItems,
  selectedThemeContent,
  onClickChangeThemeButton,
}: HeaderProps) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Result[]>([]);
  const headerSearchInputRef = useRef<HeaderSearchInputRef | null>(null);

  const renderListNavigationItems = (): React.ReactNode => {
    return navItems.map((item) => (
      <Link key={item.to} to={item.to}>
        {item.name}
      </Link>
    ));
  };

  const handleOnSelectResult = (result: Result): void => {};

  const handleOnSearchDebounced = (value: string): void => {
    setSearchValue(value);
  };

  const handleOnClickSearchButton = (): void => {
    setShowSearchInput(!showSearchInput);
  };

  useEffect(() => {
    // TODO: call api to get search results
    const mockGettingSearchResults = setTimeout(() => {
      if (searchValue === "") {
        setSearchResults(mockSearchResults);
      }
    }, 300);

    return () => clearTimeout(mockGettingSearchResults);
  }, [searchValue]);

  return (
    <S.Header>
      <Box responsive>
        <S.ContentContainer>
          <S.LogoContainer>{appName}</S.LogoContainer>
          <S.RightContainer>
            <S.Navigation>{renderListNavigationItems()}</S.Navigation>
            <S.HeaderSearchInput
              ref={headerSearchInputRef}
              show={showSearchInput}
              onSelectResult={handleOnSelectResult}
              onSearchDebounced={handleOnSearchDebounced}
              placeholder="Search anything here..."
              results={searchResults}
            />
            <S.SearchButton onClick={handleOnClickSearchButton}>{!showSearchInput ? "" : ""}</S.SearchButton>
            <S.ChangeThemeButton onClick={onClickChangeThemeButton}>{selectedThemeContent}</S.ChangeThemeButton>
          </S.RightContainer>
        </S.ContentContainer>
      </Box>
    </S.Header>
  );
};
