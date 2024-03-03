import React from 'react';
import PostFeed from "./PostFeed.jsx";
import Recommendations from "./Recommendations.jsx";
import useWindowResize from "../../hooks/useWindowResize.js";

function Content() {
  const isTablet = useWindowResize(1024);

  const style = {
    container: `flex flex-row max-w-[1336px] justify-evenly mx-auto`,
    post_feed: `flex-1 max-w-[728px] min-h-[1080px] py-12 px-6`,
    discover: `hidden lg:flex flex-1 max-w-fit max-h-[90vh] py-12 sticky top-[57px] relative border-l border-gray-200`
  }

  return (
    <div className={style.container}>
      <section className={style.post_feed}>
        <PostFeed/>
      </section>

      {isTablet && (
        <section className={style.discover}>
          <Recommendations/>
        </section>
      )}
    </div>
  );
}

export default Content;