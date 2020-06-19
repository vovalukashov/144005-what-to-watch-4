import React from "react";
import renderer from "react-test-renderer";
import Main from './main.jsx';

const films = {
  names: [`Сияние`, `Берегись автомобиля`, `Солярис`]
};

const handleFilmTitleClick = () => {};

describe(`Main snapshot`, () => {
  it(`Main renderer`, () => {
    const tree = renderer
      .create(<Main names={films.names} onFilmTitleClick={handleFilmTitleClick}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
