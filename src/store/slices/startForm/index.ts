import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    matchName: '',
    phoneNumber: ''
}

const startFormSlice = createSlice({
    name: 'startForm',
    initialState,
    reducers: {
        update: (state, action) => {
            const { name, matchName, phoneNumber } = action.payload;
            state.name = name;
            state.matchName = matchName;
            state.phoneNumber = phoneNumber;
        },
        reset: (state) => {
            Object.assign(state, initialState);
        },
    }
})

export const { update, reset } = startFormSlice.actions

export default startFormSlice.reducer
