import { useSelector, useDispatch } from 'react-redux';
import { cancelReserve, reservedRockets } from '../Redux/slices/rockets/rocketsSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const rocketsList = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rocketsList.filter((rocket) => rocket.reserved === true);

  return (
    <div className="reserved-rockets-con">
      <div className="reserved-table">
        <h3>My Rockets</h3>
        <div className="list-con">
          {reservedRockets.length === 0 ? (
            <span>Not reserved rockets!</span>
          ) : (
            <ul>
              {reservedRockets.map((rocket) => (
                <li className="reserved-list" key={rocket.id}>{rocket.rocket_name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="reserved-mission">
        <h3>My Missions</h3>
        <div className="mission-list-container">
          {reservedRockets.length === 0 ? (
            <p>No Missions Yet!</p>
          ) : (
            <ul className="mission-lists">
              {reservedRockets.map((rocket) => (
                <li className="mission-list" key={rocket.rocket_id}>
                  {rocket.rocket_name}
                  <span className="leave-profile-btn">
                    {rocket.reserved && (
                      <button
                        type="button"
                        className="leave-btn"
                        onClick={() => {
                          dispatch(cancelReserve(rocket.rocket_id));
                        }}
                      >
                        Cancel Reserve
                      </button>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
