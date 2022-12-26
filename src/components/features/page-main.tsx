import styled from "@emotion/styled";
import { Box } from "components/shared/box";
import { Spacer } from "components/shared/spacer";
import { ListPosts } from "./list-posts";

const S = {
  PageMain: styled(Box)``,
};
export const PageMain: React.FC = () => {
  return (
    <S.PageMain>
      <ListPosts title={" Pinned Posts"} />
      <Spacer multi={4} />
      <ListPosts title={" Recent Posts"} />
    </S.PageMain>
  );
};
