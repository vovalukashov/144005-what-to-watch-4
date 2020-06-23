import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

const movie = {
  name: `Сияние`,
  image: `https://birdinflight.imgix.net/wp-content/uploads/2018/06/shining-sequel-movie_cover.jpg?fm=pjpg&q=70&fit=crop&crop=faces&w=630&h=446`,
};

const handleMovieCardEnter = jest.fn();
const handleMovieTitleClick = jest.fn();

describe(`MoviesList snapshot`, () => {
  it(`MoviesList renderer`, () => {
    const tree = renderer
      .create(<MovieCard movie={movie} onMovieCardEnter={handleMovieCardEnter} onMovieTitleClick={handleMovieTitleClick} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
