import { useState, useContext } from 'react';
import CountriesContext from "../../Contexts/CountriesContext";
import CitiesContext from "../../Contexts/StateContext";

const TestNavBar = ({
  SetSelectedCountry,
  SetSelectedState,
  SetSelectedCountryFlag
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCitiesDropdownOpen, setIsCitiesDropdownOpen] = useState(false);
  const [isCountriesDropdownOpen, setIsCountriesDropdownOpen] = useState(false);

  const { countries } = useContext(CountriesContext);
  const { States } = useContext(CitiesContext);

  // State to track the selected country
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Toggle collapse state
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  // Toggle dropdown state with added logic for dependent dropdowns
  const toggleCitiesDropdown = () => {
    setIsCitiesDropdownOpen(!isCitiesDropdownOpen);
    if (isCountriesDropdownOpen) setIsCountriesDropdownOpen(false);
  };

  const toggleCountriesDropdown = () => {
    setIsCountriesDropdownOpen(!isCountriesDropdownOpen);
    if (isCitiesDropdownOpen) setIsCitiesDropdownOpen(false);
  };

  // Handle country change
  const handleCountryChange = (e) => {
    let SelectedCountry = e.target.textContent;
    setSelectedCountry(SelectedCountry);  // Update selected country
    SetSelectedCountry(SelectedCountry);
    setIsCountriesDropdownOpen(false); // Close the dropdown after selection
  };

  // Handle city change
  const handleCityChange = (e) => {
    const unwantedTerms = /(governorate|region|province|district|prefecture|County)/i;
    let SelectedCity = e.target.textContent;
    SelectedCity = SelectedCity.replace(unwantedTerms, "").trim();
    SetSelectedState(SelectedCity);
    setIsCitiesDropdownOpen(false); // Close the dropdown after selection
  };

  // Display country list
  let CountriesList = countries.map((country) => (
    <a
      key={country.name.common}
      href="#"
      className="block py-2 px-3 text-gray-800 hover:bg-gray-100 flex items-center justify-between bg-gray-50"
      onClick={handleCountryChange}
    >
      <img src={country.flags.png} alt="Flag" className="h-4" />
      {country.name.common}
    </a>
  ));

  // Display city list
  let CitiesList = null;
  if (selectedCountry && States) {
    CitiesList = States.map((state) => (
      <a
        key={state.name}
        href="#"
        className="block py-2 px-3 text-gray-800 hover:bg-gray-100"
        onClick={handleCityChange}
      >
        {state.name}
      </a>
    ));
  } else {
    CitiesList = (
      <div className="block py-2 px-3 text-gray-800">
        Select a country first
      </div>
    );
  }

  return (
    <header style={{ position: 'relative' }} className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-black text-white text-sm py-3">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80" href="#" aria-label="Brand">
            <img src="/Images/ghiath.png" alt="Logo" className="h-14" />
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              onClick={toggleCollapse}
              aria-expanded={isCollapsed ? 'true' : 'false'}
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
            >
              <svg className={`hs-collapse-open:hidden shrink-0 size-4 ${isCollapsed ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg className={`hs-collapse-open:block hidden shrink-0 size-4 ${!isCollapsed ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-example"
          className={`transition-all duration-300 basis-full grow sm:block ${isCollapsed ? '' : 'hidden'}`}
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">

            {/* Countries Dropdown */}
            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
              <button
                id="hs-navbar-example-dropdown"
                type="button"
                className="hs-dropdown-toggle flex items-center w-full text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 font-medium"
                aria-haspopup="menu"
                aria-expanded={isCountriesDropdownOpen ? 'true' : 'false'}
                onClick={toggleCountriesDropdown}
              >
                Countries
                <svg className={`hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4 ${isCountriesDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                style={{ position: 'absolute', zIndex: '100', overflowY: 'scroll' }}
                className={`hs-dropdown-menu transition-all duration-300 ease-in-out ${isCountriesDropdownOpen ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95 hidden'} max-h-80 mt-2 rounded-lg`}
              >
                {CountriesList}
              </div>
            </div>

            {/* Cities Dropdown */}
            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
              <button
                id="hs-navbar-example-dropdown"
                type="button"
                className="hs-dropdown-toggle flex items-center w-full text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 font-medium"
                aria-haspopup="menu"
                aria-expanded={isCitiesDropdownOpen ? 'true' : 'false'}
                onClick={toggleCitiesDropdown}
              >
                Cities
                <svg className={`hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4 ${isCitiesDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                style={{ position: 'absolute', zIndex: '100', overflowY: 'scroll' }}
                className={`hs-dropdown-menu transition-all duration-300 ease-in-out bg-white text-black ${isCitiesDropdownOpen ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95 hidden '} max-h-80 mt-2 rounded-lg`}
              >
                {CitiesList}
              </div>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default TestNavBar;
