import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: `overview`
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(tab, e) {
    e.preventDefault();
    this.setState({
      tabActive: tab
    });
  }
  renderReview(review) {
    const {textReview, authorReview, dateReview, ratingReview} = review;
    return (
      <div className="review" key={authorReview + dateReview}>
        <blockquote className="review__quote">
          <p className="review__text">{textReview}</p>
          <footer className="review__details">
            <cite className="review__author">{authorReview}</cite>
            <time className="review__date" dateTime="2016-12-24">{dateReview}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{ratingReview}</div>
      </div>
    );
  }
  render() {
    const {genre, release, rating, ratingText, ratingCount, text, director, starring, runTime, reviews} = this.props.movie;
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item ${this.state.tabActive === `overview` && `movie-nav__item--active`}`}>
              <a href="#" className="movie-nav__link" onClick={this.handleClick.bind(this, `overview`)}>Overview</a>
            </li>
            <li className={`movie-nav__item ${this.state.tabActive === `details` && `movie-nav__item--active`}`}>
              <a href="#" className="movie-nav__link" onClick={this.handleClick.bind(this, `details`)}>Details</a>
            </li>
            <li className={`movie-nav__item ${this.state.tabActive === `reviews` && `movie-nav__item--active`}`}>
              <a href="#" className="movie-nav__link" onClick={this.handleClick.bind(this, `reviews`)}>Reviews</a>
            </li>
          </ul>
        </nav>

        {this.state.tabActive === `overview` && (
          <>
            <div className="movie-rating">
              <div className="movie-rating__score">{rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{ratingText}</span>
                <span className="movie-rating__count">{ratingCount} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>{text}</p>

              <p className="movie-card__director"><strong>Director: {director}</strong></p>

              <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
            </div>
          </>
        )}
        {this.state.tabActive === `details` && (
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value" dangerouslySetInnerHTML={{__html: `${starring.join(`, <br/>`)}`}} />
              </p>
            </div>

            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">{runTime}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">{genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{release}</span>
              </p>
            </div>
          </div>
        )}
        {this.state.tabActive === `reviews` && (
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
              {reviews.map((review, i) => (i <= 2) && this.renderReview(review))}
            </div>
            <div className="movie-card__reviews-col">
              {reviews.map((review, i) => (i > 2 && i <= 4) && this.renderReview(review))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

Tabs.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    ratingText: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    poster: PropTypes.string.isRequired,
    overlay: PropTypes.string.isRequired,
    runTime: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired,
  }).isRequired,
};

export default Tabs;
