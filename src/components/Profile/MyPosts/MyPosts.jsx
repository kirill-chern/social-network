import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import PropTypes from "prop-types";


const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        { props.posts.map( e => <Post key={e.id} message={e.message} likesCount={e.likesCount} src={e.src} /> ) }
      </div>
    </div>
  );
};

MyPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MyPosts;
