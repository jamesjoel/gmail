import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let getStu = createAsyncThunk("getstu", async()=>{
    let response = await axios.get("http://localhost:3000/student");
    return response.data;
});


let saveStu = createAsyncThunk("savestu", async(data)=>{
    let response = await axios.post("http://localhost:3000/student", data);
    return response.data;
})


let StudentSlice = createSlice({
    name : "student",
    initialState : [],
    extraReducers : (builder)=>{
        builder.addCase(getStu.fulfilled, (state, action)=>{
            return action.payload;
        }),
        builder.addCase(saveStu.fulfilled, (state, action)=>{
            state.push(action.payload);
        })
    }
});

export default StudentSlice.reducer;
export {getStu, saveStu};