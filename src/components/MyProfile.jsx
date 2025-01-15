import { Component } from 'react';

class MyProfile extends Component {
  state = {
    accountName: 'Epicoder #1',
  };

  render() {
    return (
      <>
        <main>
          <div className='container-fluid text-secondary profile'>
            <div className='row justify-content-center'>
              <div className='col-4'></div>
              <div className='col-4 mb-5'>
                <h1 className='text-white text-center display-2 fw-normal'>
                  Edit Profile
                </h1>
                <hr />
                <div className='row'>
                  <div className='col-12 col-lg-6'>
                    <img
                      src='../../public/assets/media/avatar.png'
                      alt='avatar'
                      className='img-fluid'
                      id='avatarProfile'
                    />
                  </div>
                  <div className='col-12 col-lg-6'>
                    <input
                      type='text'
                      placeholder='Epicoder#1'
                      className='form-control mb-3 rounded-0 customText'
                    />
                    <p className='fs-5 mt-3'>Language:</p>
                    <select
                      name='language'
                      id=''
                      className='form-select btn btn-outline-light rounded-0 mb-2'
                    >
                      <option value='english' className='text-start' selected>
                        English
                      </option>
                      <option value='english' className='text-start'>
                        Italiano
                      </option>
                      <option value='english' className='text-start'>
                        Espanol
                      </option>
                      <option value='english' className='text-start'>
                        Francaise
                      </option>
                    </select>
                    <hr />
                    <p className='fs-5 mt-3'>Maturity Settings:</p>
                    <button className='btn btn-secondary rounded-0 px-4 mb-3'>
                      ALL MATURITY SETTINGS
                    </button>
                    <p className='text-white'>
                      Show files for all maturity settings for this profile.
                    </p>
                    <button className='btn btn-outline-secondary rounded-0 px-4 mb-3'>
                      EDIT
                    </button>
                    <hr />
                    <p className='fs-5 mt-3'>Autoplay Controls:</p>
                    <div className='row'>
                      <div className='col-2 d-flex align-items-center mb-3'>
                        <input
                          type='checkbox'
                          className='form-check-input form-check'
                        />
                      </div>
                      <div className='col-9 mb-3 text-white'>
                        <label htmlFor='checkbox'>
                          Autoplay next episode in a series on all devices
                        </label>
                      </div>
                      <div className='col-2 d-flex align-items-center'>
                        <input
                          type='checkbox'
                          className='form-check-input form-check'
                        />
                      </div>
                      <div className='col-9 mb-3 text-white'>
                        <label htmlFor='checkbox'>
                          Autoplay next episode in a series on all devices
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className='text-center d-flex flex-column d-lg-block align-items-start text-nowrap'>
                  <button className='btn bg-white rounded-0 px-5 me-3 mb-0 text-black fw-bold'>
                    SAVE
                  </button>
                  <button className='btn btn-outline-secondary rounded-0 px-5 me-3 mb-0'>
                    CANCEL
                  </button>
                  <button className='btn btn-outline-secondary rounded-0 px-5 me-3 mb-0'>
                    DELETE PROFILE
                  </button>
                </div>
              </div>
              <div className='col-4'></div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default MyProfile;
