import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../Redux/rockets/rocketsSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rockets.length === 0) dispatch(getRockets());
  }, [dispatch, rockets.length]);

  return (
    <div className="rocket-con">
      {rockets
       && rockets.map((rocket) => <Rocket key={rocket.id}
        rocket_name={rocket.name} rocket={rocket} />)}
    </div>
  );
};

export default Rockets;
