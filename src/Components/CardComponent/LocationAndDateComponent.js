import React, { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { MdDateRange } from "react-icons/md";
import SelectedLocationContext from "../../Contexts/SelectedLocationContext";
import moment from "moment";
import { withTranslation } from 'react-i18next';
import { t } from 'i18next';




const LocationAndDateComponent = () => {

  const currentDate = moment().format(' Do MMMM YYYY')

  const selectedLocation = useContext(SelectedLocationContext);
  const SelectedCountry = selectedLocation.SelectedCountry;
  const SelectedState = selectedLocation.SelectedState;

  return (
    <div className="container flex flex-col justify-start sm:flex-row sm:items-center sm:justify-between max-h-14 p-2 px-4 text-white text-sm py-4 mb-4 sm:my-2">
      {/* Date Section */}
      <div className="date-section flex items-center space-x-2 my-2">

              <MdDateRange className="text-2xl" aria-label="Calendar Icon" />
              <p className="text-base font-bold">{currentDate}</p>
      </div>

      {/* Location Section */}
      <div className="location-section flex items-center space-x-2 my-2">
        {SelectedCountry && SelectedState ? (
          <>
            <FaLocationDot className="text-xl" aria-label="Location Icon" />
            <span className="text-base font-bold" aria-label="Country">
              {SelectedCountry}
            </span>
            <RxDividerVertical className="text-2xl" aria-hidden="true" />
            <p className="text-base font-bold">{SelectedState}</p>
          </>
        ) : (
          <p className="text-base font-bold">
           {t('No Location Selected')}
          </p>
        )}
      </div>
    </div>
  );
};

export default LocationAndDateComponent;
