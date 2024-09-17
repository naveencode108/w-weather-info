export async function getWeather(name,API_KEY,callback){
    try {
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`;
        let data = await fetch(url)
        let response=await data.json();
        callback(null,response);
        
    } catch (error) {
         callback(error.message,null);
         console.log(error.message);    
    }
}
