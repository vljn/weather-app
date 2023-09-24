class StorageHandler {
  getLocationData() {
    return localStorage.getItem('selectedLocation');
  }

  updateStorage(data) {
    localStorage.setItem('selectedLocation', data);
  }
}

export default StorageHandler;
