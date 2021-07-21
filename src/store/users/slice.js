import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "../../api";

export const getUsers = createAsyncThunk(
    'getUsers',
    async () => {
        try {
            const response = await fetchUsers()

            return await response.json()
        } catch (error) {
            console.log(error);
        }
    }
)

const initialState = {
    users: [],
}

const users = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, {payload}) => {
            state.users = payload
        })
    }
})

export default users.reducer