import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk('users/delete', async (user) =>{
    await axios.delete(`http://localhost:3005/users/${user.id}`);
    // whatever we returned shows up as action payload inside of our reducer.
    return user;
});

export {deleteUser};