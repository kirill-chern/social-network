import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message="It`s my first post" likesCount="101" />
        <Post message="My name is Cathrine" likesCount="98" />
        <Post message="My name is Cathrine" likesCount="78" />
        <Post message="My name is Cathrine" likesCount="35" />
        <Post message="It`s my first post" lilikesCountkes="25" />
        <Post message="It`s my first post" likesCount="58" />
        <Post message="It`s my first post" likesCount="65" />
        <Post message="It`s my first post" likesCount="75" />
      </div>
    </div>
  );
};

export default MyPosts;
