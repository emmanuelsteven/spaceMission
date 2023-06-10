// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import Mission from '../component/mission';
// import { onboardMission, offboardMission } from '../Redux/missions/missionSlice';

// const mockStore = configureStore([]);

// describe('Mission component', () => {
//   let store;
//   let missions;

//   beforeEach(() => {
//     missions = [
//       {
//         mission_id: 1,
//         mission_name: 'Mission 1',
//         description: 'Mission 1 Description',
//         reserved: false,
//       },
//       {
//         mission_id: 2,
//         mission_name: 'Mission 2',
//         description: 'Mission 2 Description',
//         reserved: true,
//       },
//     ];

//     store = mockStore({
//       mission: {
//         missions,
//         isLoading: false,
//       },
//     });
//   });

//   test('dispatches onboardMission when "Join Mission" button is clicked', () => {
//     store.dispatch = jest.fn();

//     const { getByText } = render(
//       <Provider store={store}>
//         <Mission />
//       </Provider>,
//     );

//     fireEvent.click(getByText('Join Mission'));
//     expect(store.dispatch).toHaveBeenCalledWith(onboardMission(1));
//   });

//   test('dispatches offboardMission when "Leave Mission" button is clicked', () => {
//     store.dispatch = jest.fn();

//     const { getByText } = render(
//       <Provider store={store}>
//         <Mission />
//       </Provider>,
//     );

//     fireEvent.click(getByText('Leave Mission'));
//     expect(store.dispatch).toHaveBeenCalledWith(offboardMission(2));
//   });
// });
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer'; // Add this import
import Mission from '../component/mission';
import { onboardMission, offboardMission } from '../Redux/missions/missionSlice';

const mockStore = configureStore([]);

describe('Mission component', () => {
  let store;
  let missions;

  beforeEach(() => {
    missions = [
      {
        mission_id: 1,
        mission_name: 'Mission 1',
        description: 'Mission 1 Description',
        reserved: false,
      },
      {
        mission_id: 2,
        mission_name: 'Mission 2',
        description: 'Mission 2 Description',
        reserved: true,
      },
    ];

    store = mockStore({
      mission: {
        missions,
        isLoading: false,
      },
    });
  });

  test('dispatches onboardMission when "Join Mission" button is clicked', () => {
    store.dispatch = jest.fn();

    const { getByText } = render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    fireEvent.click(getByText('Join Mission'));
    expect(store.dispatch).toHaveBeenCalledWith(onboardMission(1));

    // Add snapshot testing
    const tree = renderer.create(
      <Provider store={store}>
        <Mission />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('dispatches offboardMission when "Leave Mission" button is clicked', () => {
    store.dispatch = jest.fn();

    const { getByText } = render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    fireEvent.click(getByText('Leave Mission'));
    expect(store.dispatch).toHaveBeenCalledWith(offboardMission(2));

    // Add snapshot testing
    const tree = renderer.create(
      <Provider store={store}>
        <Mission />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
