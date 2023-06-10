import React, { useEffect } from 'react';
import './styles/miss.css';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, onboardMission, offboardMission } from '../Redux/missions/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const { missions, isLoading } = useSelector((state) => state.mission);

  useEffect(() => {
  if (missions.length === 0) {
    dispatch(getMissions());
  }
}, [dispatch, missions.length]);

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="mission_container">
      <table id="table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="mission_name">{mission.mission_name}</td>
              <td className="mission_description">{mission.description}</td>
              <td className="btns">
                {!mission.reserved && (
                <button type="button" className="member-btn">
                  Not A Member
                </button>
                )}
                {mission.reserved && (
                  <button type="button" className="btnz">
                    Active Member
                  </button>
                )}
              </td>
              <td className="btns">
                {!mission.reserved && (
                <button
                  type="button"
                  className="join-btn"
                  onClick={() => {
                    dispatch(onboardMission(mission.mission_id));
                  }}
                >
                  Join Mission
                </button>
                )}
                {mission.reserved && (
                  <button
                    type="button"
                    className="leave-btn"
                    onClick={() => {
                      dispatch(offboardMission(mission.mission_id));
                    }}
                  >
                    Leave Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Mission;
