# w-weather-info

`w-weather-info` is a simple and easy-to-use npm package for fetching weather information using the OpenWeather API. With just a few lines of code, you can get current weather data for any city!

## Installation

To get started, install the package via npm:

```bash
npm install w-weather-info
```

```bash
const { getWeather } = require('w-weather-info');

getWeather('city_name', 'api_key', (err, data) => {
  if (data) {
console.log(data);  // Display weather data
  } else {
   console.log(err);   // Handle errors
  }
});
```

