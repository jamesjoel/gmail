import React, { useRef } from "react";
import { useSelector } from "react-redux";

const TopNav = () => {
  const notifRef = useRef();
  let notifToggle = () => {
    console.log(notifRef.current.style);
    // return

    if (notifRef.current.style.display === "") {
      notifRef.current.style.display = "none";
    } else {
      notifRef.current.style.display = "";
    }
  };
  let allMail = useSelector((state) => state.MailReducer);
  console.log(allMail);

  return (
    <div className="container" style={{ backgroundColor: "#F1F3F4" }}>
      <div className="row justify-content-between">
        {/* <nav className="navbar"> */}
        <span className="navbar-brand col-md-2 fs-1">TSS Mail</span>
        <div className="col-md-5 mt-2">
          <form className="d-flex">
            <div className="input-group">
              <input
                className="form-control form-control-lg"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary px-4" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div
          className="notifications col-md-2 text-center cursor-pointer"
          style={{ cursor: "pointer" }}
          onClick={notifToggle}
        >
          <svg
            viewBox="0 0 24 24"
            id="_24x24_On_Light_Notification-Alert"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect id="view-box" width="24" height="24" fill="none" />
            <path
              id="Shape"
              d="M6,17v-.5H2.25A2.253,2.253,0,0,1,0,14.25v-.382a2.542,2.542,0,0,1,1.415-2.289A1.247,1.247,0,0,0,2.1,10.572l.446-4.91A6.227,6.227,0,0,1,10.618.286a5.477,5.477,0,0,0-.635,1.374A4.794,4.794,0,0,0,8.75,1.5,4.7,4.7,0,0,0,4.045,5.8L3.6,10.708A2.739,2.739,0,0,1,2.089,12.92a1.055,1.055,0,0,0-.589.949v.382A.751.751,0,0,0,2.25,15h13A.751.751,0,0,0,16,14.25v-.382a1.053,1.053,0,0,0-.586-.948A2.739,2.739,0,0,1,13.9,10.708l-.2-2.18a5.473,5.473,0,0,0,1.526.221l.166,1.822a1.26,1.26,0,0,0,.686,1.005,2.547,2.547,0,0,1,1.418,2.29v.382a2.252,2.252,0,0,1-2.25,2.25H11.5V17A2.75,2.75,0,0,1,6,17Zm1.5,0A1.25,1.25,0,0,0,10,17v-.5H7.5ZM15.047,6.744A3.486,3.486,0,0,1,13.5,6.28L13.456,5.8a4.7,4.7,0,0,0-1.648-3.185,3.5,3.5,0,0,1,.61-1.417A6.221,6.221,0,0,1,14.95,5.662l.1,1.081v0Z"
              transform="translate(3.25 2.25)"
              fill="#141124"
            />
            {allMail.map((item) =>
              item.mail_status == 2 ? (
                <path
                  id="Shape-2"
                  data-name="Shape"
                  d="M3.5,7A3.5,3.5,0,1,1,7,3.5,3.5,3.5,0,0,1,3.5,7Z"
                  transform="translate(15 2)"
                  fill="#ff6359"
                />
              ) : (
                ""
              )
            )}
          </svg>
          {/* <div
            className="notification-dropdown col-md-3 mt-4 border rounded-4 p-3"
            style={{
            //   zIndex: 99999999999,
              position: "absolute",
              right: 0,
              backgroundColor: "#F1F3F4",
              display:"none",
              height:"600px",
            }}
            ref={notifRef}
          >
            {allMail.map((item) =>
              item.mail_status == 2 ? (
                <div class="alert text-start alert-primary" style={{zIndex:0}} role="alert">
                  <h6>You have a mail from {item.name}</h6>
                  <p className="text-start">Subject: {item.subject}</p>
                  <p className="text-end">{item.timestamp}</p>
                </div>
              ) : ""
            )}
          </div> */}
          {/* <div
            className="mt-5 border rounded-4"
            style={{ position: "relative" }}
            > */}
          <div
            className="notification-dropdown p-3"
            style={{
              position: "absolute",
              right: 0,
              backgroundColor: "#F1F3F4",
              display: "none",
              height: "600px",
              overflowY: "auto", // Prevent content overflow
            }}
            ref={notifRef}
          >
            {allMail.map((item) =>
              item.mail_status == 2 ? (
                <div
                  className="alert text-start alert-primary"
                  style={{ zIndex: 0 }}
                  role="alert"
                >
                  <h6>You have a mail from {item.name}</h6>
                  <p className="text-start">Subject: {item.subject}</p>
                  <p className="text-end">{item.timestamp}</p>
                </div>
              ) : null
            )}
          </div>
          {/* </div> */}
        </div>
        {/* </nav> */}
      </div>
    </div>
  );
};

export default TopNav;
