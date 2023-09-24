function renderData(data) {
  const temperatureDiv = document.querySelector('#temperature');
  temperatureDiv.textContent = data.current.temp_c + '°';

  const locationDiv = document.querySelector('#location');
  locationDiv.textContent = data.location.name;

  const infoDiv = document.querySelector('#info');
  infoDiv.textContent = data.current.condition.text;
  console.log(data);
}

export default renderData;
