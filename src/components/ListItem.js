import React from 'react';
import { Accordion } from 'react-bootstrap';

const ListItem = (props) => {
  const { title, overview, poster_path, vote_average, release_date } =
    props.randomMovie;
  return (
    <div className="col-4 ">
      <div className="card my-3 me-2" style={{ width: '20rem' }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="card-img-top img-list"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="card-text">
                Overview
              </Accordion.Header>
              <Accordion.Body>{overview}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <p className="card-text">{overview}</p> */}
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Release: {release_date}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Rating: 🎖{vote_average}</p>
          <button
            className="btn btn-primary mx-auto"
            onClick={props.handleClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
  // return <h1>Hello</h1>;
};

export default ListItem;
