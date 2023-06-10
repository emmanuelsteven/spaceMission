import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NavBar from '../component/navBar';

const mockStore = configureStore([]);

describe('NavBar', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    );

    expect(screen.getByAltText('navlogo')).toBeInTheDocument();
    expect(screen.getByText('Space Travelers Hub')).toBeInTheDocument();
    expect(screen.getByText('Rockets')).toBeInTheDocument();
    expect(screen.getByText('Missions')).toBeInTheDocument();
    expect(screen.getByText('My Profile')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
