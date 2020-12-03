import React from "react";
import style from "./Main.module.css";

const Main = () => {
    return (
        <div className={style.main}>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
            </div>
            <div>ava + description</div>
            <div>My posts
                <div>New post</div>
                <div className={style.posts}>
                    <div className={style.item}>Post1</div>
                    <div className={style.item}>Post2</div>
                    <div className={style.item}>Post3</div>
                </div>
            </div>
        </div>
    );
};

export default Main;