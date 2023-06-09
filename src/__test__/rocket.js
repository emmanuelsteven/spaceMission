import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const rockets = [
      {
        id: '1',
        name: 'Falcon 1',
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        flickr_images: [
          'https://imgur.com/DaCfMsj.jpg',
          'https://imgur.com/azYafd8.jpg',
        ],
      },
      {
        id: '2',
        name: 'Falcon 9',
        description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
        flickr_images: [
          'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
        ],
      },
      {
        id: '3',
        name: 'Falcon Heavy',
        description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
        rocket_id: 'falconheavy',
        flickr_images: [
          'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
        ],
      },
      {
        id: '4',
        name: 'Starship',
        description: 'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
        flickr_images: [
          'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
        ],
      },
    ];
    return rockets;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    isLoading: false,
    error: '',
  },
  reducers: {
    reserveRocket: (state, action) => {
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
      return ({
        ...state,
        rockets: newRockets,
      });
    },
    cancelReserve: (state, action) => {
      const newRockets = action.payload;
      state.rockets = state.rockets.map((rocket) => (
        rocket.id !== newRockets ? rocket : { ...rocket, reserved: false }
      ));
      return ({
        ...state,
        rockets: newRockets,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const rocketList = action.payload.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.name,
        description: rocket.description,
        flickr_images: [...rocket.flickr_images],
      }));
      return ({
        ...state,
        isLoading: false,
        rockets: rocketList,
      });
    })
      .addCase(getRockets.pending, (state) => ({
        ...state,
        isLoading: true,
        error: '',
      }))
      .addCase(getRockets.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
      }));
  },
});

export const { reserveRocket, cancelReserve } = rocketsSlice.actions;
export default rocketsSlice.reducer;
