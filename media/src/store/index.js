import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
    reducer:{
        users: usersReducer
    }
});


// The syntax right here just means find everything that gets exported from this file and export it from the index case file as well.
export * from './thunks/fetchUsers';
export * from './thunks/addUser';