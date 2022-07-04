import React, { Component } from "react";
import "./index.css";
import Message from "./Message";

export default class MessageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  addMessage(msg) {
    this.setState({ messages: [...this.state.messages, msg] });
  }

  onMessageHide(key) {
    const newMessages = this.state.messages.filter((item) => item.key !== key);
    this.setState({ messages: [...newMessages] });
  }

  render() {
    return (
      <div className="message-container">
        {this.state.messages.length > 0 &&
          this.state.messages.map((msg, idx) => {
            return (
              <Message
                message={msg}
                onMessageHide={(key) => this.onMessageHide(key)}
                key={msg.key}
              />
            );
          })}
      </div>
    );
  }
}
