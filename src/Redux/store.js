import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketReducer,
  },
});

export default store;
