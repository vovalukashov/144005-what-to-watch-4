import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class GenresList extends PureComponent {
  constructor(props) {
    super(props);
    const {movies} = props;
    this.genres = Array.from(new Set(movies.reduce((accumulator, movie) => {
      accumulator = accumulator.concat(movie.genre.split(`, `));
      return accumulator;
    }, [`All genres`])));
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(genre, e) {
    e.preventDefault();
    const {onGenreClick} = this.props;
    onGenreClick(genre);
  }
  render() {
    const {genre} = this.props;
    return (
      <ul className="catalog__genres-list">
        {this.genres.map((currentGenre) => (
          <li className={`catalog__genres-item ${genre === currentGenre ? `catalog__genres-item--active` : ``}`} key={currentGenre} onClick={this.handleClick.bind(this, currentGenre)}>
            <a href="#" className="catalog__genres-link">{currentGenre}</a>
          </li>
        ))}
      </ul>
    );
  }
}

GenresList.propTypes = {
  movies: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default GenresList;
