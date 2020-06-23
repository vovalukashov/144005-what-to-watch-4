import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import moviesMocks from "./mocks/movies.js";

ReactDOM.render(
    <App movies={moviesMocks} />,
    document.querySelector(`#root`)
);
