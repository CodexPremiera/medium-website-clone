import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Demo from "./pages/demo/Demo";
import { Blog } from "./context/Context";

const App = () => {
  //const currentUser = Blog();
  const currentUser = true;

  return (
    <>
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