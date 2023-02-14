import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	userInfo: {
		name: 'Sergey',
		surname: 'Drynkin',
		photoUrl: 'https://avatars.githubusercontent.com/u/74024058?v=4',
	},
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setName: (state, { payload }) => {
			state.userInfo.name = payload
		},
		setSurname: (state, action) => {
			state.userInfo.surname = action.payload
		},
	},
})

export const { setName, setSurname } = userSlice.actions

export default userSlice.reducer
