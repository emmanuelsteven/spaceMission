/* eslint-disable default-param-last */
import { configureStore } from '@reduxjs/toolkit';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Rockets from '../component/rocket/Rockets';

const store = configureStore({
  reducer: {
    rockets: (state = { rockets: [] }, action) => {
      switch (action.type) {
        case 'FETCH_ROCKETS_SUCCESS':
          return {
            rockets: action.payload.map((rocket) => ({
              id: rocket.id,
              rocket_name: rocket.name,
              description: rocket.description,
              flickr_images: [...rocket.flickr_images],
            })),
          };
        default:
          return state;
      }
    },
  },
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
