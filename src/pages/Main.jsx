import React, { useState } from "react";
import Header from "../Components/Header";
import Home from "./Home";

const Main = () => {
  const [searchCountries, setSearchCountries] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [showRegions, setShowRegions] = useState(false); // Region dropdown visibility

  const toggleDropDown = () => setShowRegions(!showRegions);

  return (
    <div className="main-container">
      <Header />

      <Home
        searchCountries={searchCountries}
        setSearchCountries={setSearchCountries}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        showRegions={showRegions}
        toggleDropDown={toggleDropDown}
      />
    </div>
  );
};

export default Main;
