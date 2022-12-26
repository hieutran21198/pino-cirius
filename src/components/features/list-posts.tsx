import styled from "@emotion/styled";
import { Box } from "components/shared/box";
import { useEffect, useState } from "react";
import { mockRecentPosts } from "__mocks__/mockRecentPosts";
import { ListPostsItem, ListPostItemProps } from "./list-posts-item";

export interface ListPostsProps {
  title?: string;
}

const S = {
  ListPosts: styled(Box)``,
  Title: styled.h2`
    margin: 1em 0;
  `,
  ListContainer: styled(Box)`
    display: grid;
    grid-auto-rows: max-content;
    gap: 1em;
  `,
};

export const ListPosts: React.FC<ListPostsProps> = ({ title = "Posts" }: ListPostsProps) => {
  const [posts, setPosts] = useState<ListPostItemProps[]>([]);

  useEffect(() => {
    const tick = setTimeout(() => {
      setPosts(mockRecentPosts);
    }, 300);
    return () => clearTimeout(tick);
  }, []);

  const renderPosts = (): React.ReactNode => {
    return posts.map((post) => <ListPostsItem key={post.id} {...post} />);
  };

  return (
    <S.ListPosts>
      <S.Title>{title}</S.Title>
      <S.ListContainer>{renderPosts()}</S.ListContainer>
    </S.ListPosts>
  );
};
