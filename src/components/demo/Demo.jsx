import React from "react";
import Banner from "./Banner";
import Trending from "./Trending";
import Posts from "../common/posts/Posts";
import Discover from "./Discover";

const Demo = () => {
  const style = {
    container: `size py-7 flex flex-col-reverse md:flex-row gap-[7rem]`,
    post: `flex-[1.5]`,
    discover: `flex-[1] relative`
  }

  return (
    <>
      <Banner />
      <Trending />
      <div className={style.container}>
        <div className={style.post}>
          <Posts />
        </div>
        <div className={style.discover}>
          <Discover />
        </div>
      </div>
    </>
  );
};

export default Demo;