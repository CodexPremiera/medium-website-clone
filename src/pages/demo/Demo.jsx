import React from "react";
import Banner from "./Banner.jsx";
import PostFeed from "../../components/PostFeed.jsx";
import Discover from "../../components/Discover.jsx";
import DemoHeader from "./DemoHeader.jsx";

const Demo = () => {
  const style = {
    container: `w-standard py-7 flex flex-col-reverse md:flex-row gap-x-[6rem] gap-y-[2rem]`,
    post: `flex-[1.7]`,
    discover: `flex-[1] relative`
  }

  return (
    <>
      <DemoHeader/>
      <Banner/>
      <div className={style.container}>
        < div className={style.post}>
          <PostFeed/>
        </div>
        <div className={style.discover}>
          <Discover/>
        </div>
      </div>
    </>
  );
};

export default Demo;