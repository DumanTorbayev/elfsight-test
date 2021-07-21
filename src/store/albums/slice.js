import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchAlbums, fetchAllPhotos} from "../../api";

export const getAlbums = createAsyncThunk(
    'getAlbums',
    async (id) => {
        try {
            const response = await fetchAlbums(id)

            return await response.json()
        } catch (error) {
            console.log(error);
        }
    }
)

export const getPhotos = createAsyncThunk(
    'getPhotos',
    async () => {
        try {
            const response = await fetchAllPhotos()

            return await response.json()
        } catch (error) {
            console.log(error);
        }
    }
)

const initialState = {
    albums: [],
    photos: [],
    currentPhotos: [],
    loading: false,
}

const albums = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAlbums.pending, (state, {payload}) => {
            state.loading = true
        })
        builder.addCase(getAlbums.fulfilled, (state, {payload}) => {
            state.albums = payload
            state.loading = false
        })
        builder.addCase(getPhotos.fulfilled, (state, {payload}) => {
            state.photos = payload
        })
    }
})

export const {} = albums.actions
export default albums.reducer