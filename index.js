export async function getWeather(name,API_KEY){
    try {
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`;
        let data = await fetch(url)
        let response=await data.json();
        return {
           data: await response,
           error:false
        }
    } catch (error) {
         return {
            data:false,
            error:error.message
         };
    }
}
