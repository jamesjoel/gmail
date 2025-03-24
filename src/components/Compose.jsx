import React, { useState } from 'react'
import './Compose.css'
import { useSelector, useDispatch } from 'react-redux'
import { sendMail } from '../redux/MailSlice'


const Compose = ({setShowCompose}) => {
    let dispatch = useDispatch();

    let allMail = useSelector(state=>state.MailReducer);

    let [frm, setFrm] = useState({
        to : "",
        subject : "",
        message : "",
    })

    let send = ()=>{
        let sendObj = { 
            id : allMail.length+1,
            from : "rohit@gmail.com",
            to : frm.to,
            subject : frm.subject,
            body : frm.message,
            timestamp : new Date().toDateString(),
            mail_status : 5
        }

        dispatch(sendMail(sendObj));
        setShowCompose(false);

    }
  return (
    <div className='compose-box'>
        <div className='d-flex compose-header justify-content-between'>

        <h4 className=''>
            New Message
        </h4>
            <button className='btn-close' onClick={()=>setShowCompose(false)}></button>
        </div>
        <br />
        <input type='text' value={frm.to} onChange={(e)=>setFrm({...frm, to:e.target.value})} className='form-control my-2' placeholder='To' />

        <input type='text' value={frm.subject} onChange={(e)=>setFrm({...frm, subject:e.target.value})} className='form-control my-2' placeholder='Subject' />
        <textarea value={frm.message} onChange={(e)=>setFrm({...frm, message:e.target.value})} className='form-control my-2' rows="7" placeholder='Message' ></textarea>
        <div className='col-md-3'>

        <button onClick={send} className='btn btn-primary'>Send</button>
        </div>

    </div>
  )
}

export default Compose