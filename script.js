const apiKey = "42be62b44e77bc16a185d80e729455bd" ;
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".wea_icon")
    

    async function checkWeather(city){
        const response = await fetch(apiUrl+ city +'&appid='+apiKey+'&units=metric');
        var data = await response.json();
        
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +'°c';
        document.querySelector(".humidity").innerHTML= data.main.humidity +'%';
        document.querySelector(".air").innerHTML= data.wind.speed +'km/h';

        if(data.weather[0].main == "Clouds"){
            WeatherIcon.src = "Images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            WeatherIcon.src = "Images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            WeatherIcon.src = "Images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            WeatherIcon.src = "Images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            WeatherIcon.src = "Images/mist.png";
        }
        document.querySelector(".weather").style.display="block";
}
searchBtn.addEventListener("click",()=>{

    checkWeather(searchBox.value);
})

         