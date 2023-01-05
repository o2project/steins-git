const GA_ID_STORAGE_KEY = 'gaId';

export class GAOptoutKeyStorage {
  getKey() {
    return localStorage.getItem(GA_ID_STORAGE_KEY);
  }

  saveKey(value) {
    localStorage.setItem(GA_ID_STORAGE_KEY, value);
  }

  deleteKey(value) {
    localStorage.removeItem(GA_ID_STORAGE_KEY);
  }
}
