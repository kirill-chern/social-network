import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <div>{props.message}</div>
      <img src={props.src} />
      <button>like {props.likesCount}</button>
      <button>dislike</button>
    </div>
  );
};

export default Post;
