import React from "react";

const Mail = ({ data }) => {
  return (
    <div className="email-item">
      <div
        className={
          "border-bottom py-2" + (data.mail_status == 2 ? " unread" : "")
        }
      >
        <div className="d-flex justify-content-between">
          <strong>{data.from}</strong>
          <span className="email-time">{data.timestamp}</span>
        </div>
        <div>{data.subject}</div>
        <small className="text-muted">{data.snippet}</small>
      </div>
    </div>
  );
};

export default Mail;
