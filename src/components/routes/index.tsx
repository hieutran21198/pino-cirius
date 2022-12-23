import { PageMain } from "components/features/page-main";
import { Navigate, Route, Routes } from "react-router-dom";

export enum RoutePath {
  HOME = "/",
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<PageMain />} />
      <Navigate to={RoutePath.HOME} />
    </Routes>
  );
};
