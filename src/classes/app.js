import pageLoad from '../functions/pageLoad';
import StorageHandler from './storage';
import renderData from '../functions/renderData';
import getIp from '../functions/ip-api';
import getWeatherData from '../functions/weather-api';

class WeatherApp {
  #storageHandler;

  constructor() {
    this.#storageHandler = new StorageHandler();
  }

  async start() {
    pageLoad();
    this.#addEventListeners();
    let location = this.#storageHandler.getLocationData();
    if (location !== null) {
      this.currentLocation = location;
    } else {
      this.currentLocation = await getIp();
      this.updateLocation(this.currentLocation);
    }
    console.log(this.currentLocation);
    this.getDataAndRender();
  }

  updateLocation() {
    this.#storageHandler.updateStorage(this.currentLocation);
  }

  getDataAndRender() {
    console.log(this.currentLocation);
    getWeatherData(this.currentLocation).then((data) => renderData(data));
  }

  #addEventListeners() {
    const search = document.querySelector('input');
    search.addEventListener('keypress', (event) => this.#searchOnEnter(event));
  }

  #searchOnEnter(event) {
    if (event.key === 'Enter') {
      console.log(this);
      console.log(event);
      event.preventDefault();
      this.currentLocation = event.target.value;
      this.updateLocation();
      this.getDataAndRender();
    }
  }
}

export default WeatherApp;
