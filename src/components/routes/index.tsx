import { PageMain } from "components/features/page-main";
import { PageSearch } from "components/features/page-search";
import { Navigate, Route, Routes } from "react-router-dom";

export enum RoutePath {
  HOME = "/",
  SEARCH = "/search",
  POSTS = "/posts",
  TAGS = "/tags",
  ABOUT = "/about",
}

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<PageMain />} />
      <Route path={RoutePath.SEARCH} element={<PageSearch />} />
      <Route path="*" element={<Navigate to={RoutePath.HOME} />} />
    </Routes>
  );
};
