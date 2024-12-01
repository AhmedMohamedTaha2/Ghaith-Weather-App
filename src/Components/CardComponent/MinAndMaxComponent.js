import { RxDividerVertical } from "react-icons/rx";
import { BsArrowUpRight } from "react-icons/bs";
import { BsArrowDownLeft } from "react-icons/bs";
import { LuWaves } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { CgCompressV } from "react-icons/cg";
import { FaWind } from "react-icons/fa";
import { useContext } from "react";
import WeatherContext from "../../Contexts/WeatherContext";
import { withTranslation } from 'react-i18next';

const WeatherDetailsComponent = ({ t }) => {
  const WeatherData = useContext(WeatherContext);

  // Ensure the weather data exists and handle cases where it's undefined
  let MinTemp = WeatherData?.main?.temp_min;
  let MaxTemp = WeatherData?.main?.temp_max;
  let Humidity = WeatherData?.main?.humidity;
  let WindSpeed = WeatherData?.wind?.speed;

  let MinTempCelisuis = MinTemp ? (MinTemp - 273.15).toFixed(1) : "N/A";
  let MaxTempCelisuis = MaxTemp ? (MaxTemp - 273.15).toFixed(1) : "N/A";

  return (
    <div className="container p-4 w-full max-w-3xl mx-auto text-white flex flex-col space-y-4 my-4">
      {/* Temperature Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base space-y-4 sm:space-y-0 sm:space-x-4 my-2">
        <div className="flex flex-row justify-center items-center space-x-2">
          <BsArrowUpRight className="text-2xl" />
          <h1 className="font-bold text-center">{t('Max Temperature')}</h1>
          <RxDividerVertical className="text-xl" />
          <p className="font-medium">{MaxTempCelisuis}°C</p>
        </div>
        <div className="flex flex-row justify-center items-center space-x-2">
          <BsArrowDownLeft className="text-2xl" />
          <h1 className="font-bold text-center">{t('Min Temperature')}</h1>
          <RxDividerVertical className="text-xl" />
          <p className="font-medium">{MinTempCelisuis}°C</p>
        </div>
      </div>

      {/* Humidity and Wind Speed Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base space-y-4 sm:space-y-0 sm:space-x-4 my-2">
        <div className="flex flex-row justify-center  items-center space-x-2">
          <WiHumidity className="text-3xl" />
          <h1 className="font-bold text-center">{t('Humidity')}</h1>
          <RxDividerVertical className="text-xl" />
          <p className="font-medium">{Humidity || "N/A"}%</p>
        </div>

        <div className="flex flex-row justify-center items-center space-x-2">
          <FaWind className="text-xl" />
          <h1 className="font-bold text-center">{t('Wind Speed')}</h1>
          <RxDividerVertical className="text-xl" />
          <p className="font-medium">{WindSpeed || "N/A"} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(WeatherDetailsComponent);
