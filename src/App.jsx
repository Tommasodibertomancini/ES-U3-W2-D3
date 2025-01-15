import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/assets/css/style.css';
import { Component } from 'react';
import MyNavbar from './components/MyNavbar';
import HomePage from './components/Homepage';
import ProfilePage from './components/ProfilePage';
import SettingsPage from './components/SettingsPage';
import MyFooter from './components/MyFooter';

class App extends Component {
  state = {
    showPage: 1,
  };

  handleChangePage = (num) => {
    this.setState({ showPage: num });
  };

  render() {
    const { showPage } = this.state;

    return (
      <>
        <MyNavbar handleChangePage={this.handleChangePage} />
        {showPage === 1 && <HomePage />}
        {showPage === 2 && <ProfilePage />}
        {showPage === 3 && <SettingsPage />}

        <div
          style={{
            display: showPage === 2 || showPage === 3 ? 'none' : 'block',
          }}
        >
          <MyFooter />
        </div>
      </>
    );
  }
}

export default App;
