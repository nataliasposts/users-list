import { Route, Routes } from "react-router-dom";
import RoutingPath from "./routing";
import MainPage from "../pages/MainPage";

const RootRouter = () => {
  return (
    <Routes>
      <Route path={RoutingPath.MainPage} element={<MainPage />} />
    </Routes>
  );
};

export default RootRouter;
