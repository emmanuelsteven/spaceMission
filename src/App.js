import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/navBar';
import Profile from './component/Profile';
import Mission from './component/mission';
import Rockets from './component/rocket/Rockets';
import { Provider } from 'react-redux';
import store from './Redux/slices/store';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Mission" element={<Mission />} />
        <Route path="/My-Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
