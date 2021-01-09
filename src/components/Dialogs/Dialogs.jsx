 import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${style.dialogItem}`}>
            <NavLink activeClassName={style.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

const MessageItem = (props) => {
    return <div className={style.messageItem}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem id="1" name="Bob" />
                <DialogItem id="2" name="Jane" />
                <DialogItem id="3" name="Clark" />
                <DialogItem id="4" name="Jennifer" />
                <DialogItem id="5" name="Valentina" />
            </div>
            <div className={style.messagesItems}>
                <MessageItem message="Hello man" />
                <MessageItem message="How are you?" />
                <MessageItem message="I want to tell you something" />
            </div>
        </div>
    );
};

export default Dialogs;