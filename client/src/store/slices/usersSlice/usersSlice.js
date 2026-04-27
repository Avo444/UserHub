import { addUserData, getUsersData, updateUserAvatar } from "./api";
import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        error: null,
        loader: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersData.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload;
        });

        builder.addCase(addUserData.fulfilled, (state, action) => {
            state.loader = false;
            state.data = [action.payload, ...state.data];
        });
        
        builder.addCase(updateUserAvatar.fulfilled, (state, action) => {
            state.loader = false;
            console.log(action.payload)
            state.data = state.data.map((item) =>
                item._id === action.payload._id ? action.payload : item,
            );
        });

        builder.addMatcher(isPending, (state) => {
            state.loader = true;
            state.error = null;
        });

        builder.addMatcher(isRejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });
    },
    selectors: {
        getUsers: (state) => state.data,
        getUsersError: (state) => state.error,
        getUsersLoader: (state) => state.loader,
    },
});

export const usersReducer = usersSlice.reducer;
export const { getUsers, getUsersError, getUsersLoader } = usersSlice.selectors;
