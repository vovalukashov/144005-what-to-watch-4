import React from "react";
import Enzime, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

Enzime.configure({
  adapter: new Adapter()
});

const movie = {
  name: `Сияние`,
  genre: `Drama, Horror`,
  release: 1980,
  rating: 8.4,
  ratingText: `Very good`,
  ratingCount: 857784,
  text: `A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.`,
  director: `Stanley Kubrick`,
  starring: [`Jack Nicholson`, `Shelley Duvall`, `Danny Lloyd`],
  image: `https://resizing.flixster.com/hfmSxiWV1FlY5vtodiys3hYXPic=/fit-in/200x296.2962962962963/v1.bTsxMTE2ODAzMjtqOzE4NTM0OzEyMDA7ODAwOzEyMDA`,
  poster: `https://images-na.ssl-images-amazon.com/images/I/81nwnHTcV2L._AC_SY679_.jpg`,
  overlay: `https://cdn.shopify.com/s/files/1/1416/8662/products/shining_1980_photobusta_6_original_film_art_2000x.jpg?v=1569118744`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  runTime: `2h 26min`,
  reviews: [
    {
      textReview: `Even though The Shining is over a quarter of a century old, I challenge anyone to not get freaked out by Jack Nicholson's descent into madness. This is a rare example of something so unique that no one has been able to rip it off; instead it has been referenced time and again in pop culture.`,
      authorReview: `yancyscott1`,
      dateReview: `9 April 2007`,
      ratingReview: 9
    },
    {
      textReview: `Chilling, majestic piece of cinematic fright, this film combines all the great elements of an intellectual thriller, with the grand vision of a director who has the instinctual capacity to pace a moody horror.`,
      authorReview: `FlickJunkie`,
      dateReview: `24 July 2001`,
      ratingReview: 9
    },
  ],
};

describe(`MovieCard e2e`, () => {
  const handleMovieCardEnter = jest.fn();
  const handleMovieCardLeave = jest.fn();
  const handleMovieCardClick = jest.fn();
  it(`should the data be passed by card mouse enter?`, () => {
    const movieCard = shallow(
        <MovieCard movie={movie} onMovieCardEnter={handleMovieCardEnter} onMovieCardLeave={handleMovieCardLeave} onMovieCardClick={handleMovieCardClick} />
    );

    const movieCardParent = movieCard.find(`.small-movie-card`);
    movieCardParent.simulate(`mouseenter`, movie);

    expect(handleMovieCardEnter).toHaveBeenCalledTimes(1);
    expect(handleMovieCardEnter.mock.calls[0][0]).toMatchObject(movie);
  });

  it(`should the data be passed by card mouse leave?`, () => {
    const movieCard = shallow(
        <MovieCard movie={movie} onMovieCardEnter={handleMovieCardEnter} onMovieCardLeave={handleMovieCardLeave} onMovieCardClick={handleMovieCardClick} />
    );

    const movieCardParent = movieCard.find(`.small-movie-card`);
    movieCardParent.simulate(`mouseleave`);

    expect(handleMovieCardEnter).toHaveBeenCalledTimes(1);
  });

  it(`should the data be passed by card click?`, () => {
    const movieCard = shallow(
        <MovieCard movie={movie} onMovieCardEnter={handleMovieCardEnter} onMovieCardLeave={handleMovieCardLeave} onMovieCardClick={handleMovieCardClick} />
    );

    const movieCardParent = movieCard.find(`.small-movie-card`);
    movieCardParent.simulate(`click`);

    expect(handleMovieCardClick).toHaveBeenCalledTimes(1);
    expect(handleMovieCardClick.mock.calls[0][0]).toMatchObject(movie);
  });
});


