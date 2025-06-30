const API_Key = "388447e2ef1e4bafa64214645252906"
var inputSearch = document.getElementById("inputSearch");
var findBtn = document.getElementById("findBtn");


getLocation();
/**
 * * This function is called when the user open the page.
 * * It checks if the browser supports geolocation.
 * * @returns {void}
 */
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
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${city}&days=3`);
        if (response.ok) {
            let data = await response.json();
            console.log(data.forecast.forecastday)

        } else {
            console.log("Network response was not ok");
        }
    } catch (error) {
        console.log("There has been a problem with your fetch operation:", error);
    }

}
function displayWeather(dataList) {
    let cartona = ''
    for (let i = 0; i < dataList.length; i++) {
        cartona += `

        `

    }
    document.getElementById('weatherContainer').innerHTML = cartona;
}
function displayWeatherFutureDayes(dataList) {
    let cartona = ''
    for (let i = 1; i < dataList.length; i++) {
        cartona += `    <div class="col-lg-4">
                    <div class="card border-0 font-secondary h-100">
                        <div
                            class="card-header rounded-0 d-flex justify-content-center align-items-center fs-14 bg-card1-header ">
                            <span>sunday</span>
                        </div>
                        <div class="card-body bg-card1 py-5 text-center">
                            <div class="d-flex flex-column gap-1 mb-3 ">
                                <img src="images/weather-icon.png" alt="weather icon" class="m-auto" width="48px"
                                    height="48px">
                                <h4 class="text-white mt-4 mb-0">28.2oC</h>
                                    <h6 class="fw-lighter  ">28.2</h6>
                                    <span class="fw-light fs-14 text-info mt-2">Heavy rain</span>
                            </div>

                        </div>
                    </div>
                </div>

        `

    }
    document.getElementById('weatherContainer').innerHTML = cartona;
}
