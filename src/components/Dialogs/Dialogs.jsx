import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        { props.dialogs.map( e => <DialogItem id={e.id} name={e.name} /> ) }
      </div>
      <div className={style.messagesItems}>
        { props.messages.map( e => <MessageItem id={e.id} message={e.message} />) }
      </div>
    </div>
  );
};

export default Dialogs;
