import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const films = {
  names: [`Сияние`, `Берегись автомобиля`, `Солярис`]
};

ReactDOM.render(
    <App names={films.names} />,
    document.querySelector(`#root`)
);
