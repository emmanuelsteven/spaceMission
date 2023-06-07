import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    missions: [],
    isLoading: false,
    erro: null,
};

export const getMissions = createAsyncThunk ( 'missions/getMissions', async() => {
    try{
        const response = await axios.get('https://api.spacexdata.com/v3/missions');
        const allMissions = (response.data).map((mission) => mission);
        return allMissions;
    } catch (error){
        throw new Error ('failed to fetch mission data');
    }
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      state.missions.push(action.payload);
    
    },

    leaveMission: (state, action) => {
      state.missions = state.missions.filter((missions) => missions.id !== action.payload);
    },


    extraReducers: (builder) => {
        builder
        .addCase(getMissions.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getMissions.fulfilled, (state, {payload}) => {
            state.isLoading = false;

        })
        .addCase(getMissions.rejected, (state) => {
            state.isLoading = false;

        })
       
    }
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
