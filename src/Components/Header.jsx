import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <div className="header">
      <h1>Where in the world?</h1>
      <DarkModeToggle />
    </div>
  );
};

export default Header;
