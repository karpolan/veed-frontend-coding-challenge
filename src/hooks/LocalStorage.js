import { useState } from 'react';
import { localStorageSet, LOCAL_STORAGE_FAVORITES, getFavoriteRepos } from '../utils/localStorage';

/**
 * Hook to store any kind of data (number, strings, object, arrays, and so on) into local storage under specific Key
 * @param {string} key - key to use in local storage
 * @param {any} defaultValue - value to use if key is not found in local storage
 * @returns {array} - first element is value, second element is the setter methods
 */
export function useLocalStorage(key, defaultValue = '') {
  const [value, setValue] = useState(() => {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return defaultValue;
      }
      return JSON.parse(serializedValue);
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  });

  const setLocalStorageValue = (value) => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
      setValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [value, setLocalStorageValue];
}

/**
 * Hook to manipulate Favorite Repositories using Local Storage by Ids
 * @deprecated Hook works well, but unfortunately other components are not updated when localStorage is changed :( So now we use Context Provider instead.
 * @returns {object} - getter for list of Ids for favorite repositories, setter methods to Add and Remove favorite repo by Id
 */
export function useFavoriteRepos() {
  const [favoriteRepos, setFavoriteRepos] = useState(getFavoriteRepos());

  const addFavoriteRepo = (repoId) => {
    const oldFavorites = getFavoriteRepos();
    const newFavorites = [...new Set([...oldFavorites, repoId])]; // remove duplicates
    localStorageSet(LOCAL_STORAGE_FAVORITES, newFavorites);
    setFavoriteRepos(newFavorites);
  };

  const removeFavoriteRepo = (repoId) => {
    const oldFavorites = getFavoriteRepos();
    const newFavorites = oldFavorites.filter((current) => String(current) !== String(repoId));
    localStorageSet(LOCAL_STORAGE_FAVORITES, newFavorites);
    setFavoriteRepos(newFavorites);
  };

  return { favoriteRepos, addFavoriteRepo, removeFavoriteRepo };
}
