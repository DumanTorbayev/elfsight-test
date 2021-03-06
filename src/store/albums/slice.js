import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAlbums } from '../../api'

export const getAlbumsById = createAsyncThunk(
	'getAlbumsById',
	async (id) => {
		try {
			const data = await Promise.all(fetchAlbums(id).map(async url => {
				const response = await fetch(url)
				return await response.json()
			}))

			return data[0].map(item1 => {
				const filteredArr = data[1].filter(item2 => item1.id === item2.albumId)

				item1.photosCount = filteredArr.length
				item1.thumbnailUrl = filteredArr[0].thumbnailUrl

				return item1
			})
		} catch (error) {
			console.log(error)
		}
	}
)

const initialState = {
	data: [],
	loading: false
}

const albums = createSlice({
	name: 'albums',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getAlbumsById.pending, (state) => {
			state.loading = true
		})
		builder.addCase(getAlbumsById.fulfilled, (state, { payload }) => {
			state.data = payload
			state.loading = false
		})
	}
})

export default albums.reducer
