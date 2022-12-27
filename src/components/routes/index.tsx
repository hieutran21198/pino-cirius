import { PageMain } from "components/features/page-main";
import { PageSearch } from "components/features/page-search";
import { PageLogin } from "components/features/page-login";
import { Navigate, Route, Routes } from "react-router-dom";

export enum RoutePath {
  // auth
  LOGIN = "/login",

  // public
  HOME = "/",
  SEARCH = "/search",
  POSTS = "/posts",
  TAGS = "/tags",
  ABOUT = "/about",

  // private
}

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<PageLogin />} />
      <Route path={RoutePath.HOME} element={<PageMain />} />
      <Route path={RoutePath.SEARCH} element={<PageSearch />} />
      <Route path="*" element={<Navigate to={RoutePath.HOME} />} />
    </Routes>
  );
};
