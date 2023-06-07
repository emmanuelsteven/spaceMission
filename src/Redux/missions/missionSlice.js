import { createSlice } from '@reduxjs/toolkit';

const missionSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    joinMission: (state, action) => {
      const newMission = action.payload;
      state.missions = [...state.missions, newMission];
    },

    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.filter((missions) => missions.id !== missionId);
    },
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;

export default missionSlice.reducer;
