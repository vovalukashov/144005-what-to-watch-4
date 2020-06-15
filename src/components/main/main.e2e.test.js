import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const films = {
  names: [`Сияние`, `Берегись автомобиля`, `Солярис`]
};

describe(`Main e2e`, () => {
  it(`Should film-title be pressed`, () => {
    const handleFilmTitleClick = jest.fn();

    const main = shallow(
        <Main names={films.names} onFilmTitleClick={handleFilmTitleClick} />
    );

    const filmTitles = main.find(`.small-movie-card__title`);
    filmTitles.forEach((filmTitle) => filmTitle.simulate(`click`));

    expect(handleFilmTitleClick).toHaveBeenCalledTimes(filmTitles.length);
  });
});
