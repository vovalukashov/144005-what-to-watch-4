import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import MovieInfo from "../movie-info/movie-info.jsx";
import {ActionCreator} from "../../reducer/reducer.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleMovieCardClick = this.handleMovieCardClick.bind(this);
    this.state = {
      activeMovie: null,
    };
  }

  handleMovieCardClick(movie) {
    this.setState({
      activeMovie: movie
    });
  }

  _renderApp() {
    const {movies, genre, onGenreClick} = this.props;
    if (this.state.activeMovie) {
      return <MovieInfo movie={this.state.activeMovie} movies={movies} onMovieCardClick={this.handleMovieCardClick} />;
    }

    return <Main movies={movies} genre={genre} onGenreClick={onGenreClick} onMovieCardClick={this.handleMovieCardClick} />;
  }

  render() {
    const {movies} = this.props;
    return (

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path={`/dev-movie`}>
            <MovieInfo movie={movies[0]} movies={movies} onMovieCardClick={this.handleMovieCardClick}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  movies: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.getMovies(genre));
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
