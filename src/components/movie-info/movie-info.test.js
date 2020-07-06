import React from "react";
import renderer from "react-test-renderer";
import MovieInfo from "./movie-info.jsx";

const movie = {
  name: `Сияние`,
  genre: `Drama, Horror`,
  release: 1980,
  rating: 8.4,
  ratingText: `Very good`,
  ratingCount: 857784,
  text: `A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.`,
  director: `Stanley Kubrick`,
  starring: `Jack Nicholson, Shelley Duvall, Danny Lloyd`,
  image: `https://resizing.flixster.com/hfmSxiWV1FlY5vtodiys3hYXPic=/fit-in/200x296.2962962962963/v1.bTsxMTE2ODAzMjtqOzE4NTM0OzEyMDA7ODAwOzEyMDA`,
  poster: `https://images-na.ssl-images-amazon.com/images/I/81nwnHTcV2L._AC_SY679_.jpg`,
  overlay: `https://cdn.shopify.com/s/files/1/1416/8662/products/shining_1980_photobusta_6_original_film_art_2000x.jpg?v=1569118744`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

describe(`MovieInfo snapshot`, () => {
  it(`MovieInfo renderer`, () => {
    const tree = renderer
      .create(<MovieInfo movie={movie} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
