import React from 'react';
import { Container } from 'react-bootstrap';
import ListItem from './ListItem';

const WatchList = () => {
  const [movieList, setMovieList] = React.useState([]);
  const [fetchState, setFetchState] = React.useState(false);

  React.useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    fetch('/api')
      .then((res) => res.json())
      .then((result) => {
        const newResult = [...movieList, ...result];
        setMovieList(newResult);
        setFetchState(true);
      });
  }

  function handleClick(value) {
    const target = movieList[value];

    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(target),
    };
    // //send selected movie to db to delete
    fetch('/api', requestOptions)
      .then((res) => res.json())
      .then((json) => {
        setMovieList((prevMovieList) => {
          return prevMovieList.filter((movie) => {
            return movie._id !== target._id;
          });
        });
        // })});
      })
      .catch((err) => console.log(err));
  }

  // this.refs.list.forceUpdate();

  return (
    <div className="container">
      <div className="row ">
        {fetchState &&
          movieList.map((movie, index) => {
            return (
              <ListItem
                randomMovie={movie}
                key={index}
                handleClick={() => handleClick(index)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default WatchList;
