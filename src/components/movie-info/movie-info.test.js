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
    starring: [`Innocent Smoktunovsky`, `Oleg Efremov`, `Liubov Dobrzhanskaya`, `Anatoly Papanov`],
    image: `https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLEjL1jwN96kDrqosLwz4q1Zr35469CecN5KKHLkqpebEj4W3i`,
    poster: `https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/059f510a-1fc7-49a6-bd73-87dc11095516/x1000`,
    overlay: `https://upload.wikimedia.org/wikipedia/ru/0/04/1966_beregis_avtomobilya.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: `1h 34min`,
    reviews: [
      {
        textReview: `Great movie, with great golden cast. This film bifurcated me in two. The komunyaga and my personal capitalist fought in me. And it’s hard for me to say which of them won. I was worried about all the characters, they were all close to me and loved.`,
        authorReview: `Alail`,
        dateReview: `27 August 2018`,
        ratingReview: 9
      },
      {
        textReview: `This is not a film, but a phenomenon. It describes only a fraction of the whole paradox of Soviet life, which has echoed to us.`,
        authorReview: `Kessid`,
        dateReview: `28 May 2018 `,
        ratingReview: 9
      },
    ],
  },
];

describe(`MovieInfo snapshot`, () => {
  it(`MovieInfo renderer`, () => {
    const handleMovieCardClick = jest.fn();
    const tree = renderer
      .create(<MovieInfo movie={movie} movies={movies} onMovieCardClick={handleMovieCardClick} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
