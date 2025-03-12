import React from 'react';

const Compose_modal = () => {
  return (
<div className="modal fade" id="compose_mail" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Compose Your Mail</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/* <label htmlFor="">From</label> */}
        <input className='form-control' placeholder='From' type="text" name="" id="" />
        {/* <label htmlFor="">To</label> */}
        <input className='form-control' placeholder='To' type="text" name="" id="" />
        {/* <label htmlFor="">Subject</label> */}
        <input className='form-control' placeholder='Subject' type="text" name="" id="" />
<textarea style={{width:"100%", height:"500px"}} className='form-control' placeholder='Start Writing From Here...' name="" id=""></textarea>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</div>
  );
}

export default Compose_modal;
