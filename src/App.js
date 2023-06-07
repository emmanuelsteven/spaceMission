import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/navBar';
import Profile from './component/Profile';
import Rockets from './component/rockets/rockets';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {<Route path="/" element={<Rockets />} />}
        {/* <Route path="/ missions" element={<Missions />} /> */}
        <Route path="/My-Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
