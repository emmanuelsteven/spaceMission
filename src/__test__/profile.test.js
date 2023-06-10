import React from 'react';
import { render } from '@testing-library/react';
// import Profile from '.';
import Profile from '../component/Profile';
import { useSelector, useDispatch } from 'react-redux';

// Mock the react-redux functions
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Profile Component', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  test('renders correctly with reserved rockets and missions', () => {
    // Mock the useSelector hook to return mock data
    useSelector.mockImplementation((selector) => {
      if (selector === ((state) => state.rockets.rockets)) {
        return [
          { id: 1, rocket_name: 'Falcon 9', reserved: true },
          { id: 2, rocket_name: 'Falcon Heavy', reserved: true },
        ];
      }
      if (selector === ((state) => state.mission.missions)) {
        return [
          { mission_id: 1, mission_name: 'Mission 1', reserved: true },
          { mission_id: 2, mission_name: 'Mission 2', reserved: true },
        ];
      }
      return null;
    });

    // Render the component
    const { container } = render(<Profile />);

    // Verify that the component renders correctly
    expect(container).toMatchSnapshot();
  });

  test('renders correctly with no reserved rockets and missions', () => {
    // Mock the useSelector hook to return mock data
    useSelector.mockImplementation((selector) => {
      if (selector === ((state) => state.rockets.rockets)) {
        return [];
      }
      if (selector === ((state) => state.mission.missions)) {
        return [];
      }
      return null;
    });

    // Render the component
    const { container } = render(<Profile />);

    // Verify that the component renders correctly
    expect(container).toMatchSnapshot();
  });
});
