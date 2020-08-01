import React from "react";
import Enzime, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresList from "./genres-list.jsx";

Enzime.configure({
  adapter: new Adapter()
});

const movies = [
  {
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
  },
  {
    name: `Берегись автомобиля`,
    genre: `Drama, Comedy`,
    release: 1966,
    rating: 8.2,
    ratingText: `Very good`,
    ratingCount: 116743,
    text: `This amazing story may well be considered fantastic. A humble and shy insurance agent, amateur theater actor Yuri Detochkin is an implacable fighter for justice.`,
    director: `Eldar Ryazanov`,
    starring: `Innocent Smoktunovsky, Oleg Efremov, Liubov Dobrzhanskaya, Anatoly Papanov`,
    image: `https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLEjL1jwN96kDrqosLwz4q1Zr35469CecN5KKHLkqpebEj4W3i`,
    poster: `https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/059f510a-1fc7-49a6-bd73-87dc11095516/x1000`,
    overlay: `https://upload.wikimedia.org/wikipedia/ru/0/04/1966_beregis_avtomobilya.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
];
const genre = `All genres`;
const e = {preventDefault: () => {}};

describe(`GenresList e2e`, () => {
  it(`should the data be passed by genre click?`, () => {
    const onGenreClick = jest.fn();
    const genresList = shallow(
        <GenresList movies={movies} genre={genre} onGenreClick={onGenreClick} />
    );

    const genreItems = genresList.find(`.catalog__genres-item`);
    genreItems.forEach((genreItem) => genreItem.simulate(`click`, e, genre));

    expect(onGenreClick).toHaveBeenCalledTimes(genreItems.length);
    expect(onGenreClick.mock.calls[0][0]).toMatch(genre);
  });

  it(`should active class be added by genre click?`, () => {
    const onGenreClick = jest.fn();
    const genresList = shallow(
        <GenresList movies={movies} genre={genre} onGenreClick={onGenreClick} />
    );

    const genreItem = genresList.find(`.catalog__genres-item`).first();
    genreItem.simulate(`click`, e);

    expect(onGenreClick).toHaveBeenCalledTimes(1);
    expect(genreItem.hasClass(`catalog__genres-item--active`)).toBe(true);
  });
});


