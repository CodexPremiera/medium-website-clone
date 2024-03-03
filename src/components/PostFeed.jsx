import React from 'react';
import PostCard from "./PostCard.jsx";
import {samplePosts} from "../data/samplePosts.js";

function PostFeed() {
  return (
    <div className={`flex flex-col gap-8`}>
      {samplePosts.map(post => (
        <PostCard post={post} />
      ))}
    </div>
  );
}

export default PostFeed;