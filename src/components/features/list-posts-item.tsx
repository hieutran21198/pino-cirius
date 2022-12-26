import styled from "@emotion/styled";
import { Box } from "components/shared/box";
import { DateTime } from "luxon";
import { ReactNode } from "react";

export interface ListPostItemProps {
  id: string;
  title: string;
  content: string;
  createdAt: DateTime;
  tags: Array<{
    id: string;
    name: string;
  }>;
}

const S = {
  ListPostsItem: styled(Box)`
    width: max-content;
    max-width: 100%;
  `,
  CreatedAt: styled.p`
    font-size: 0.8em;
  `,
  Title: styled.h3`
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
    font-size: 1.1em;
  `,
  ListTags: styled(Box)`
    display: flex;
    gap: 1em;
  `,
  Tag: styled(Box)`
    cursor: pointer;
    color: ${({ theme }) => theme.primaryColor};
    &:hover {
      color: ${({ theme }) => theme.primaryColorLighter};
      text-decoration: underline;
    }
  `,
};

export const ListPostsItem: React.FC<ListPostItemProps> = (props: ListPostItemProps) => {
  const handleOnClickTitle = (): void => {};

  const renderTagItems = (): ReactNode => {
    return props.tags.map((tag) => <S.Tag key={tag.id}>{tag.name}</S.Tag>);
  };

  return (
    <S.ListPostsItem onClick={handleOnClickTitle}>
      <S.Title>{props.title}</S.Title>
      <S.CreatedAt> {props.createdAt.toLocaleString()}</S.CreatedAt>
      <p>{props.content}</p>
      <S.ListTags>Tags:{renderTagItems()}</S.ListTags>
    </S.ListPostsItem>
  );
};
