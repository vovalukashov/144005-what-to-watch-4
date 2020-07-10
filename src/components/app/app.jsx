import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MovieInfo from "../movie-info/movie-info.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleMovieCardClick = this.handleMovieCardClick.bind(this);
    this.state = {
      activeMovie: null
    };
  }

  handleMovieCardClick(movie) {
    this.setState({
      activeMovie: movie
    });
  }

  _renderApp() {
    const {movies} = this.props;
    if (this.state.activeMovie) {
      return <MovieInfo movie={this.state.activeMovie} movies={movies} onMovieCardClick={this.handleMovieCardClick} />;
    }

    return <Main movies={movies} onMovieCardClick={this.handleMovieCardClick} />;
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
  movies: PropTypes.array.isRequired
};

export default App;
