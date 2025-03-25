import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {saveStu} from '../redux/StudentSlice'

const Demo = () => {
  let allStu = useSelector(state=>state.StudentReducer);
  let dispatch = useDispatch();
  let [stu, setStu] = useState({
    name : "",
    age : ""
  })

  let add = ()=>{
    dispatch(saveStu(stu))
    setStu({name : "", age : ""})
  }

  return (
    <div class="col-md-10 inbox-list">
        <h2>Demo</h2>
        <br />
        <div className="row">
          <div className="col-md-6">
            <input type='text' value={stu.name} onChange={(e)=>setStu({...stu, name : e.target.value})} placeholder='Name' className='form-control' />
            <br />
            <br />
            <input type='text' value={stu.age} onChange={(e)=>setStu({...stu, age : e.target.value})} placeholder='Age' className='form-control' />
            <br />
            <br />
            <button onClick={add} className='btn btn-primary'>Add</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <table className='table table-dark'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {
                  allStu.map((item, index)=><tr key={item.id}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default Demo