import { Component } from 'react';

class MySettings extends Component {
  render() {
    return (
      <div className='container my-5 px-4 settings'>
        <h1 className='h2 fw-semibold'>Account</h1>
        <hr />
        <div className='row justify-content-between'>
          <div className='col-12 col-md-3 mb-3'>
            <h4 className='fs-4 fw-normal text-body-tertiary'>
              MEMBERSHIP & BILLING
            </h4>
            <button className='btn shadow-sm bg-body-secondary bg-gradient rounded-0 px-5'>
              Cancel Membership
            </button>
          </div>
          <div className='col-12 col-md-8 mb3'>
            <div className='row mt-lg-3'>
              <div className='col-6'>
                <p className='fw-bold'>Epicoder1@gmail.com</p>
                <p className='text-body-tertiary'>Password: *********</p>
                <p className='text-body-tertiary'>Phone: 321 044 1279</p>
              </div>
              <div className='col-6 text-end'>
                <p>
                  <a href='javascript:void(0)'>Change account email</a>
                </p>
                <p>
                  <a href='javascript:void(0)'>Change password</a>
                </p>
                <p>
                  <a href='javascript:void(0)'>Change phone number</a>
                </p>
              </div>
              <hr />
            </div>
            <div className='row mt-3 align-items-start'>
              <div className='col-5'>
                <p className='fw-bold'>
                  <span className='fw-bolder m-2'>
                    <i className='bi bi-paypal'></i>
                  </span>{' '}
                  Epicoder1@gmail.com
                </p>
              </div>
              <div className='col-7 text-end'>
                <p>
                  <a href='javascript:void(0)'>Update payment info</a>
                </p>
                <p>
                  <a href='javascript:void(0)'>Billing details</a>
                </p>
                <p>
                  <a href='javascript:void(0)'>Redeem giftcard or promo code</a>
                </p>
                <p>
                  <a href='javascript:void(0)'>Where to buy gift cards?</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='row justify-content-between align-items-baseline'>
          <div className='col-12 col-md-3 mb-3'>
            <h4 className='fs-4 fw-normal text-body-tertiary'>PLAN DETAILS</h4>
          </div>
          <div className='col-12 col-md-8 mb3'>
            <div className='row mt-3'>
              <div className='col-6'>
                <p className='fw-bold'>
                  Standard <i className='bi bi-badge-hd'></i>
                </p>
              </div>
              <div className='col-6 text-end'>
                <p>
                  <a href='javascript:void(0)'>Change plan</a>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className='row justify-content-between align-items-baseline mb-3'>
            <div className='col-12 col-md-3 mb-3'>
              <h4 className='fs-4 fw-normal text-body-tertiary'>SETTINGS</h4>
            </div>
            <div className='col-12 col-md-8 mb3'>
              <p>
                <a href='javascript:void(0)'>Parental Controls</a>
              </p>
              <p>
                <a href='javascript:void(0)'>Test Participation</a>
              </p>
              <p>
                <a href='javascript:void(0)'>Manage download devices</a>
              </p>
              <p>
                <a href='javascript:void(0)'>Activate a device</a>
              </p>
              <p>
                <a href='javascript:void(0)'>
                  Recent device streaming activity
                </a>
              </p>
              <p>
                <a href='javascript:void(0)'>Signout all devices</a>
              </p>
            </div>
          </div>
          <hr />
          <div className='row justify-content-between align-items-baseline mb-3'>
            <div className='col-12 col-md-3 mb-3'>
              <h4 className='fs-4 fw-normal text-body-tertiary'>MY PROFILE</h4>
            </div>
            <div className='col-12 col-md-8 mb3'>
              <div className='row align-items-center'>
                <div className='col-6'>
                  <p className='fw-bold'>
                    <img
                      src='../../public/assets/media/avatar.png'
                      style={{ width: '40px' }}
                      alt='avatarAccount'
                      id='avatar'
                    />
                    &nbsp;&nbsp;Epicoder #1
                  </p>
                </div>
                <div className='col-6 text-end'>
                  <p>
                    <a href='javascript:void(0)'>Manage Profiles</a>
                  </p>
                  <p>
                    <a href='javascript:void(0)'>Add profile email</a>
                  </p>
                </div>
              </div>

              <div className='row'>
                <div className='col-12 col-md-4'>
                  <p>
                    <a href='javascript:void(0)'>Language</a>
                  </p>
                  <p>
                    <a href='javascript:void(0)'>Playback settings</a>
                  </p>
                  <p>
                    <a href='javascript:void(0)'>Subtitle appearence</a>
                  </p>
                </div>
                <div className='col-12 col-md-4'>
                  <p>
                    <a href='javascript:void(0)'>Viewing activity</a>
                  </p>
                  <p>
                    <a href='javascript:void(0)'>Ratings</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MySettings;
