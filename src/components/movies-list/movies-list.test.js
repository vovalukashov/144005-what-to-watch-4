import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const movies = [
  {
    name: `Сияние`,
    image: `https://birdinflight.imgix.net/wp-content/uploads/2018/06/shining-sequel-movie_cover.jpg?fm=pjpg&q=70&fit=crop&crop=faces&w=630&h=446`,
  },
  {
    name: `Берегись автомобиля`,
    image: `https://birdinflight.imgix.net/wp-content/uploads/2018/06/shining-sequel-movie_cover.jpg?fm=pjpg&q=70&fit=crop&crop=faces&w=630&h=446`,
  },
  {
    name: `Солярис`,
    image: `https://birdinflight.imgix.net/wp-content/uploads/2018/06/shining-sequel-movie_cover.jpg?fm=pjpg&q=70&fit=crop&crop=faces&w=630&h=446`,
  }
];

const handleMovieCardEnter = jest.fn();
const handleMovieTitleClick = jest.fn();

describe(`MoviesList snapshot`, () => {
  it(`MoviesList renderer`, () => {
    const tree = renderer
      .create(<MoviesList movies={movies} onMovieCardEnter={handleMovieCardEnter} onMovieTitleClick={handleMovieTitleClick} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
