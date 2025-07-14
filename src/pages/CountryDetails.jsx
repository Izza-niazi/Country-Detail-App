import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CountryDetails = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        const countryData = response.data[0];
        setCountry(countryData);

        if (countryData.borders) {
          const borderCountriesData = await Promise.all(
            countryData.borders.map(async (border) => {
              const res = await axios.get(
                `https://restcountries.com/v3.1/alpha/${border}`
              );
              return res.data[0].name.common;
            })
          );
          setBorderCountries(borderCountriesData);
        }
      } catch (error) {
        console.error("Error loading country details:", error);
      }
    };

    fetchCountryDetails();
  }, [name]);

  if (!country) return <div>Loading...</div>;

  return (
    <div className="country-details-container">
      {/* back button */}
      <Link to="/" className="fancy-back-button">
        <span>←</span> Back
      </Link>

      <div className="detail-layout">
        {/* Flag */}
        <div className="flag-container">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="country-flag"
          />
        </div>

        {/* Right container */}
        <div className="detail-info">
          <h2>{country.name.common}</h2>

          {/* info columns */}
          <div className="info-columns">
            <div className="column">
              <p>
                <strong>Native Name:</strong>{" "}
                {country.name.nativeName?.[
                  Object.keys(country.name.nativeName)[0]
                ]?.common || "N/A"}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population?.toLocaleString() || "N/A"}
              </p>
              <p>
                <strong>Region:</strong> {country.region || "N/A"}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
              </p>
            </div>

            <div className="column">
              <p>
                <strong>Top Level Domain:</strong> {country.tld?.[0] || "N/A"}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {country.currencies
                  ? Object.values(country.currencies)
                      .map((curr) => curr.name)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>

          {/* border countries */}
          <div className="borders-section">
            <p>
              <strong>Border Countries:</strong>
            </p>
            <div className="border-countries">
              {borderCountries.length > 0 ? (
                borderCountries.map((border, index) => (
                  <Link
                    to={`/country/${border.toLowerCase()}`}
                    key={index}
                    className="border-link"
                  >
                    {border}
                  </Link>
                ))
              ) : (
                <span>No neighboring countries found</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
