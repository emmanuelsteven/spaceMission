import React, { useEffect } from 'react';
import './styles/miss.css';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, onboardMission, offboardMission } from '../Redux/missions/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  console.log(missions);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  //   if (isLoading) {
  //     return (
  //       <div className="loading">
  //         <p>Loading...</p>
  //       </div>
  //     );
  //   }
  return (
    <div className="mission_container">
      <table className="table">
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
            <tr key={mission.id}>
              <td className="mission_name">{mission.mission_name}</td>
              <td className="mission_description">{mission.description}</td>
              <td className="btns">
                <button type="button" className="member-btn">
                  Not A Member
                </button>
                {missions.reserved && (
                  <button type="button" className="activeMember-btn">
                    Active Member
                  </button>
                )}
              </td>
              <td className="tab-btns">
                <button
                  type="button"
                  className="join-btn"
                  onClick={() => {
                    dispatch(onboardMission(mission.mission.id));
                  }}
                >
                  Join Mission
                  {' '}
                </button>

                {mission.reserved && (
                  <button
                    type="button"
                    className="leave-btn"
                    onClick={() => {
                      dispatch(offboardMission(mission.reserved));
                    }}
                  >
                    {' '}
                    Leave Mission
                    {' '}
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
