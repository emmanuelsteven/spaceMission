import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const allMission = (response.data).map((mission) => mission);
    return allMission;
  } catch (error) {
    throw new Error('failed to get mission data');
  }
});

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    onboardMission: (state, action) => {
      const missionId = action.payload;
      const newState = { ...state };
      newState.missions = state.missions.map((mission) => {
        if (mission.mission_id !== missionId) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return newState;
    },

    offboardMission: (state, action) => {
      const missionId = action.payload;
      const newState = { ...state };
      newState.missions = state.missions.map((mission) => {
        if (mission.mission_id !== missionId) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missions = action.payload;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { onboardMission, offboardMission } = missionSlice.actions;
export default missionSlice.reducer;
