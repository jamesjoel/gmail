import {React, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveStu, delStu, updateStu } from '../redux/StudentSlice'

const Demo = () => {

    let allStu = useSelector(state=>state.StudentReducer);
    let dispatch = useDispatch();

    let [checkedItems, setCheckedItems] = useState([])

    let handleCheckboxChange = (item) => {
        if (checkedItems.includes(item.id)) {
            setCheckedItems(checkedItems.filter(id => id !== item.id))
        } else {
            setCheckedItems([...checkedItems, item.id])
        }
    }

    let deleteSelectedItems = () => {
        checkedItems.forEach(id => {
            let item = allStu.find(stu => stu.id === id)
            dispatch(delStu(item))
        })
        setCheckedItems([])
    }

   

    let [stu, setStu] = useState({
        name : "",
        age : "",
        fee : ""
    })

    let add = ()=>{
        if(stu.id){
            dispatch(updateStu(stu))
        }else{
            dispatch(saveStu(stu));
         }
        setStu({name : "", age : "", fee : ""});

    }

    let del = (item)=>{
        // console.log(item);
        dispatch(delStu(item));
    }

    let edit = (item)=>{
        setStu(item);
    }


    

  return (
    <div className="col-md-10 inbox-list">
        <h2>Demo</h2>
        <br/>
        <br/>
        <div className="row">
            <div className="col-md-6">
                <input type='text' value={stu.name} onChange={(e)=>setStu({...stu, name : e.target.value})} placeholder='Name' className='form-control'/>
                <br/>
                <br/>
                <input type='text' value={stu.age} onChange={(e)=>setStu({...stu, age : e.target.value})} placeholder='Age' className='form-control'/>
                <br/>
                <br/>
                <input type='text' value={stu.fee} onChange={(e)=>setStu({...stu, fee : e.target.value})} placeholder='Fee' className='form-control'/>
                <br/>
                <br/>
                
                <button onClick={add} className= {'btn '+ (stu.id ? 'btn-success' : 'btn-primary')}>{stu.id ? 'Update' : 'Add'}</button>
                
                {
                    checkedItems.length>0
                    ?
                    <button onClick={deleteSelectedItems} className='btn btn-danger mx-2'>Delete Selected</button>
                    :
                    ''
                }
            
            </div>

         </div>
         <div className="row">
            <div className="col-md-12">
                {
                    allStu.length == 0
                    ?
                    <div className = 'alert my-3 alert-danger'>No Data Found</div>
                    :
                    <table className="table table-hover table-striped table-dark my-3">
                    <thead>
                        <tr>
                            <th>Check Box</th>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Fee</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                        <tbody>
                            
                                {
                                    allStu.map((item, index)=><tr key={item.index}>
                                        <td><input type="checkbox" checked={checkedItems.includes(item.id)} onChange={() => handleCheckboxChange(item)} className='form-check-input' /></td>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.fee}</td>
                                        <td><button onClick={()=>del(item)} className= 'btn btn-sm btn-danger'>Del</button></td>
                                        <td><button onClick={()=>edit(item)} className= 'btn btn-sm btn-info'>Edit</button></td>
                                    </tr>)
                                }
                            
                        </tbody>
                </table>

                }
        
        
            </div>
         </div>

        </div>
    
  )
}

export default Demo