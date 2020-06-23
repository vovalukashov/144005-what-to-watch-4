import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = ({movies}) => {
  const handleMovieTitleClick = () => {};

  return (
    <Main movies={movies} onMovieTitleClick={handleMovieTitleClick} />
  );
};

App.propTypes = {
  movies: PropTypes.array.isRequired
};

export default App;
