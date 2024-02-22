import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Demo from "./components/demo/Demo";
import HomeHeader from "./components/home/header/HomeHeader";
import DemoHeader from "./components/demo/DemoHeader.jsx";
import { Blog } from "./context/Context";

const App = () => {
  //const currentUser = Blog();
  const currentUser = true;
  return (
    <>
      {currentUser ? <HomeHeader /> : <DemoHeader />}

      <Routes>
        {currentUser && <Route path={`/`} element={<Home/>} />}
        {!currentUser && <Route path={`/Demo`} element={<Demo/>} />}
        <Route
          path={`*`}
          element={ <Navigate to={ currentUser ? `/` : `/demo`} /> }
        />
      </Routes>
    </>
  )
}

export default App;