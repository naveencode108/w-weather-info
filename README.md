# w-weather-info

`w-weather-info` is a simple and easy-to-use npm package for fetching weather information using the OpenWeather API. With just a few lines of code, you can get current weather data for any city!

## Installation

To get started, install the package via npm:

```bash
npm install w-weather-info
```

```bash
import {getWeather} from 'w-weather-info'

let {data,error} = await getWeather ('city','api_key');
console.log(data);

```

