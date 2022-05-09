import React from 'react';
import { movieSet } from '../movies';
import { Accordion } from 'react-bootstrap';

const Container = (props) => {
  const { title, overview, poster_path, vote_average, release_date } =
    props.randomMovie;
  return (
    <div className="card mx-auto my-3" style={{ width: '25rem' }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        className="card-img-top "
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="card-text">Overview</Accordion.Header>
            <Accordion.Body>{overview}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* <p className="card-text">{overview}</p> */}
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Release: {release_date}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Rating: 🎖{vote_average}</p>

        <div className="btn-group">
          <button
            className="btn btn-primary fw-bold text-white"
            onClick={props.getMovie}
          >
            Next
          </button>
          <a
            className="btn btn-secondary fw-bold text-white ms-2 btn-add"
            onClick={props.addToList}
          >
            Add
          </a>
        </div>
      </div>
    </div>
  );
};

export default Container;
