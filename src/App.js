import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/navBar';
import Profile from './component/Profile';
import Mission from './component/mission';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route path="/Rocket" element={<Rockets />} /> */}
        <Route path="/Mission" element={<Mission />} />
        <Route path="/My-Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
