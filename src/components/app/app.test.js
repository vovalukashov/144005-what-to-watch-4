import React from "react";
import renderer from "react-test-renderer";
import App from './app.jsx';

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

describe(`App snapshot`, () => {
  it(`App renderer`, () => {
    const tree = renderer
      .create(<App movies={movies}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
