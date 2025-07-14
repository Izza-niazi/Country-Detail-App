import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, population, region, capital }) => {
  return (
    <Link to={`/country/${name}`} className="country-card">
      <img src={flag} alt={`Flag of ${name}`} className="country-flag" />
      <div className="card-body">
        <h3>{name}</h3>
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
