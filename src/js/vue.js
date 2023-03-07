const currentDate = new Date(); // создаем новый объект даты
const dateElement = document.querySelector('.date'); // находим элемент с классом "date"

dateElement.textContent = currentDate.toLocaleDateString();

const country = "KG";
const API_KEY = 'befded62119fcb63e4033273018ef115'; // ваш API ключ OpenWeatherMap
function bishkek() {
  const city = 'Бишкек'; // название города, данные которого вы хотите получить

// запрос на получение данных о погоде
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=ru`;

  // отправка запроса и обработка ответа
  const temperatureElement = document.querySelector('.basic-region .temperature p');
  const windSpeedElement = document.querySelector('.basic-region .wind-speed p');
  const weatherConditionsElement = document.querySelector('.basic-region .weather-conditions p');
  const sunriseSunsetElement = document.querySelector('.basic-region .sunrise-sunset p');

  // отправка запроса и обработка ответа
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // отображение данных о погоде в соответствующих элементах HTML
      temperatureElement.textContent = `Температура: ${data.main.temp}°C`;
      windSpeedElement.textContent = `Скорость ветра: ${data.wind.speed} м/c`;
      weatherConditionsElement.textContent = `Погодные условия: ${data.weather[0].description}`;
      sunriseSunsetElement.textContent = `Время рассвета: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} / Время заката: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
    })
    .catch(error => {
      console.log(error); // вывод ошибки в консоль
    });
}

function batken() {
  const city = 'Баткен'; // название города, данные которого вы хотите получить

// запрос на получение данных о погоде
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=ru`;

  // отправка запроса и обработка ответа
  const temperatureElement = document.querySelector('.batken-region .temperature p');
  const windSpeedElement = document.querySelector('.batken-region .wind-speed p');
  const weatherConditionsElement = document.querySelector('.batken-region .weather-conditions p');
  const sunriseSunsetElement = document.querySelector('.batken-region .sunrise-sunset p');

  // отправка запроса и обработка ответа
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // отображение данных о погоде в соответствующих элементах HTML
      temperatureElement.textContent = `Температура: ${data.main.temp}°C`;
      windSpeedElement.textContent = `Скорость ветра: ${data.wind.speed} м/c`;
      weatherConditionsElement.textContent = `Погодные условия: ${data.weather[0].description}`;
      sunriseSunsetElement.textContent = `Время рассвета: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} / Время заката: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
    })
    .catch(error => {
      console.log(error); // вывод ошибки в консоль
    });
}

function osh() {
  const city = 'Ош'; // название города, данные которого вы хотите получить

// запрос на получение данных о погоде
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=ru`;

  // отправка запроса и обработка ответа
  const temperatureElement = document.querySelector('.osh-region .temperature p');
  const windSpeedElement = document.querySelector('.osh-region .wind-speed p');
  const weatherConditionsElement = document.querySelector('.osh-region .weather-conditions p');
  const sunriseSunsetElement = document.querySelector('.osh-region .sunrise-sunset p');

  // отправка запроса и обработка ответа
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // отображение данных о погоде в соответствующих элементах HTML
      temperatureElement.textContent = `Температура: ${data.main.temp}°C`;
      windSpeedElement.textContent = `Скорость ветра: ${data.wind.speed} м/c`;
      weatherConditionsElement.textContent = `Погодные условия: ${data.weather[0].description}`;
      sunriseSunsetElement.textContent = `Время рассвета: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} / Время заката: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
    })
    .catch(error => {
      console.log(error); // вывод ошибки в консоль
    });
}

function djalal() {
  const city = 'Джалал-Абад'; // название города, данные которого вы хотите получить

// запрос на получение данных о погоде
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=ru`;

  // отправка запроса и обработка ответа
  const temperatureElement = document.querySelector('.djalal-region .temperature p');
  const windSpeedElement = document.querySelector('.djalal-region .wind-speed p');
  const weatherConditionsElement = document.querySelector('.djalal-region .weather-conditions p');
  const sunriseSunsetElement = document.querySelector('.djalal-region .sunrise-sunset p');

  // отправка запроса и обработка ответа
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // отображение данных о погоде в соответствующих элементах HTML
      temperatureElement.textContent = `Температура: ${data.main.temp}°C`;
      windSpeedElement.textContent = `Скорость ветра: ${data.wind.speed} м/c`;
      weatherConditionsElement.textContent = `Погодные условия: ${data.weather[0].description}`;
      sunriseSunsetElement.textContent = `Время рассвета: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} / Время заката: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
    })
    .catch(error => {
      console.log(error); // вывод ошибки в консоль
    });
}

function talas() {
  const city = 'Талас'; // название города, данные которого вы хотите получить

// запрос на получение данных о погоде
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=ru`;

  // отправка запроса и обработка ответа
  const temperatureElement = document.querySelector('.talas-region .temperature p');
  const windSpeedElement = document.querySelector('.talas-region .wind-speed p');
  const weatherConditionsElement = document.querySelector('.talas-region .weather-conditions p');
  const sunriseSunsetElement = document.querySelector('.talas-region .sunrise-sunset p');

  // отправка запроса и обработка ответа
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // отображение данных о погоде в соответствующих элементах HTML
      temperatureElement.textContent = `Температура: ${data.main.temp}°C`;
      windSpeedElement.textContent = `Скорость ветра: ${data.wind.speed} м/c`;
      weatherConditionsElement.textContent = `Погодные условия: ${data.weather[0].description}`;
      sunriseSunsetElement.textContent = `Время рассвета: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} / Время заката: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
    })
    .catch(error => {
      console.log(error); // вывод ошибки в консоль
    });
}

function chuy() {
  const city = 'Чуй'; // название города, данные которого вы хотите получить

// запрос на получение данных о погоде
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=ru`;

  // отправка запроса и обработка ответа
  const temperatureElement = document.querySelector('.chuy-region .temperature p');
  const windSpeedElement = document.querySelector('.chuy-region .wind-speed p');
  const weatherConditionsElement = document.querySelector('.chuy-region .weather-conditions p');
  const sunriseSunsetElement = document.querySelector('.chuy-region .sunrise-sunset p');

  // отправка запроса и обработка ответа
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // отображение данных о погоде в соответствующих элементах HTML
      temperatureElement.textContent = `Температура: ${data.main.temp}°C`;
      windSpeedElement.textContent = `Скорость ветра: ${data.wind.speed} м/c`;
      weatherConditionsElement.textContent = `Погодные условия: ${data.weather[0].description}`;
      sunriseSunsetElement.textContent = `Время рассвета: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} / Время заката: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
    })
    .catch(error => {
      console.log(error); // вывод ошибки в консоль
    });
}

function naryn() {
  const city = 'Нарын'; // название города, данные которого вы хотите получить

// запрос на получение данных о погоде
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=ru`;

  // отправка запроса и обработка ответа
  const temperatureElement = document.querySelector('.naaryn-region .temperature p');
  const windSpeedElement = document.querySelector('.naaryn-region .wind-speed p');
  const weatherConditionsElement = document.querySelector('.naaryn-region .weather-conditions p');
  const sunriseSunsetElement = document.querySelector('.naaryn-region .sunrise-sunset p');

  // отправка запроса и обработка ответа
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // отображение данных о погоде в соответствующих элементах HTML
      temperatureElement.textContent = `Температура: ${data.main.temp}°C`;
      windSpeedElement.textContent = `Скорость ветра: ${data.wind.speed} м/c`;
      weatherConditionsElement.textContent = `Погодные условия: ${data.weather[0].description}`;
      sunriseSunsetElement.textContent = `Время рассвета: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} / Время заката: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
    })
    .catch(error => {
      console.log(error); // вывод ошибки в консоль
    });
}

function yssykkul() {
  const city = 'Нарын'; // название города, данные которого вы хотите получить

// запрос на получение данных о погоде
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=ru`;
  // отправка запроса и обработка ответа
  const temperatureElement = document.querySelector('.yssykkul-region .temperature p');
  const windSpeedElement = document.querySelector('.yssykkul-region .wind-speed p');
  const weatherConditionsElement = document.querySelector('.yssykkul-region .weather-conditions p');
  const sunriseSunsetElement = document.querySelector('.yssykkul-region .sunrise-sunset p');

  // отправка запроса и обработка ответа
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // отображение данных о погоде в соответствующих элементах HTML
      temperatureElement.textContent = `Температура: ${data.main.temp}°C`;
      windSpeedElement.textContent = `Скорость ветра: ${data.wind.speed} м/c`;
      weatherConditionsElement.textContent = `Погодные условия: ${data.weather[0].description}`;
      sunriseSunsetElement.textContent = `Время рассвета: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} / Время заката: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
    })
    .catch(error => {
      console.log(error); // вывод ошибки в консоль
    });
}
yssykkul()
naryn()
chuy()
talas()
djalal()
osh()
batken()
bishkek()