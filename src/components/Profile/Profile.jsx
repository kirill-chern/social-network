import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div>
      <ProfileHeader />
      <MyPosts posts={props.state.posts}
      inputFieldText={props.state.inputFieldText}
      dispatch={props.dispatch}/>
    </div>
  );
};

Profile.propTypes = {
  state: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default Profile;
