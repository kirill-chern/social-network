import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const Profile = (props) => {
    return (
        <div>
            <ProfileHeader />
            <MyPosts posts={props.posts} />
        </div>
    );
};

export default Profile;