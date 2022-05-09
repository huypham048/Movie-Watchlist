import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand drawing" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              focusable="false"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 16a6 6 0 006-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 006 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
          <h2 className="text-white py-1 popcorn">🍿 👀 🍿</h2>

          <Link to="/watchlist " className="btn btn-warning text-white fw-bold">
            Watchlist
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
