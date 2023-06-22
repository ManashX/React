// the goal of this slice that we're about to create is to manage everything related to these users.
import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers} from "../thunks/fetchUsers";
import {addUser} from "../thunks/addUser";

const usersSlice = createSlice({

    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {}

    //The goal of extraReducers is to allow us to watch for some additional action types, to watch for actions
    // that are being dispatched that are not inherently tied to the slice.
    ,
    extraReducers(builder){
        //  a huge part of Rick's toolkit is for us to not have to write out these individual action types manually.
        // fetchusers variable right here is going to have three properties automatically assigned to it.
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(addUser.pending,(state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(addUser.fulfilled,(state,action) =>{
            state.data.push(action.payload);
            state.isLoading  = false;
        })
        builder.addCase(addUser.rejected, (state, action) =>{
            state.isLoading = false;
        })
    }
}

);

export const usersReducer = usersSlice.reducer;