# Weather Application

## Description
A weather application that allows users to check real-time weather data for any location across the globe. The app fetches data from the OpenWeatherMap API and provides a user-friendly interface with multi-language support (English and Arabic). It is built using React, Tailwind CSS, and several other modern web technologies.

---

## Overview

The Weather Application is designed to provide users with an intuitive interface for accessing current weather information. By selecting a country and state or city, users can view detailed weather data, including temperature, wind speed, humidity, and more. The app also features localization to support multiple languages, making it accessible to a wider audience.

---

## Features

- **Real-Time Weather Information:** Fetches and displays weather data, including temperature, humidity, wind speed, and more.
- **Location Selection:** Users can choose a country and city/state to view weather data.
- **Multi-Language Support:** Switch between English and Arabic languages.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Modern UI:** Built with a clean and modern UI using Tailwind CSS and Preline CSS.
- **Internationalization:** Translates the app content based on the user's selected language using `react-i18next`.

---

## Technologies Used

- **React:** A JavaScript library for building the user interface.
- **Tailwind CSS:** A utility-first CSS framework for fast UI development.
- **Preline CSS:** Extends Tailwind CSS with additional modern UI components.
- **Axios:** A promise-based HTTP client for making API requests.
- **Moment.js:** A JavaScript library for parsing, validating, and formatting dates.
- **React-i18next:** For internationalization, supporting multiple languages.
- **React Icons:** Provides vector icons for enhancing the UI.

---

## Folder Structure

- **/public**
    - /fonts - Font files (Arabic and English).
    - /icons - Icons used throughout the app.
    - /images  - Image assets used in the app.
    - /locales  - Localization files for different languages.
    - favicon.ico - App favicon.
    - index.html- Main HTML structure.
    - logo192.png - Icon for different device resolutions.
    - logo512.png - Icon for different device resolutions.
    - manifest.json - PWA configuration.
    - robots.txt- Web crawlers instructions.

- **src/**
    - /components - React components used in the UI.
        - CardComponent.js  - Displays weather info in card format.
        - FooterComponent.js - The footer of the app.
        - NavBar.js- Navigation bar for selecting location.
        - Container.jsd- Wrapper component for UI organization.
    - /contexts - Context files for managing global state.
        - CountriesContext.js - Manages countries data.
        - SelectedLocationContext.js - Manages selected location data.
        - StateContext.js - Manages general app state.
        - WeatherContext.js - Manages weather data.
    - App.css - Global CSS for the app.
    - App.js - Root component integrating all the others.
    - App.test.js - Test cases for the App component.
    - i18n.js  - Handles language translation.
    - index.css- Styles for the main page.
    - index.js - The entry point of the React app.
    - logo.svg - The app logo in SVG format.
    - reportWebVitals.js - For measuring app performance.
    - setupTests.js  - Setup for testing environment.

- **other-files/**
    - package.json  - Metadata and dependencies for the project.
    - package-lock.json - Locked versions of dependencies.
    - README.md - Project documentation.
    - tailwind.config.js - Tailwind CSS configuration.
    - .gitignore - Files to be ignored by Git.
    - build/ - The production build of the app.
    - node_modules/  - Project dependencies.


---

## API Reference

The application communicates with the following APIs to fetch required data:

1. **Countries List:**
   - **Endpoint:** `https://restcountries.com/v3.1/all`
   - **Description:** Returns a list of all countries.
   - **Usage:** Used to display a list of countries in the selection dropdown.

2. **States List:**
   - **Endpoint:** `https://countriesnow.space/api/v0.1/countries/states`
   - **Description:** Returns the list of states/provinces for a selected country.
   - **Usage:** Used for populating the states selection based on the chosen country.

3. **Weather Data:**
   - **Endpoint:** `https://api.openweathermap.org/data/2.5/weather?q=${SelectedState}&appid=YOUR_API_KEY`
   - **Description:** Fetches real-time weather data for a selected state or city.
   - **Usage:** Provides weather details (temperature, humidity, wind speed, etc.) for the selected location.
   - **Parameters:** 
     - `q`: The name of the city or state.
     - `appid`: Your OpenWeatherMap API key.

---

