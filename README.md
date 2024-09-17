# w-weather-info
An npm package to fetch current weather data for any location

getWeather('city_name','api_key',(er,data)=>{
    if(data){
        console.log(data);
    }
    else{
        console.log(er);
    }
})