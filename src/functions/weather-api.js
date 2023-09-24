async function getWeatherData(location) {
  const apiKey = '0384e2fec7274085b74190210231309';
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  const data = await fetch(url);

  const jsonData = await data.json();

  if (jsonData.error) {
    throw new Error(jsonData.error.message);
  }

  return jsonData;
}

export default getWeatherData;
