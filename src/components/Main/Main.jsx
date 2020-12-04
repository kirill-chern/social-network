import React from "react";
import style from "./Main.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Main = () => {
    return (
        <div className={style.main}>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
};

export default Main;