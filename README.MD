# Weather App

A modern, responsive web application that displays the current weather and a 3-day forecast for any city or your current location. Users can search by city name or allow the app to detect their location automatically.

---

## Features

- **Current Weather:** Displays temperature, weather condition, wind speed and direction, and chance of rain.
- **3-Day Forecast:** Shows weather for today and the next two days, including icons and temperature ranges.
- **Location Detection:** Automatically fetches weather for your current location using the browser's geolocation API. Defaults to Cairo if location access is denied.
- **Instant Search:** Fetches weather for any city as you type.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Loading Indicator:** Displays a loader while fetching data.
- **Clean UI:** Uses cards, icons, and color themes for a pleasant user experience.
- **Custom Fonts:** Utilizes the Roboto variable font for a modern look.

---

## Project Structure

```
week 12 js weather/
│
├── css/
│   └── main.css         # Styles (colors, fonts, cards, responsiveness)
│
├── js/
│   └── index.js         # Main logic (fetching, rendering, events)
│
├── fonts/
│   └── Roboto-VariableFont_wdth,wght.ttf
│
├── images/
│   └── bg.png           # Background image
│
├── index.html           # Main HTML file
└── README.md            # Project documentation
```

---

## How It Works

- On page load, the app tries to get your location. If allowed, it fetches weather for your coordinates; otherwise, it defaults to Cairo.
- You can search for any city using the search input. Weather updates instantly as you type.
- Weather data is fetched from [WeatherAPI](https://www.weatherapi.com/).
- The UI displays:
  - Today’s weather (city, temperature, icon, description, rain chance, wind speed & direction)
  - The next two days’ forecast (max/min temperature, icon, description)

---

## Main Files

### `index.js`

- Handles geolocation, search input, fetching weather data, and rendering the weather cards.
- Uses async/await for API calls and shows/hides a loader during fetches.
- Converts wind direction codes (e.g., "NW") to full text (e.g., "North West").
- Dynamically builds HTML for weather cards.

### `main.css`

- Sets up color and font variables.
- Loads the Roboto variable font.
- Styles the layout, cards, navbar, loader, and ensures responsive behavior.
- Provides utility classes for font sizes, backgrounds, and colors.

---

## Setup & Usage

1. Ensure all files are in place (`index.html`, `css/main.css`, `js/index.js`, `fonts/Roboto-VariableFont_wdth,wght.ttf`).
2. Open `index.html` in your browser.
3. Allow location access for automatic weather, or search for any city using the input field.

---

## Customization

- **Fonts:** Only the Roboto variable font is used. You can remove unused font files for a smaller project size.
- **API Key:** The WeatherAPI key is hardcoded for demonstration. Replace with your own for production use.
- **Languages:** The app is in English. You can add localization or RTL support if needed.
- **Theme:** Easily adjust colors and styles in `main.css` using CSS variables.

---

## Possible Improvements

- Add more weather details (humidity, sunrise/sunset, UV index, etc.)
- Support for multiple languages and RTL layouts.
- Enhanced error handling and user feedback.
- Add unit tests for JavaScript logic.
- Make the app a Progressive Web App (PWA) for offline support.
- Allow users to save favorite locations.

---

## License

For educational and personal use only.  
Weather data provided by [WeatherAPI](https://www.weatherapi.com/)