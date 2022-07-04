import React from "react";
import ReactDOM from "react-dom";
import MessageContainer from "./MessageContainer";
import { v4 as uuidv4 } from "uuid";

const message = (function () {
  let container = document.querySelector(".message-container-wrapper");
  if (!container) {
    container = document.createElement("div");
    container.classList.add("message-container-wrapper");
    document.body.append(container);
  }
  const element = ReactDOM.render(
    React.createElement(MessageContainer),
    container
  );

  return {
    show: (title) => {
      const msg = { key: uuidv4(), message: title };
      element.addMessage(msg);
    },
  };
})();

export default message;
