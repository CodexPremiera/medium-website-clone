import React from 'react';
import PostCard from "./PostCard.jsx";
import {samplePosts} from "../data/samplePosts.js";

function PostFeed() {
  return (
    <div className={`flex flex-col gap-8`}>
      <PostCard post={samplePosts[0]} />
      <PostCard post={samplePosts[1]} />
    </div>
  );
}

export default PostFeed;