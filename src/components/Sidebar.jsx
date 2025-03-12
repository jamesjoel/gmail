import React from "react";
import { useSelector } from "react-redux";
import TopNav from "./TopNav";
import Compose_modal from "./Compose_modal";


const Sidebar = () => {
  let allMail = useSelector((state) => state.MailReducer);
  let counter = 0;
  allMail.forEach((item) => {
    if (item.mail_status == 2) {
      counter++;
    }
  });

  return (
    <>
    <TopNav/>
      <div className="col-md-2 sidebar">
        <button className="btn btn-danger mb-3" type="button" data-bs-toggle="modal" data-bs-target="#compose_mail">+ Compose</button>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Inbox ({counter})
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sent
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Drafts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Trash
            </a>
          </li>
        </ul>
      </div>
      <Compose_modal/>
    </>
  );
};

export default Sidebar;
