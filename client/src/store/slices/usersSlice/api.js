import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../api/Axios";

export const getUsersData = createAsyncThunk("users/getUsersData", async () => {
    const response = await Axios.getUsersData();
    return response.data;
});

export const addUserData = createAsyncThunk(
    "users/addUserData",
    async (data, { rejectWithValue }) => {
        try {
            const response = await Axios.addUserData(data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.error);
        }
    },
);
