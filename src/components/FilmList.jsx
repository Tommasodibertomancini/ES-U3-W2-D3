import { Row, Col, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = 'http://www.omdbapi.com/?apikey=566ef110&s=';

const FilmList = (props) => {
  // state = {
  //   filmList: [],
  //   errorMessage: '',
  //   currentIndex: 0,
  //   filmsPerPage: 6,
  // };

  const [filmList, setFilmList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const errorBlock = (
    <Alert variant='danger' dismissible>
      <Alert.Heading>❌ You got an error!</Alert.Heading>
    </Alert>
  );

  const getFilmList = async () => {
    try {
      const response = await fetch(URL + props.query);
      if (response.ok) {
        const data = await response.json();
        //this.setState({ filmList: data.Search, isLoading: false });
        setFilmList(data.Search);
      } else {
        throw new Error("❌ Errore nella lettura dell'API");
      }
    } catch (error) {
      //this.setState({ errorMessage: error });
      setErrorMessage(error);
    }
  };

  const showMovieDetails = (movieId) => {
    navigate('/movie-details/' + movieId);
  };

  useEffect(() => {
    getFilmList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {props.isLoaded && errorMessage === '' && <h4>{props.title}</h4>}

      {props.isLoaded && errorMessage === '' && (
        <Row className='filmList mb-4'>
          {filmList.map((film, i) => {
            if (i < 6) {
              return (
                <Col
                  sm={6}
                  lg={3}
                  xl={2}
                  key={film.imdbID}
                  className='singleFilm mb-2 px-1'
                  onClick={() => {
                    showMovieDetails(film.imdbID);
                  }}
                >
                  <img
                    src={film.Poster}
                    alt={film.Title}
                    className='filmPoster'
                  />
                </Col>
              );
            }
          })}
        </Row>
      )}

      {props.isLoaded && errorMessage != '' && errorBlock}
    </>
  );
};

export default FilmList;
