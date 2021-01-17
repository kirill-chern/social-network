import React from "react";
import style from "./Post.module.css";
import PropTypes from "prop-types";


const Post = ({ message, likesCount, src }) => {
  return (
    <div className={style.item}>
      <div>{message}</div>
      <img src={src} />
      <button>like {likesCount}</button>
      <button>dislike</button>
    </div>
  );
};

Post.propTypes = {
  message: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  likesCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Post;
