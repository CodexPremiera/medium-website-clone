import React from 'react';
import PostFeed from "./PostFeed.jsx";
import Discover from "./Discover.jsx";

function Content() {
  const style = {
    container: `flex flex-row max-w-[1336px] justify-evenly mx-auto`,
    post_feed: `flex-1 max-w-[728px] min-h-[1080px] py-12`,
    discover: `hidden lg:flex flex-1 max-w-fit max-h-[90vh] py-12 sticky top-[57px] relative border-l border-gray-300`
  }

  return (
    <div className={style.container}>
      <section className={style.post_feed}>
        <PostFeed/>
      </section>
      <section className={style.discover}>
        <Discover/>
      </section>
    </div>
  );
}

export default Content;