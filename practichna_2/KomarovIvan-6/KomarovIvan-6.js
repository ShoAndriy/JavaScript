let temperature = Number(prompt("Введіть температуру в кімнаті:"));
let sensorError = prompt("Чи є помилка датчика? (введіть true або false)");
let systemStatus;
if (sensorError === "true") {
    systemStatus = "temperature sensor error";
} else {
    if (temperature < 18) {
        systemStatus = "Увімкнути обігрів Turn on heating";
    } else if (temperature >= 18 && temperature <= 25) {
        systemStatus = "Температура комфортна temperature is nice";
    } else {
        systemStatus = "Увімкнути кондиціонер Turn on conditioner";
    }
}

console.log(systemStatus);
alert(systemStatus);