import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStu, saveStu, delStu, editStu } from '../redux/Student'

const Demo = () => {
    let dispatch = useDispatch();
    let allStu = useSelector(state => state.StudentReducer);

    let [stu, setStu] = useState({
        name: "",
        age: "",
        fee: ""
    })

    let [checkedItems, setCheckedItems] = useState([])

    let add = () => {
        if (stu.id) {
            dispatch(editStu(stu))
        } else {
            dispatch(saveStu(stu))
        }
        dispatch(getStu())
        setStu({ name: "", age: "", fee: "" })
    }

    let del = (item) => {
        dispatch(delStu(item))
    }

    let edit = (item) => {
        setStu(item)
    }

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

    return (
        <>
            <div className="col-md-10 inbox-list">
                <div className='col-md-6 m-5'>
                    <input type='text' value={stu.name} onChange={(e) => setStu({ ...stu, name: e.target.value })} className='form-control' placeholder='name' />
                    <br />
                    <br />
                    <input type='text' value={stu.age} onChange={(e) => setStu({ ...stu, age: e.target.value })} className='form-control' placeholder='age' />
                    <br />
                    <br />
                    <input type='text' value={stu.fee} onChange={(e) => setStu({ ...stu, fee: e.target.value })} className='form-control' placeholder='fee' />
                    <br />
                    <br />
                    <button onClick={add} className={'btn ' + (stu.id ? 'btn-success' : 'btn-info')}>{stu.id ? 'update' : "add"}</button>
                </div>

                <div className='col-md-8'>
                {
                    allStu.length == 0
                    ?
                    <div class="alert alert-danger" role="alert">
                    No data found ........!
                    </div>
                    :
                    <>
                    <table className='table table-danger'>
                        <thead>
                            <tr>
                                <th>S.NO.</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>FEE</th>
                                <th>DELETE</th>
                                <th>EDIT</th>
                                {
                                    allStu.length > 1 
                                    ?
                                    <th>CHECKBOX</th>
                                    :
                                    ""

                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allStu.map((item, index) => <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.fee}</td>
                                    <td> <button onClick={() => del(item)} className='btn btn-danger'>del</button></td>
                                    <td> <button onClick={() => edit(item)} className='btn btn-info'>edit</button></td>
                                    {
                                        allStu.length > 1
                                        ?
                                        <td><input type="checkbox" checked={checkedItems.includes(item.id)} onChange={() => handleCheckboxChange(item)} className='form-check-input' /></td>
                                        :
                                        ""
                                        
                                    }

                                </tr>)
                            }
                        </tbody>

                    </table>

                {
                    checkedItems.length  > 1
                    ?
                    <button onClick={deleteSelectedItems} className='btn btn-danger'>Delete Selected</button>
                    :
                    ""
                }
                  </>
                    
                }

                </div>
            </div>
        </>
    )
}

export default Demo