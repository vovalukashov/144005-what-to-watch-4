import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const handleFilmTitleClick = () => {};

const App = ({names}) => {
  return (
    <Main names={names} onFilmTitleClick={handleFilmTitleClick}/>
  );
};

App.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default App;
