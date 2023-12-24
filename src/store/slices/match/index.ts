import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: "",
    date: "",
    isOngoing: false,
    start_time: "",
    end_time: "",
    venue: "",
    teams: {
      home_team: {
        name: "",
        goals: 0,
        players: [
            //Ex:{"name": "Player X", "yellow_cards": 2, "red_cards": 0}
        ]
      },
      away_team: {
        name: "",
        goals: 0,
        players: []
      }
    },
    referees: {
      main_referee: "",
      assistant_referees: [],
      fourth_official: ""
    }  
}

const matchSlice = createSlice({
    name: 'match',
    initialState,
    reducers: {
        updateMatch: (state, action) => {
            Object.assign(state, action.payload);
        },
        resetMatch: (state) => {
            Object.assign(state, initialState);
        },
    }
})

export const { updateMatch, resetMatch } = matchSlice.actions

export default matchSlice.reducer
