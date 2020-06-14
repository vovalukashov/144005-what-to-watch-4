import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const data = {
  name: `Сияние`,
  genre: `ужасы, триллер, драма, детектив`,
  releaseDate: `1980`,
};

ReactDOM.render(
    <App name={data.name} genre={data.genre} releaseDate={data.releaseDate} />,
    document.querySelector(`#root`)
);
