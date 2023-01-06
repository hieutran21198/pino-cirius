import { PageMain } from "components/features/page-main";
import { PageSearch } from "components/features/page-search";
import { PageLogin } from "components/features/page-login";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageOAuthRedirected } from "components/features/page-oauth-redirected";
import { RoutePath } from "constants/routes";
import { PageArticleEdit } from "components/features/page-article-edit";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<PageLogin />} />
      <Route path={RoutePath.HOME} element={<PageMain />} />
      <Route path={RoutePath.SEARCH} element={<PageSearch />} />
      <Route path={RoutePath.OAUTH_REDIRECTED} element={<PageOAuthRedirected />} />
      <Route path={RoutePath.CREATE_POST} element={<PageArticleEdit />} />
      <Route path="*" element={<Navigate to={RoutePath.HOME} />} />
    </Routes>
  );
};
