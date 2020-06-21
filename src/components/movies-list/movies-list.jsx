import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCard: null
    };
    this.handleMovieCardEnter = this.handleMovieCardEnter.bind(this);
  }

  handleMovieCardEnter(movie) {
    this.setState({activeMovieCard: movie});
  }

  render() {
    const {movies, onMovieCardClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies && movies.map((movie) => <MovieCard movie={movie} onMovieCardClick={onMovieCardClick} onMovieCardEnter={this.handleMovieCardEnter} key={movie.name} />
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

