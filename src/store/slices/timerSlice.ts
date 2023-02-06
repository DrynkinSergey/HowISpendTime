import { TimerI } from './../../types/types';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface StateI {
    timers: TimerI[]
}

const initialState: StateI = {
    timers: [
        {
            id: 1,
            title: 'Typescript',
            time: '59',
            color: '#FD8A68'
        },

        {
            id: 2,
            title: 'React',
            time: '38',
            color: '#59C3E4'
        },
        {
            id: 3,
            title: 'ReduxToolkit',
            time: '30',
            color: '#FD5E7D'
        },
        {
            id: 4,
            title: 'Javascript',
            time: '138',
            color: '#713DCD'
        }
    ]
}



export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        addTimer: (state, { payload }) => {
            state.timers = [...state.timers, payload];
        },
        removeItem: (state, { payload }) => {
            state.timers = [...state.timers.filter(timer => timer.id !== payload)]
        },

    },
})

export const { addTimer, removeItem } = timerSlice.actions

export default timerSlice.reducer