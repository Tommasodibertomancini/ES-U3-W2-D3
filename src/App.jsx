import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/assets/css/style.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import HomePage from './components/Homepage';
import Mysettings from './components/SettingsPage';
import MyFooter from './components/MyFooter';
import MyProfile from './components/MyProfile';
import TvShows from './components/TvShows';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
        <MyNavbar />

        <Routes>
          <Route
            path='/'
            element={
              <>
                <HomePage />
                <MyFooter />
              </>
            }
          />

          <Route path='/tv-shows' element={<TvShows />} />

          <Route path='/profile' element={<MyProfile />} />

          <Route path='/settings' element={<Mysettings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
