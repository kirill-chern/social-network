import React from "react";
import style from "./../Dialogs.module.css";
import PropTypes from "prop-types";

const MessageItem = ({id, message, isOwner}) => {
    return <div
    className={`${style.messageItem} ${isOwner? style.messageOwner : style.messageFriend}`}>
    {message}
    </div>
}

MessageItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    message: PropTypes.string.isRequired,
    isOwner: PropTypes.bool.isRequired,
};

export default MessageItem;