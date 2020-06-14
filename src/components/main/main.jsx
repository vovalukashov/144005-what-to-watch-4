import React from "react";

// eslint-disable-next-line react/prop-types
const Main = ({name, genre, releaseDate}) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{genre}</p>
      <p>{releaseDate}</p>
    </>
  );
};

export default Main;
