import React from 'react'
import Mail from '../components/Mail'
import { useSelector } from 'react-redux'

const Inbox = () => {

  let allMail = useSelector(state=>state.MailReducer);

  return (
    <div className="col-md-10 mt-2 inbox-list border bg-white rounded-4">
      {/* <div className="email-item"> */}
        {
          allMail.map(item=> item.mail_status==1 || item.mail_status ==2 ? <Mail key={item.id} data={item}  /> : '')
        }
        
      {/* </div> */}
      
    </div>
  )
}

export default Inbox