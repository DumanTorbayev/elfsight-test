import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchPhotosById} from "../../api";

export const getPhotosById = createAsyncThunk(
    'getPhotosById',
    async (id) => {
        try {
            const response = await fetchPhotosById(id)

            return await response.json()
        } catch (error) {
            console.log(error);
        }
    }
)

const initialState = {
    photos: [],
    loading: false,
}

const photos = createSlice({
    name: 'photos',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPhotosById.pending, (state, {payload}) => {
            state.loading = true
        })
        builder.addCase(getPhotosById.fulfilled, (state, {payload}) => {
            state.photos = payload
            state.loading = false
        })
    }
})

export const {} = photos.actions
export default photos.reducer