 import React from "react";
import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const DialogItem = ({id, name, src}) => {
    return (
        <div className={`${style.dialogItem}`}>
            <NavLink activeClassName={style.active} to={`/dialogs/${id}`}>
                <img src={src} />
                <div>{name}</div>
            </NavLink>
        </div>
    );
}

DialogItem.propsTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default DialogItem;