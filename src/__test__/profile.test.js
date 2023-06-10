import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Profile from '../component/Profile';

const store = {
  rockets,
  missions,
};

it('should render the profile component with reserved rockets and missions', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Profile />
    </Provider>,
    div,
  );

  const rocketsList = div.querySelector('.reserved-table .list-con ul li');
  const missionsList = div.querySelector('.reserved-mission .mission-list-container ul li');

  expect(rocketsList.textContent).toBe('Falcon 9, Saturn V');
  expect(missionsList.textContent).toBe('SpaceX Demo-2, Apollo 11');
});
