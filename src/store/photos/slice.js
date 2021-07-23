import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPhotosById } from '../../api'

export const getPhotosById = createAsyncThunk(
	'getPhotosById',
	async (id) => {
		try {
			const response = await fetchPhotosById(id)

			return await response.json()
		} catch (error) {
			console.log(error)
		}
	}
)

const initialState = {
	data: [],
	loading: false
}

const photos = createSlice({
	name: 'photos',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getPhotosById.pending, (state) => {
			state.loading = true
		})
		builder.addCase(getPhotosById.fulfilled, (state, { payload }) => {
			state.data = payload
			state.loading = false
		})
	}
})

export default photos.reducer
