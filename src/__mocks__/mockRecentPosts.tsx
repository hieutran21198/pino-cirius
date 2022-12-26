import { ListPostItemProps } from "components/features/list-posts-item";
import { DateTime } from "luxon";

export const mockRecentPosts = [
  {
    id: "1",
    title: "Hello World",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: DateTime.now(),
    tags: [
      {
        id: "1",
        name: "Lorem",
      },
      {
        id: "2",
        name: "Ipsum",
      },
    ],
  },
  {
    id: "2",
    title: "f r o n t e n d",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: DateTime.now(),
    tags: [
      {
        id: "1",
        name: "Lorem",
      },
    ],
  },
] as ListPostItemProps[];
