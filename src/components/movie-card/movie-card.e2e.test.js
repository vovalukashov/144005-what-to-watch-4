import React from "react";
import Enzime, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

Enzime.configure({
  adapter: new Adapter()
});

const movie = {
  name: `Сияние`,
  image: `https://birdinflight.imgix.net/wp-content/uploads/2018/06/shining-sequel-movie_cover.jpg?fm=pjpg&q=70&fit=crop&crop=faces&w=630&h=446`,
};

const handleMovieCardEnter = jest.fn();
const handleMovieTitleClick = jest.fn();

describe(`MovieCard e2e`, () => {
  it(`should data be handed mouse enter?`, () => {
    const movieCard = shallow(
        <MovieCard movie={movie} onMovieCardEnter={handleMovieCardEnter} onMovieTitleClick={handleMovieTitleClick} />
    );

    const movieCardParent = movieCard.find(`.small-movie-card`);
    movieCardParent.simulate(`mouseenter`, movie);

    expect(handleMovieCardEnter).toHaveBeenCalledTimes(1);
    expect(handleMovieCardEnter.mock.calls[0][0]).toMatchObject(movie);
  });

  it(`should film-title be pressed`, () => {
    const movieCard = shallow(
        <MovieCard movie={movie} onMovieCardEnter={handleMovieCardEnter} onMovieTitleClick={handleMovieTitleClick} />
    );

    const movieCardTitle = movieCard.find(`.small-movie-card__title`);
    movieCardTitle.simulate(`click`);

    expect(handleMovieTitleClick).toHaveBeenCalledTimes(1);
  });
});


