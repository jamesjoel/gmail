import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

let getStu = createAsyncThunk("getStu", async()=>{
    let response = await axios.get("http://localhost:3000/student");
    return response.data ;
})

let saveStu = createAsyncThunk("saveStu", async(data)=>{
    let response = await axios.post("http://localhost:3000/student",data);
    return response.data ;
})

let delStu = createAsyncThunk("delStu", async(obj)=>{
    let response = await axios.delete("http://localhost:3000/student/"+ obj.id);
    return response.data ;
})

let updateStu = createAsyncThunk("xyz", async(obj)=>{
    let response = await axios.put("http://localhost:3000/student/"+ obj.id, obj);
    return response.data ;
})

let StudentSlice = createSlice({
    name : "student",
    initialState : [],
    extraReducers : (builder)=>{
        builder.addCase(getStu.fulfilled, (state, action)=>{
            return action.payload ;
        }),
       
        builder.addCase(saveStu.fulfilled, (state, action)=>{
            state.push(action.payload);
        }),

        builder.addCase(delStu.fulfilled, (state, action)=>{
            return state.filter(item=>item.id != action.payload.id)
        }),

        builder.addCase(updateStu.fulfilled, (state, action)=>{
            return state.map(item=>{
                if(item.id == action.payload.id)
                    return action.payload ;
                else
                   return item ;
            })
        })
    }
})

export default StudentSlice.reducer ;
export { getStu, saveStu, delStu, updateStu } ;