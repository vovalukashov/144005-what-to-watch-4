import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseEnter() {
    const {movie, onMovieCardEnter} = this.props;
    onMovieCardEnter(movie);
  }

  handleMouseLeave() {
    const {onMovieCardLeave} = this.props;
    onMovieCardLeave();
  }

  handleClick() {
    const {movie, onMovieCardClick} = this.props;
    onMovieCardClick(movie);
  }

  render() {
    const {movie, activeMovie} = this.props;
    const {name, image, preview} = movie;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleClick}>
        <div className="small-movie-card__image">
          <VideoPlayer isPlaying={movie === activeMovie} src={preview} poster={image} muted timeout={1000} style={{objectFit: `cover`, width: `280px`, height: `175px`}}/>
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
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  activeMovie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  onMovieCardEnter: PropTypes.func.isRequired,
  onMovieCardLeave: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default MovieCard;
