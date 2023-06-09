import { useSelector } from 'react-redux';
import './styles/miss.css';

const Profile = () => {
  const { missions } = useSelector((state) => state.mission);
  const reservedMission = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="mission_reservation">
      <h2>Space Missions</h2>
      <div className="mlist-cont">
        {reservedMission.length === 0 ? (
          <p>No Missions Scheduled </p>
        ) : (
          <ul className="mission-lists">
            {reservedMission.map((mission) => (
              <li className="mission-list" key={mission.mission_id}>{mission.mission_name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;
