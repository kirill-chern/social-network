import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import PropTypes from "prop-types";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        { props.state.dialogs.map( e => <DialogItem id={e.id} name={e.name} src={e.src} /> ) }
      </div>
      <div className={style.messagesItems}>
        { props.state.messages.map( e => <MessageItem id={e.id} message={e.message} isOwner={e.isOwner} />) }
      </div>
    </div>
  );
};

Dialogs.propTypes = {
  state: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default Dialogs;
