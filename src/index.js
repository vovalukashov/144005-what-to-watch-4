import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import moviesMocks from "./mocks/movies.js";
import {reducer} from "./reducer.js";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App movies={moviesMocks} />
    </Provider>,
    document.querySelector(`#root`)
);
