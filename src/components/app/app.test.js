import React from "react";
import renderer from "react-test-renderer";
import App from './app.jsx';

const films = {
  names: [`Сияние`, `Берегись автомобиля`, `Солярис`]
};

describe(`App snapshot`, () => {
  it(`App renderer`, () => {
    const tree = renderer
      .create(<App names={films.names}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
