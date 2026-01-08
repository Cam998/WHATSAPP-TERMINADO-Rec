import React from "react";
import "./message.css";

function Message({ msg, time, isLink, img, sent }) {
  return (
    <div className={`message_container ${sent ? "sent" : "received"}`}>
      <div className="message_bubble">
        {img ? (
          <div className="message_img_container">
            <img src={img} alt="img_message" className="message_img"/>
            <p className="message_time img_time">{time}</p>
          </div>
        ) : (
          <div className="message_text_container">
            {isLink ? (
              <a href={msg} target="_blank" rel="noreferrer" className="message_link">
                {msg}
              </a>
            ) : (
              <p className="message_text">{msg}</p>
            )}
            <p className="message_time">{time}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Message;