import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './component/navBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/ missions" element={<Missions />} />
        <Route path="/ my profile" element={<MyProfile />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
