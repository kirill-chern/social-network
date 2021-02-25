import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import PropTypes from "prop-types";
import {addPostActionCreator, changeNewPostActionCreator} from "./../../../data/state";

let newPostElement = React.createRef();

const MyPosts = (props) => {
function addPost() {
  props.dispatch(addPostActionCreator());
}

function postChange() {
  let text = newPostElement.current.value;
  props.dispatch(changeNewPostActionCreator(text));
}

  return (
    <div>
      My posts
      <div>
        <textarea ref={newPostElement} value={props.inputFieldText} onChange = {postChange}/>
        <button onClick = {addPost}>Add post</button>
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
