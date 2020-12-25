 import React from "react";
import style from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={`${style.dialogItem} ${style.active}`}>Bob</div>
                <div className={style.dialogItem}>Tanya</div>
                <div className={style.dialogItem}>Elizabeth</div>
                <div className={style.dialogItem}>Tony</div>
                <div className={style.dialogItem}>Jennifer</div>
            </div>
            <div className={style.messagesItems}>
                <div className={style.messageItem}>Hello man</div>
                <div className={style.messageItem}>How are you?</div>
                <div className={style.messageItem}>I want to tell you something</div>
            </div>
        </div>
    );
};

export default Dialogs;