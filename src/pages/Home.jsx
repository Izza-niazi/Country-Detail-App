// src/pages/Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";

import CountryCard from "../Components/CountryCard";
import FilterButton from "../Components/FilterButton";

const Home = ({
  searchCountries,
  setSearchCountries,
  selectedRegion,
  setSelectedRegion,
  showRegions,
  toggleDropDown,
}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population"
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchSearch = country.name.common
      .toLowerCase()
      .includes(searchCountries.toLowerCase());
    const matchRegion = selectedRegion
      ? country.region === selectedRegion
      : true;
    return matchSearch && matchRegion;
  });

  return (
    <div className="home-container">
      <div className="top-bar">
        <div className="search-wrapper">
          <input
            type="text"
            value={searchCountries}
            onChange={(e) => setSearchCountries(e.target.value)}
            className="search-input"
            placeholder="Search for a country..."
          />
        </div>

        <FilterButton
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          showRegions={showRegions}
          toggleDropDown={toggleDropDown}
        />
      </div>

      <div className="country-list">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.png}
            region={country.region}
            capital={country.capital?.[0] || "N/A"}
            population={country.population}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
