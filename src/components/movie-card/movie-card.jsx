import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter() {
    const {movie, onMovieCardEnter} = this.props;
    onMovieCardEnter(movie);
  }

  render() {
    const {movie, onMovieTitleClick} = this.props;
    const {name, image} = movie;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this.handleMouseEnter}>
        <div className="small-movie-card__image">
          <img src={image} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
        </div>
        <h3 className="small-movie-card__title" onClick={onMovieTitleClick}>
          <a className="small-movie-card__link" href="movie-page.html">{name}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onMovieCardEnter: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default MovieCard;
