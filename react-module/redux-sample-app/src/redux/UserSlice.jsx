import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "userSlice",
    initialState: {
        users: null,
        loading: true,
        error: false,
        
        user: null,
        singleUserLoading: true,
        singleUserError: false
    },

    reducers: {
        showLoading: (state) => {
            state.error = false;
            state.loading = true;
        },

        showError: (state) => {
            state.error = true;
            state.loading = false;
        },

        setUserData: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },


        showSingleUserLoading: (state) => {
            state.singleUserError = false;
            state.singleUserLoading = true;
        },

        showSingleUserError: (state) => {
            state.singleUserError = true;
            state.singleUserLoading = false;
        },

        setSingleUserData: (state, action) => {
            state.singleUserLoading = false;
            state.user = action.payload;
        },
    }
});

export default UserSlice;