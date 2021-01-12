import React from "react";
import style from "./ProfileHeader.module.css";

const ProfileHeader = () => {
    return (
        <div className={style.profileHeader}>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
            </div>
            <div>ava + description</div>
        </div>
    );
};

export default ProfileHeader;