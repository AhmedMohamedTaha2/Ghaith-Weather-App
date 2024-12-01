import { useState, useContext } from 'react';
import CountriesContext from "../../Contexts/CountriesContext";
import CitiesContext from "../../Contexts/StateContext";
import { withTranslation } from 'react-i18next';
import { IoCloseSharp, IoMenu } from "react-icons/io5";

import { t } from 'i18next';


const NavbarComponent = ({
  SetSelectedCountry,
  SetSelectedState,
  SetLanguage
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);  

  const [selectedCountry, setSelectedCountry] = useState(null);

  const { countries } = useContext(CountriesContext);
  const { States } = useContext(CitiesContext);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const handleCountryChange = (e) => {
    const SelectedCountry = e.target.textContent;
    setSelectedCountry(SelectedCountry);
    SetSelectedCountry(SelectedCountry);
    setActiveDropdown(null);  
  };

  const handleCityChange = (e) => {
    const unwantedTerms = /(governorate|region|province|district|prefecture|County|Department|Parish|)/i;
    let SelectedCity = e.target.textContent;
    SelectedCity = SelectedCity.replace(unwantedTerms, "").trim();
    SetSelectedState(SelectedCity);
    setActiveDropdown(null); 
  };

  const handleLanguageChange = (languageCode) => {
    SetLanguage(languageCode);
    setActiveDropdown(null);  
  };

  let CountriesList = countries.map((country) => (
    <a
      key={country.name.common}
      href="#"
      className="block py-2 px-3 text-black hover:bg-gray-100 flex flex-row justify-between items-center"
      onClick={handleCountryChange}
    >
      <img src={country.flags.png} alt="Flag" className="h-4" />
      {country.name.common}
    </a>
  ));

  let CitiesList = null;
  if (selectedCountry && States) {
    CitiesList = States.map((state) => (
      <a
        key={state.name}
        href="#"
        className="block py-2 px-3 text-black hover:bg-gray-100"
        onClick={handleCityChange}
      >
        {state.name}
      </a>
    ));
  } else {
    CitiesList = (
      <div className="block py-2 px-3 text-black">
        Select a country first
      </div>
    );
  }

  return (
    <header style={{ position: 'relative' }} className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-black text-white text-sm py-3">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80" href="#" aria-label="Brand">
          <img src={`${process.env.PUBLIC_URL}/${t('img url')}`} alt="Logo" className="h-14" />
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
  {isCollapsed ? (
    <IoCloseSharp className="shrink-0 size-4" />
  ) : (
    <IoMenu className="shrink-0 size-4" />
  )}

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
            {/* Language dropdown list */}
            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
              <button
                id="hs-navbar-example-dropdown"
                type="button"
                className="hs-dropdown-toggle flex items-center w-full text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 font-medium"
                aria-haspopup="menu"
                aria-expanded={activeDropdown === 'language' ? 'true' : 'false'}
                onClick={() => setActiveDropdown(activeDropdown === 'language' ? null : 'language')}
              >
                {t('Language')}
                <svg className={`hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4 ${activeDropdown === 'language' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                style={{ position: 'absolute', zIndex: '100', overflowY: 'scroll' }}
                className={`hs-dropdown-menu p-2 transition-all duration-300 ease-in-out ${activeDropdown === 'language' ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95 hidden'} max-h-80 mt-2 rounded-lg bg-white text-black`}
              >
                <a
                  href="#"
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                  onClick={() => handleLanguageChange('ar')}
                >
                  Arabic
                </a>
                <a
                  href="#"
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                </a>
                <a
                  href="#"
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                  onClick={() => handleLanguageChange('ru')}
                >
                  Russian
                </a>
                <a
                  href="#"
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                  onClick={() => handleLanguageChange('zh')}
                >
                  Chinese
                </a>
                <a
                  href="#"
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                  onClick={() => handleLanguageChange('es')}
                >
                  Spanish
                </a>
                <a
                  href="#"
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                  onClick={() => handleLanguageChange('fr')}
                >
                  French
                </a>
              </div>
            </div>

            {/* Countries dropdown list */}
            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
              <button
                id="hs-navbar-example-dropdown"
                type="button"
                className="hs-dropdown-toggle flex items-center w-full text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 font-medium"
                aria-haspopup="menu"
                aria-expanded={activeDropdown === 'country' ? 'true' : 'false'}
                onClick={() => setActiveDropdown(activeDropdown === 'country' ? null : 'country')}
              >
                {t('Country')}
                <svg className={`hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4 ${activeDropdown === 'country' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                style={{ position: 'absolute', zIndex: '100', overflowY: 'scroll' }}
                className={`hs-dropdown-menu transition-all p-2 duration-300 ease-in-out ${activeDropdown === 'country' ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95 hidden'} max-h-80 mt-2 rounded-lg bg-white text-black`}
              >
                {CountriesList}
              </div>
            </div>

            {/* Cities dropdown list */}
            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
              <button
                type="button"
                className="hs-dropdown-toggle flex items-center w-full text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 font-medium"
                aria-haspopup="menu"
                aria-expanded={activeDropdown === 'city' ? 'true' : 'false'}
                onClick={() => setActiveDropdown(activeDropdown === 'city' ? null : 'city')}
              >
                {t('City')}
                <svg className={`hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4 ${activeDropdown === 'city' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                style={{ position: 'absolute', zIndex: '100', overflowY: 'scroll' }}
                className={`hs-dropdown-menu p-2 transition-all duration-300 ease-in-out ${activeDropdown === 'city' ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95 hidden'} max-h-80 mt-2 rounded-lg bg-white text-black`}
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

export default NavbarComponent;
