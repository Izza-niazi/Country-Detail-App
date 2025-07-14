import { IoIosArrowDown } from "react-icons/io";

const FilterButton = ({
  selectedRegion,
  setSelectedRegion,
  showRegions,
  toggleDropDown,
}) => {
  return (
    <div className="filter-wrapper">
      <button onClick={toggleDropDown} type="button" className="filter-button">
        <span>{selectedRegion ? selectedRegion : "Filter by Region"}</span>
        <IoIosArrowDown className="dropdown-icon" />{" "}
      </button>

      {showRegions && (
        <ul className="dropdown-menu">
          <li
            onClick={() => {
              setSelectedRegion("");
              toggleDropDown();
            }}
            className="dropdown-item"
          >
            All
          </li>
          {["Africa", "Asia", "Europe", "Americas", "Oceania", "Antarctic"].map(
            (region) => (
              <li
                key={region}
                onClick={() => {
                  setSelectedRegion(region);
                  toggleDropDown();
                }}
                className="dropdown-item"
              >
                {region}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default FilterButton;
