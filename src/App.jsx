import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/assets/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import MyHome from './components/MyHome';
import Mysettings from './components/MySettings';
import MyFooter from './components/MyFooter';
import MyProfile from './components/MyProfile';
import TvShows from './components/TvShows';
import NotFound from './components/NotFound';
import MovieDetails from './components/MovieDetails';

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
                <MyHome />
                <MyFooter />
              </>
            }
          />

          <Route path='/tv-shows' element={<TvShows />} />

          <Route path='/movie-details/:movieId' element={<MovieDetails />} />

          <Route path='/profile' element={<MyProfile />} />

          <Route path='/settings' element={<Mysettings />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
