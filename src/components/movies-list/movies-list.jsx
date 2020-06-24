import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: null
    };
    this.handleMovieCardEnter = this.handleMovieCardEnter.bind(this);
    this.handleMovieCardLeave = this.handleMovieCardLeave.bind(this);
  }

  handleMovieCardEnter(movie) {
    this.setState({activeMovie: movie});
  }
  handleMovieCardLeave() {
    this.setState({activeMovie: null});
  }

  render() {
    const {movies, onMovieCardClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies && movies.map((movie) => <MovieCard movie={movie} activeMovie={this.state.activeMovie} onMovieCardClick={onMovieCardClick} onMovieCardEnter={this.handleMovieCardEnter} onMovieCardLeave={this.handleMovieCardLeave} key={movie.name} />
        )}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default MoviesList;

