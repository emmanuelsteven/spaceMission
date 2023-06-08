import { Link } from 'react-router-dom';
import planetImg from './Img/planet.png';
import './styles/miss.css';

const NavBar = () => (
  <nav className="nav-container">
    <div className="nav-logo">
      <img src={planetImg} alt="navlogo" width={50} height={50} />
      <h1 className="navtitle">
        <Link to="/">Space Travelers Hub</Link>
      </h1>
    </div>
    <div className="navlinks">
      <Link to="/" className="navlink">Rockets</Link>
      <Link to="/mission" className="navlink">Missions</Link>
      <Link to="/Profile" className="navlink   profile">My Profile</Link>
    </div>
  </nav>

);

export default NavBar;
