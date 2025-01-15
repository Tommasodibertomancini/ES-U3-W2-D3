import { Component } from 'react';
import { Facebook, Instagram, TwitterX, Youtube } from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class MyFooter extends Component {
  render() {
    return (
      <footer className='container-fluid pb-4 footer'>
        <Row className='justify-content-center mt-5'>
          <Col className='col-6'>
            <Row>
              <Col className='mb-2'>
                <Facebook className='footer-icon me-2'></Facebook>
                <Instagram className='footer-icon me-2'></Instagram>
                <TwitterX className='footer-icon me-2'></TwitterX>
                <Youtube className='footer-icon'></Youtube>
              </Col>
            </Row>
            <Row xs={1} sm={2} md={4}>
              <Col>
                <Row>
                  <Col className='footer-links'>
                    <p>
                      <a href='#' alt='footer link'>
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a href='#' alt='footer link'>
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href='#' alt='footer link'>
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a href='#' alt='footer link'>
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className='footer-links'>
                    <p>
                      <a href='#' alt='footer link'>
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href='#' alt='footer link'>
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href='#' alt='footer link'>
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className='footer-links'>
                    <p>
                      <a href='#' alt='footer link'>
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href='#' alt='footer link'>
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href='#' alt='footer link'>
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className='footer-links'>
                    <p>
                      <a href='#' alt='footer link'>
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a href='#' alt='footer link'>
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href='#' alt='footer link'>
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className='mb-2'>
                <Button
                  type='button'
                  variant='outline-secondary'
                  size='sm'
                  className='footer-button rounded-0 mt-3'
                >
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className='mb-2 mt-2 copyright'>
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default MyFooter;
