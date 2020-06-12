import React from "react";
import Main from "../main/main.jsx";

// eslint-disable-next-line react/prop-types
const App = ({name, genre, releaseDate}) => {

  return (
    <Main name={name} genre={genre} releaseDate={releaseDate}/>
  );
};

export default App;
