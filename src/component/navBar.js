import { NavLink } from 'react-router-dom';
import planetImg from './Img/planet.png';
import './styles/miss.css';

const NavBar = () => (
  <nav className="nav-container">
    <div className="nav-logo">
      <img src={planetImg} alt="navlogo" width={50} height={50} />
      <h1 className="navtitle">
        <NavLink exact to="/" activeClassName="active">Space Travelers Hub</NavLink>
      </h1>
    </div>
    <div className="navlinks">
      <NavLink to="/" activeClassName="active" className="navlink">Rockets</NavLink>
      <NavLink to="/mission" activeClassName="active" className="navlink">Missions</NavLink>
      <NavLink to="/Profile" activeClassName="active" className="navlink">My Profile</NavLink>
    </div>
  </nav>
);

export default NavBar;
