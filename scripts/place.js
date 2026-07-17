// set up current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
// Paris weather - static values
const temp = 8; // ℃ - Paris winter day
const windSpeed = 15; // km/h - windy and breeze
// wind chill function - 1 line
function calculateWindChill(temperature, wind) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temperature * Math.pow(wind, 0.16);
} 
let windChillElement = document.getElementById('windchill');
if (temp <= 10 && windSpeed > 4.8) {
    let windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = '${windChill.toFixed(1)} ℃';
} else {
    windChillElement.textContent ="N/A"
}
