 import React from "react";
import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${style.dialogItem}`}>
            <NavLink activeClassName={style.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;