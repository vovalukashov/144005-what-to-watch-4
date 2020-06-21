import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseEnter() {
    const {movie, onMovieCardEnter} = this.props;
    onMovieCardEnter(movie);
  }

  handleClick() {
    const {movie, onMovieCardClick} = this.props;
    onMovieCardClick(movie);
  }

  render() {
    const {movie} = this.props;
    const {name, image} = movie;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this.handleMouseEnter} onClick={this.handleClick}>
        <div className="small-movie-card__image">
          <img src={image} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
        </div>
        <h3 className="small-movie-card__title">
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
  onMovieCardClick: PropTypes.func.isRequired,
};

export default MovieCard;
