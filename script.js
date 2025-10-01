document.querySelector('#search').addEventListener('submit', (event) => {
  event.preventDefault();

  const weather = document.getElementById("weather");
  weather.style.display = "block";
  weather.classList.add("weather-box") // ativa a animação
  const cityName = document.querySelector('#text_city').value;

  if (cityName === '') {
    weather.style.display = "none"; // esconde a div com os dados do clima
    alertMsg("[ERRO] Você precisa digitar uma cidade");
    return;
  } 

  const API_KEY = "7952a4666609f1d0bcf4ad5633f8a867";

  // Pegando os elementos do HTML
  const title = document.querySelector("#title");
  const tempValue = document.querySelector("#temp_value");
  const tempDescription = document.querySelector("#temp_descrition");
  const tempMax = document.querySelector(".temp_max");
  const tempMin = document.querySelector(".temp_min");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".air");
  const weatherImg = document.querySelector("#img");
  const alertBox = document.querySelector("#alert");

  // Função para buscar os dados do clima
  async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        document.querySelector("#weather").classList.remove('.solid')
        alertMsg("❌ Cidade não encontrada!");
        return;
      }

      const data = await response.json();

      // Atualizando os elementos
      title.textContent = `${data.name}, ${data.sys.country}`;
      tempValue.innerHTML = `${Math.round(data.main.temp)} <sup>°C</sup>`;
      tempDescription.textContent = data.weather[0].description;
      tempMax.innerHTML = `${Math.round(data.main.temp_max)} <sup>°C</sup>`;
      tempMin.innerHTML = `${Math.round(data.main.temp_min)} <sup>°C</sup>`;
      humidity.textContent = `${data.main.humidity}%`;
      wind.textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;

      // Troca da imagem conforme a API
      const iconCode = data.weather[0].icon; 
      weatherImg.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      weatherImg.alt = data.weather[0].description;

      alertBox.textContent = ""; // limpa mensagem de erro

    } catch (error) {
      console.error(error);
      alertBox.textContent = "❌ Erro ao buscar dados.";

    }
  }

  // 👉 Já chama direto aqui (não precisa do segundo listener)
  getWeather(cityName);

});

function alertMsg(msg) {
  document.querySelector('#alert').innerHTML = msg;
}
