import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Demo from "./components/demo/Demo.jsx";
import HomeHeader from "./components/home/HomeHeader.jsx";
import DemoHeader from "./components/demo/DemoHeader.jsx";

function App() {
  const auth = false; // temporary authentication
  return (
    <>
      {auth ? <HomeHeader /> : <DemoHeader />}
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/Demo`} element={<Demo />} />
      </Routes>
    </>
  )
}

export default App
