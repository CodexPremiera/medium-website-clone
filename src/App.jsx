import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Demo from "./components/demo/Demo.jsx";
import HomeHeader from "./components/home/HomeHeader.jsx";
import DemoHeader from "./components/demo/DemoHeader.jsx";

function App() {
  const currentUser = false;
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

export default App
