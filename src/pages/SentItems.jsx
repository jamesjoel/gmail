import React from 'react'
import { useSelector } from 'react-redux';
import Mail from '../components/Mail';

const SentItems = () => {
  let allMail = useSelector(state=>state.MailReducer);

  return (
    <div class="col-md-10 inbox-list">
      
        {
          allMail.map(item=> item.mail_status==5 ? <Mail key={item.id} data={item}  /> : '')
        }
        
      
      
    </div>
  )
}

export default SentItems