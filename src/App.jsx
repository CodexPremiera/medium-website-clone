import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Demo from "./pages/demo/Demo";
import Profile from "./pages/profile/Profile.jsx";
import { Blog } from "./context/Context";

const App = () => {
  const currentUser = Blog();
  //const currentUser = true;

  const homePath = '/';
  const demoPath = '/Demo';
  const defaultPath = currentUser ? homePath : demoPath;

  const homeRoute = currentUser && <Route path={homePath} element={<Home />} />;
  const demoRoute = !currentUser && <Route path={demoPath} element={<Demo />} />;
  const profileRoute = (
    <Route path="/profile/:userId" element={<Profile/>} />
  );
  const wildcardRoute = (
    <Route path="*" element={<Navigate to={defaultPath} />} />
  );

  return (
    <>
      <Routes>
        {homeRoute}
        {demoRoute}
        {profileRoute}
        {wildcardRoute}
      </Routes>
    </>
  )
}

export default App;