import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <div>{props.message}</div>
      <img src="https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg" />
      <button>like {props.likesCount}</button>
      <button>dislike</button>
    </div>
  );
};

export default Post;
