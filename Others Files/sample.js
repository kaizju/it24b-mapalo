const apiKey = 'a5712e740541248ce7883f0af8581be4';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const mapUrl = 'https://api.openweathermap.org/data/2.5/weather?';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const weatherMapElement = document.getElementById('weatherMap');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                locationElement.textContent = data.name;
                temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
                descriptionElement.textContent = data.weather[0].description;

                // Fetch and display the weather map
                const lat = data.coord.lat;
                const lon = data.coord.lon;
                const mapImageUrl = `https://tile.openweathermap.org/map/precipitation_new/${Math.round(lat)}/${Math.round(lon)}.png?appid=${apiKey}&zoom=10&size=400x400`;
                weatherMapElement.src = mapImageUrl;
                weatherMapElement.style.display = 'block'; // Show the map
            } else {
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}