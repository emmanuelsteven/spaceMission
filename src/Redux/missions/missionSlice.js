import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
  erro: null,
};

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    console.log(response.data);
    const allMissions = (response.data).map((mission) => mission);
    // return allMissions;
 
  } catch (error) {
    throw new Error('failed to get mission data');
  }
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    onboardMission: (state, action) => {
        console.log(action.payload)
      const missionId = action.payload;
      const newState = { ...state };
      newState.missions = state.missions.map((mission) => {
        if (mission.mission.id !== missionId) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return newState;
    },

    offboardMission: (state, action) => {
      state.missions = state.missions.filter((missions) => missions.id !== action.payload);
    },

    extraReducers: (builder) => {
      builder
        .addCase(getMissions.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getMissions.fulfilled, (state, action) => {
          state.isLoading = false;
          state.missions = action.payload;
        })
        .addCase(getMissions.rejected, (state) => {
          state.isLoading = false;
        });
    },
  },
});

export const { onboardMission, offboardMission } = missionSlice.actions;
export default missionSlice.reducer;
