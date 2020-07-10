import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class GenresList extends PureComponent {
  constructor(props) {
    super(props);
    const {movies} = props;
    this.genres = Array.from(new Set(movies.reduce((accumulator, movie) => {
      accumulator = accumulator.concat(movie.genre.split(', '));
      return accumulator;
    }, ['All genres'])));
    this.hendleClick = this.hendleClick.bind(this);
  }
  hendleClick(genre) {
    const {onGenreClick} = this.props;
    onGenreClick(genre);
  }
  render() {
    const {activeGenre} = this.props;
    return (
      <ul className="catalog__genres-list">
        {this.genres.map((genre) => (
          <li className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`} key={genre} onClick={this.hendleClick.bind(this, genre)}>
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default GenresList;
