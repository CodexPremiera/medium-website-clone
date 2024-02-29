import React from 'react'
import HomeHeader from "./header/HomeHeader.jsx";
import Posts from "../../components/Posts.jsx";
import Discover from "../demo/Discover.jsx";

const Home = () => {
  const style = {
    container: `standard_width pb-7 flex flex-col-reverse md:flex-row gap-y-[2rem]`,
    post: `flex-1 pr-12 py-12`,
    discover: `max-lg:hidden lg:flex-1 relative border-l border-gray-300 pl-10 py-12 max-w-[360px]`
  }

  return (
    <>
      <HomeHeader/>
      <div className={style.container}>
        < div className={style.post}>
          <Posts/>
        </div>
        <div className={style.discover}>
          <Discover/>
        </div>
      </div>
    </>
  )
}

export default Home;