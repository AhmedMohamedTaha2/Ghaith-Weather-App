import "./App.css";
// Imported from React
import { useEffect, useState } from "react";
// Imported Created Components
import NavbarComponent from "./Components/NavBar/NavbarComponent";
import ContainerComponent from "./Components/Container";
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import SelectedLocationContext from "./Contexts/SelectedLocationContext";
import WeatherContext from "./Contexts/WeatherContext";
// Imported Contexts
import CountriesContext from "./Contexts/CountriesContext";
import CitiesContext from "./Contexts/StateContext";
// External Packages
import axios from "axios";
import "../node_modules/preline/dist/preline";
import moment from "moment";
import { useTranslation } from 'react-i18next';
import TestNavBar from "./Components/NavBar/TestNavBar";



// ===========================================================================================
function App() {

  

  const { t, i18n } = useTranslation();



  const [countries, setCountries] = useState([]);
  const [SelectedCountry, SetSelectedCountry] = useState(null);
  const [States, SetStates] = useState([]);
  const [SelectedState, SetSelectedState] = useState(null);
  const [Weather, SetWeather] = useState(null);
  const [Language , SetLanguage] = useState("en")

// ================================ setting Language ================================
useEffect(()=>{
  i18n.changeLanguage(Language)
},[Language])
  // =================== fetching Countries from the Api ===================
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error);
      });
  }, []);
  // =================== fetching Cities from the Api ===================
  useEffect(() => {
    if (SelectedCountry) {
      axios
        .post("https://countriesnow.space/api/v0.1/countries/states", {
          country: SelectedCountry,
        })
        .then((response) => {
          let States = response.data.data.states;
          SetStates(States);
          // console.log(States);
        })
        .catch((error) => {
          console.error("Error fetching states:", error);
        });
    }
  }, [SelectedCountry]);
  // =================== fetching Weather Api ===================
  useEffect(() => {
    if (SelectedState) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${SelectedState}&appid=9664840b5524df2d03337d7a40266358`
        )
        .then((response) => {
          let Weather = response.data;
          SetWeather(Weather);
          console.log(Weather);
        });
    }
  }, [SelectedState]);


let direction = "ltr";
if (Language === "ar") {
  direction = "rtl";
  }

  // ========== the App Component Body ==========
  return (
    <CountriesContext.Provider value={{ countries }}>
      <CitiesContext.Provider value={{ States }}>
        <SelectedLocationContext.Provider
          value={{
            SelectedCountry: SelectedCountry,
            SelectedState: SelectedState,
          }}
        >
          <WeatherContext.Provider value={Weather}>
            <div className="App bg-black h-full  p-4 flex flex-col items-center " dir={direction}>
              <NavbarComponent
                SetSelectedCountry={SetSelectedCountry}
                SetSelectedState={SetSelectedState}
                SetLanguage={SetLanguage}
              />
              {/* <TestNavBar
                 SetSelectedCountry={SetSelectedCountry}
                 SetSelectedState={SetSelectedState}
                 SetLanguage={SetLanguage}
              /> */}

              <ContainerComponent />
              <FooterComponent />
            </div>
          </WeatherContext.Provider>
        </SelectedLocationContext.Provider>
      </CitiesContext.Provider>
    </CountriesContext.Provider>
  );
}

export default App;
