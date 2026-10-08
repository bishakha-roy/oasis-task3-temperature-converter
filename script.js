const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");
const errorMessage = document.getElementById("errorMessage");

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    errorMessage.textContent = "";

    if (temperatureInput.value.trim() === "" || isNaN(temperature)) {
        showError("Please enter a valid temperature.");
        return;
    }

    let celsius;

    // Convert the input into Celsius first
    if (unit === "C") {
        celsius = temperature;
    } else if (unit === "F") {
        celsius = (temperature - 32) * 5 / 9;
    } else if (unit === "K") {
        celsius = temperature - 273.15;
    }

    // Absolute zero validation
    if (celsius < -273.15) {
        showError("Temperature cannot be below absolute zero (-273.15 °C).");
        clearResults();
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    celsiusResult.textContent = `${celsius.toFixed(2)} °C`;
    fahrenheitResult.textContent = `${fahrenheit.toFixed(2)} °F`;
    kelvinResult.textContent = `${kelvin.toFixed(2)} K`;
}

function showError(message) {
    errorMessage.textContent = message;
}

function clearResults() {
    celsiusResult.textContent = "-- °C";
    fahrenheitResult.textContent = "-- °F";
    kelvinResult.textContent = "-- K";
}