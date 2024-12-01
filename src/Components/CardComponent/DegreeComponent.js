import { GiNightSky } from "react-icons/gi";
import { useContext } from "react";
import WeatherContext from "../../Contexts/WeatherContext";
import { t } from 'i18next';


export default function DegreeComponent({
  weatherr = `${t('Default Values')}`,
  weatherIcon = '01n',
}) {
  const WeatherData = useContext(WeatherContext);

  let WeatherDescription = WeatherData?.weather?.[0]?.description || weatherr;
  let WeatherIcon = WeatherData?.weather?.[0]?.icon || weatherIcon;
  let IconUrl = `http://openweathermap.org/img/wn/${WeatherIcon}@2x.png`;

  let WeatherDegree = WeatherData?.main?.temp || 'no';
  let CelsiusDegree = (WeatherDegree - 273.15).toFixed(1);

  return (
    <div className="container h-auto py-5 w-full max-w-md sm:max-w-full text-white flex flex-wrap md:flex-nowrap justify-around items-center overflow-hidden border-b-4 border-white px-4">
      <div className="Degree flex-1 flex flex-col justify-center items-center md:border-b-0 border-r-4 border-white px-4 mb-4 md:mb-0 mt-8">
        <p className="text-6xl sm:text-8xl font-bold text-center">
          {CelsiusDegree}
        </p>
        <p className="text-lg sm:text-xl font-bold text-center pt-4 sm:pt-6">
          Celsius
        </p>
      </div>

      <div className="Logo flex-1 flex flex-col justify-center items-center px-4">
        <img
          src={IconUrl}
          alt="Weather Animation"
          className="w-20 sm:w-32 h-20 sm:h-32 object-contain"
        />
        <p className="text-lg sm:text-xl font-bold text-center mt-4">
          {WeatherDescription}
        </p>
      </div>
    </div>
  );
}
