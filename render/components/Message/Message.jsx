import React from "react";
import "./index.css";

export default function Message(props) {
  const { message, onMessageHide } = props;

  return (
    <div
      onAnimationEnd={() => {
        onMessageHide(message.key);
      }}
      className="message"
    >
      {message.message}
    </div>
  );
}
