import React from "react";
import renderer from "react-test-renderer";
import Main from './main.jsx';

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

const handleMovieTitleClick = jest.fn();

describe(`Main snapshot`, () => {
  it(`Main renderer`, () => {
    const tree = renderer
      .create(<Main movies={movies} onMovieTitleClick={handleMovieTitleClick} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
