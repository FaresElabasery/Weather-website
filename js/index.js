const API_Key = "388447e2ef1e4bafa64214645252906"
const inputSearch = document.getElementById("inputSearch");
const findBtn = document.getElementById("findBtn");
const loaderContainer = document.querySelector('.loaderContainer');

getLocation();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function successLocation(position) {
    getWeather(`${position.coords.latitude}, ${position.coords.longitude}`)
}
function errorLocation() {
    getWeather(`cairo`)
}


inputSearch.addEventListener("input", function () {
    getWeather(inputSearch.value);
});

async function getWeather(city) {
    loaderContainer.classList.remove('d-none');
    try {
        if (city.length > 2) {
            let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${city}&days=3`);
            if (response.ok) {
                let data = await response.json();
                displayWeatherFutureDays(data);
            } else {
                console.log("Network response was not ok");
                loaderContainer.classList.add('d-none');
            }
        }
    } catch (error) {
        console.log("There has been a problem with your fetch operation:", error);
    } finally {
        loaderContainer.classList.add('d-none');
    }

}

function displayWeatherFutureDays(dataList) {
    let DayesWeatherInfo = dataList.forecast.forecastday
    let cartona = ''
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let directionWind = {
        "N": "North",
        "NNE": "North North East",
        "NE": "North East",
        "ENE": "East North East",
        "E": "East",
        "ESE": "East South East",
        "SE": "South East",
        "SSE": "South South East",
        "S": "South",
        "SSW": "South South West",
        "SW": "South West",
        "WSW": "West South West",
        "W": "West",
        "WNW": "West North West",
        "NW": "North West",
        "NNW": "North North West"
    }
    let currentdate = new Date(DayesWeatherInfo[0].date);
    let currentDay = days[currentdate.getDay()]
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentdate.toLocaleDateString('en-us', options);

    cartona += `  <div class="col-lg-4">
                    <div class="card border-0  font-secondary ">
                        <div
                            class="card-header rounded-0 d-flex justify-content-between align-items-center fs-14 bg-card1-header ">
                            <span>${currentDay}</span>
                            <span>${formattedDate.split(' ')[2].slice(0, 1)}${formattedDate.split(' ')[1]}</span>
                        </div>
                        <div class="card-body bg-card1 py-4 ">
                            <h4 class="card-title fs-5 my-3">${dataList.location.name}</h4>
                            <div class="d-flex flex-wrap flex-row flex-lg-column align-items-center align-items-lg-start  gap-3 mb-3">
                            <p class="card-text fs-90 fw-bolder m-0 text-white ">${dataList.current.temp_c}°C</p>
                            <img src=${dataList.current.condition.icon} alt="weather icon" class="" width="90px"
                                height="90px">
                         </div>
                                <p class="fw-light fs-14 text-info mb-3">${dataList.current.condition.text} </p>
                          
                            <div class="d-flex gap-4 fw-light ">
                                <div>
                                    <i class="fa-xl fa-solid fa-umbrella"></i>
                                    <span class="fs-14">${DayesWeatherInfo[0].day.daily_chance_of_rain}%</span>
                                </div>
                                <div>
                                    <i class="fa-xl fa-solid fa-wind"></i>
                                    <span class="fs-14">${DayesWeatherInfo[0].day.maxwind_kph}km/h</span>
                                </div>
                                <div>
                                    <i class="fa-xl fa-regular fa-compass"></i>
                                    <span class="fs-14">${directionWind[dataList.current.wind_dir]}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
   `
    for (let i = 1; i < DayesWeatherInfo.length; i++) {
        cartona += `
        <div class="col-lg-4">
            <div class="card border-0 font-secondary h-100">
                <div
                    class="card-header rounded-0 d-flex justify-content-center align-items-center fs-14 ${i == 1 ? 'bg-card2-header' : 'bg-card1-header'} ">
                    <span>${days[currentdate.getDay() + i]}</span>
                </div>
                <div class="card-body ${i == 1 ? 'bg-card2' : 'bg-card1'} py-5 text-center">
                    <div class="d-flex flex-column gap-1 mb-3 ">
                        <img src=${DayesWeatherInfo[i].day.condition.icon} alt="weather icon" class="m-auto" width="48px"
                            height="48px">
                            <h4 class="text-white mt-4 mb-0">${DayesWeatherInfo[i].day.maxtemp_c}°C</h>
                            <h6 class="fw-lighter  ">${DayesWeatherInfo[i].day.mintemp_c}°</h6>
                            <span class="fw-light fs-14 text-info mt-2">${DayesWeatherInfo[i].day.condition.text} </span>
                    </div>
                </div>
            </div>
        </div>
`
    }
    document.getElementById('weatherContainer').innerHTML = cartona;
}
