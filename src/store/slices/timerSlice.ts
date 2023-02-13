import { createSlice } from '@reduxjs/toolkit'
import { PayloadType, TimerI } from './../../types/types'

interface StateI {
	timers: TimerI[]
}

const initialState: StateI = {
	timers: [
		{
			id: 1,
			title: 'Typescript',
			time: {
				seconds: 0,
				minutes: 0,
				hours: 0,
			},
			color: '#FD8A68',
		},
		{
			id: 2,
			title: 'JS',
			time: {
				seconds: 10,
				minutes: 0,
				hours: 0,
			},
			color: '#FD8A68',
		},
	],
}

export const timerSlice = createSlice({
	name: 'timer',
	initialState,
	reducers: {
		setTimers: (state, { payload }) => {
			state.timers = payload
		},
		addTimer: (state, { payload }) => {
			state.timers = [...state.timers, payload]
		},
		removeItem: (state, { payload }) => {
			state.timers = [...state.timers.filter(timer => timer.id !== payload)]
		},

		setTime: (state, { payload }: PayloadType) => {
			const findItem = state.timers.find(obj => obj.id === payload.id)
			if (findItem) {
				findItem.time.seconds += payload.seconds
				findItem.time.minutes += payload.minutes
				findItem.time.hours += payload.hours
			}
		},
	},
})

export const { addTimer, removeItem, setTime, setTimers } = timerSlice.actions

export default timerSlice.reducer
