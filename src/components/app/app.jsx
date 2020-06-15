import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = ({names}) => {
  return (
    <Main names={names}/>
  );
};

App.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default App;
