/**
 * Smartly reads value from localStorage
 */
export function localStorageGet(name, defaultValue = '') {
  const valueFromStore = localStorage.getItem(name);
  if (valueFromStore === null) return defaultValue; // No value in store, return default one

  try {
    const jsonParsed = JSON.parse(valueFromStore);
    if (['boolean', 'number', 'bigint', 'string', 'object'].includes(typeof jsonParsed)) {
      return jsonParsed; // We successfully parse JS value from the store
    }
  } catch (error) {}

  return valueFromStore; // Return string value as it is
}

/**
 * Smartly writes value into localStorage
 */
export function localStorageSet(name, value) {
  if (typeof value === 'undefined') {
    return; // Do not store undefined values
  }

  let valueAsString;
  if (typeof value === 'object') {
    valueAsString = JSON.stringify(value);
  } else {
    valueAsString = String(value);
  }

  localStorage.setItem(name, valueAsString);
}

/**
 * Deletes value by name from localStorage, if specified name is empty the localStorage is cleared.
 */
export function localStorageDelete(name) {
  if (name) {
    localStorage.removeItem(name);
  } else {
    localStorage.clear();
  }
}

/**
 * Favorite Repositories using Local Storage
 */

export const LOCAL_STORAGE_FAVORITES = 'repos.favorites';

export const getFavoriteRepos = () => localStorageGet(LOCAL_STORAGE_FAVORITES, []);
