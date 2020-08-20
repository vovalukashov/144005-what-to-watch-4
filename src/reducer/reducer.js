import {extend} from "../utils.js";
import movies from "../mocks/movies.js";

const initialState = {
  genre: `All genres`,
  movies
};

const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  GET_GENRE_MOVIES: `GET_GENRE_MOVIES`,
};

const ActionCreator = {
  setGenre: (genre) => {
    return {
      type: ActionType.CHANGE_FILTER_GENRE,
      payload: genre
    };
  },
  getMovies: (genre) => {
    return {
      type: ActionType.GET_GENRE_MOVIES,
      payload: genre !== `All genres` ? movies.filter((moviesItem) => moviesItem.genre.includes(genre)) : movies
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE:
      return extend(state, {
        genre: action.payload,
      });
    case ActionType.GET_GENRE_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
