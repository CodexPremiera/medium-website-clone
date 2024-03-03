import React from 'react'
import HomeHeader from "./header/HomeHeader.jsx";
import PostFeed from "../../components/PostFeed.jsx";
import Discover from "../../components/Discover.jsx";

const Home = () => {
  const style = {
    container: `flex flex-row max-w-[1336px] justify-evenly mx-auto`,
    post: `flex-1 max-w-[728px] min-h-[1080px] py-12`,
    discover: `hidden lg:flex flex-1 max-w-fit max-h-[90vh] py-12 sticky top-[57px] relative border-l border-gray-300`
  }

  return (
    <>
      <HomeHeader/>
      <div className={style.container}>
        < div className={style.post}>
          <PostFeed/>
        </div>
        <div className={style.discover}>
          <Discover/>
        </div>
      </div>
    </>
  )
}

export default Home;