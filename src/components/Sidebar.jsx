import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import Compose from './Compose';

const Sidebar = () => {

  let [showCompose, setShowCompose] = useState(false);

  let allMail = useSelector(state=>state.MailReducer);
  let counter=0;
  allMail.forEach(item=>{
    if(item.mail_status==2){
      counter++;
    }
  })

  return (
    <div className="col-md-2 sidebar">
      <button onClick={()=>setShowCompose(true)} className="btn btn-danger mb-3">+ Compose</button>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" to="/inbox">Inbox ({counter})</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/sent">Sent</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Drafts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Trash</a>
        </li>
      </ul>
      {
        showCompose 
        ?
        <Compose setShowCompose={setShowCompose} />
        :
        ''
      }
    </div>
  )
}

export default Sidebar