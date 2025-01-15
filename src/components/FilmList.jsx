import { Component } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'; 

const URL = 'http://www.omdbapi.com/?apikey=566ef110&s=';

class FilmList extends Component {
  state = {
    filmList: [],
    errorMessage: '',
    currentIndex: 0, 
    filmsPerPage: 6,
  };

  errorBlock = (
    <Alert variant='danger' dismissible>
      <Alert.Heading>❌ You got an error!</Alert.Heading>
    </Alert>
  );

  getFilmList = async () => {
    try {
      const response = await fetch(URL + this.props.query);
      if (response.ok) {
        const data = await response.json();
        this.setState({ filmList: data.Search, isLoading: false });
      } else {
        throw new Error("❌ Errore nella lettura dell'API");
      }
    } catch (error) {
      this.setState({ errorMessage: error });
    }
  };

  componentDidMount() {
    this.getFilmList();
  }

  handleNext = () => {
    const { filmList, currentIndex, filmsPerPage } = this.state;
    const totalFilms = filmList.length;
    if (currentIndex + filmsPerPage < totalFilms) {
      this.setState((prevState) => ({ currentIndex: prevState.currentIndex + filmsPerPage }));
    }
  };

  handlePrevious = () => {
    const { currentIndex, filmsPerPage } = this.state;
    if (currentIndex - filmsPerPage >= 0) {
      this.setState((prevState) => ({ currentIndex: prevState.currentIndex - filmsPerPage }));
    }
  };

  render() {
    const { filmList, currentIndex, filmsPerPage } = this.state;
    const currentFilms = filmList.slice(currentIndex, currentIndex + filmsPerPage);

    return (
      <>
        {this.props.isLoaded && this.state.errorMessage === '' && (
          <>
          <h4 className='text-light'>{this.props.title}</h4>
            <Row className='filmList mb-4'>
              <div className="d-flex overflow-auto position-relative">
                <div
                  className="position-absolute top-50 start-0 translate-middle-y"
                  style={{ left: '10px', zIndex: 10 }}
                  onClick={this.handlePrevious}
                  role="button"
                >
                  <ChevronLeft size={30} color="white" />
                </div>
                
                {currentFilms.map((film) => (
                  <Col
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                    key={film.imdbID}
                    className='singleFilm mb-2 px-1'
                  >
                    <img
                      src={film.Poster}
                      alt={film.Title}
                      className='filmPoster'
                    />
                  </Col>
                ))}

                <div
                  className="position-absolute top-50 end-0 translate-middle-y"
                  style={{ right: '10px', zIndex: 10 }}
                  onClick={this.handleNext}
                  role="button"
                >
                  <ChevronRight size={30} color="white" />
                </div>
              </div>
            </Row>
          </>
        )}

        {this.props.isLoaded &&
          this.state.errorMessage !== '' &&
          this.errorBlock}
      </>
    );
  }
}

export default FilmList;