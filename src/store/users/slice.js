import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from '../../api'

export const getAllUsers = createAsyncThunk(
	'getAllUsers',
	async () => {
		try {
			const response = await fetchUsers()

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

const users = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getAllUsers.pending, (state) => {
			state.loading = true
		})
		builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
			state.data = payload
			state.loading = false
		})
	}
})

export default users.reducer
