import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const Profile = () => {
    return (
        <div>
            <ProfileHeader />
            <MyPosts />
        </div>
    );
};

export default Profile;