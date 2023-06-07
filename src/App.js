import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/navBar';
import Profile from './component/Profile';
import Rockets from './component/rocket/rockets';
import { Provider } from 'react-redux';
import store from './Redux/slices/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {<Route path="/" element={<Rockets />} />}
          {/* <Route path="/ missions" element={<Missions />} /> */}
          <Route path="/My-Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
