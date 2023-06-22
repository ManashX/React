import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch',async() =>{

    // And from this function, I'm going to return the data that I want to use inside of my user slice.
    const response = await axios.get('http://localhost:3005/users');
    await pause(2000);
    
    return response.data;
});
const pause = (duration) =>{
    return new Promise((resolve) =>{
        setTimeout(resolve, duration);
    });
}

export {fetchUsers};