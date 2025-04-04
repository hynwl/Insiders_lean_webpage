import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./screens/Main";
import { Opinion } from "./screens/Opinion";
import { Result } from "./screens/Result";
import { Layout } from "./components/Layout";
import { Board } from "./screens/Board";
import { Timeline } from "./screens/Timeline";
import { AboutUs } from "./screens/AboutUs";
import PATH from "./constants/path";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATH.HOME} element={<Main />} />
          <Route path={PATH.OPINION} element={<Opinion />} />
          <Route path={PATH.RESULT + "/:vote"} element={<Result />} />
          <Route path={PATH.BOARD} element={<Board />} />
          <Route path={PATH.TIMELINE} element={<Timeline />} />
          <Route path={PATH.ABOUT} element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
};