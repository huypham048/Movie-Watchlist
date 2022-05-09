import React, { Component } from 'react';
import Container from './Container';

import Navbar from './Navbar';
import { movieSet } from '../movies';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WatchList from './Watchlist';

const App = () => {
  const [currentMovie, setCurrentMovie] = React.useState(
    movieSet[Math.floor(Math.random() * 300)]
  );

  const getMovie = () => {
    const newMovie = movieSet[Math.floor(Math.random() * 300)];
    setCurrentMovie(newMovie);
  };

  const addToList = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentMovie),
    };

    fetch('/api', requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Container
                getMovie={getMovie}
                randomMovie={currentMovie}
                addToList={addToList}
              />
            }
          ></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
