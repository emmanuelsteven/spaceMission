import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducers: {
    missions: missionReducer,
  },
});

export default store;
