import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Demo from "./pages/demo/Demo";
//import { Blog } from "./context/Context";

const App = () => {
  //const currentUser = Blog();
  const currentUser = true;

  const homePath = '/';
  const demoPath = '/Demo';
  const defaultPath = currentUser ? homePath : demoPath;

  const homeRoute = currentUser && <Route path={homePath} element={<Home />} />;
  const demoRoute = !currentUser && <Route path={demoPath} element={<Demo />} />;
  const wildcardRoute = (
    <Route path="*" element={<Navigate to={defaultPath} />} />
  );

  return (
    <>
      <Routes>
        {homeRoute}
        {demoRoute}
        {wildcardRoute}
      </Routes>
    </>
  )
}

export default App;