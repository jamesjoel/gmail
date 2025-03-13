import React, { useState } from "react";
import useTimeDifference from "../hooks/useTimeDiff";

// ShowMail Component
const ShowMail = ({ data, onClose }) => {
  return (
    <div className="col-md-10 mt-2 border bg-white rounded-4 p-0" style={{minHeight:"300px"}}>
      <div className="container-fluid p-2 border rounded">
        <i
          className="bi bi-x fs-1 text-light bg-dark border rounded-3"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
      <div className="container-fluid col-md-12 p-3">
        <div className="fs-6 col-md-6 fw-bold">{data.subject}</div>
        <div className="row justify-content-between mt-2">
          <div className="col-md-6">{data.from}</div>
          <div className="col-md-6 text-end">23 hours ago</div>
        </div>
        <div
          className="mt-3 col-md-12 border border-white p-3"
          style={{ backgroundColor: "#F2F2F2", minHeight: "300px" }}
        >
          {data.body}
        </div>
      </div>
    </div>
  );
};

// Mail Component
const Mail = ({ data }) => {
  const [selectedMail, setSelectedMail] = useState(null);
  const getTimeDifference = useTimeDifference();

  const openMail = () => {
    setSelectedMail(data);
  };

  const closeMail = () => {
    setSelectedMail(null);
  };

  return (
    <>
      {/* Render the email item */}
      <div className="email-item" onClick={openMail}>
        <div className={"py-2" + (data.mail_status === 2 ? " unread" : "")}>
          <div className="d-flex justify-content-between">
            <strong>{data.from}</strong>
            <span className="email-time">
              {getTimeDifference(data.timestamp)}
            </span>
          </div>
          <div>{data.subject}</div>
          <small className="text-muted">{data.snippet}</small>
        </div>
      </div>

      {/* Render ShowMail when email is clicked */}
      {selectedMail && <ShowMail data={selectedMail} onClose={closeMail} />}
    </>
  );
};

export default Mail;
