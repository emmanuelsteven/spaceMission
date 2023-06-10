import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../Redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleReserveRocket = () => {
    dispatch(reserveRocket(rocket.id));
  };

  return (
    <div className="rocket-details">
      <img className="rocket-img" src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <div className="rocket-info">
        <h3>{rocket.rocket_name}</h3>
        <div className="disc-res">
          {rocket.reserved && <span className="reserved-btn">Reserved</span>}
          <p>{rocket.description}</p>
        </div>
        <button
          className={rocket.reserved === true ? 'cancel-reserve-btn' : 'reserve-btn'}
          type="button"
          onClick={() => {
            handleReserveRocket();
          }}
          data-testid={`reserve-button-${rocket.id}`}
        >
          {rocket.reserved ? 'Cancel reservation' : 'Reserve rocket'}
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};

export default Rocket;
