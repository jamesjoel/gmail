import React from 'react'

const SentItems = () => {
  return (
    <div className="col-md-8 inbox-list">
      
      <div className="email-item unread">
        <div className="d-flex justify-content-between">
          <strong>John Doe</strong>
          <span className="email-time">10:30 AM</span>
        </div>
        <div>Meeting at 3 PM</div>
        <small className="text-muted">Please confirm the time for our meeting...</small>
      </div>
      <div className="email-item">
        <div className="d-flex justify-content-between">
          <strong>Jane Smith</strong>
          <span className="email-time">9:15 AM</span>
        </div>
        <div>Project Deadline Extended</div>
        <small className="text-muted">The project deadline has been moved...</small>
      </div>
      <div className="email-item">
        <div className="d-flex justify-content-between">
          <strong>Team Updates</strong>
          <span className="email-time">Yesterday</span>
        </div>
        <div>Weekly Status Report</div>
        <small className="text-muted">Please find the latest status report...</small>
      </div>
    </div>
  )
}

export default SentItems