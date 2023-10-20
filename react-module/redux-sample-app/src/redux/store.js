import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import todoSlice from "./TodoSlice";
import UserSlice from "./UserSlice";

import thunkMiddleWare from "redux-thunk";

const store = configureStore({
    reducer: {
        counterSlice: counterSlice.reducer,
        todoSlice: todoSlice.reducer, 
        userSlice: UserSlice.reducer
    },
    middleware: [thunkMiddleWare]
});

export default store;