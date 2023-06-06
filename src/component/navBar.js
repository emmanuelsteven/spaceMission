import { Link } from 'react-router-dom';
import './Img/ht.jpg';

const NavBar = () => (
  <nav className="nav-container">
    <div className="nav-logo">
      <img src="Img" alt="navlogo" />
      <h1 className="navtitle">
        <Link to="/">Space Travelers Hub</Link>
      </h1>
    </div>
    <div className="navlinks">
      <Link to="/">Rockets</Link>
      <Link to="/mission">Missions</Link>
      <Link to="/My Profile">MyProfile</Link>
    </div>
  </nav>

);

export default NavBar;
