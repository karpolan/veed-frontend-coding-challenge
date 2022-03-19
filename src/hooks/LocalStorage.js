import { useState } from 'react';

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
      console.log(error);
      return defaultValue;
    }
  });

  const setLocalStorageValue = (value) => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
      setValue(value);
    } catch (error) {
      console.log(error);
    }
  };

  return [value, setLocalStorageValue];
}

/**
 * Hook to manipulate Favorite Repositories using Local Storage
 * @returns {object} - list of favorite repositories, setter methods to Add and Remove favorite items
 */
export function useFavoriteRepos() {
  const [repos, setLocalStorageValue] = useLocalStorage('favoriteRepos', []);
  const [favoriteRepos, setFavoriteRepos] = useState(repos);

  const addFavoriteRepo = (repo) => {
    const newFavoriteRepos = [...favoriteRepos, repo];
    setFavoriteRepos(newFavoriteRepos);
    setLocalStorageValue(newFavoriteRepos);
  };

  const removeFavoriteRepo = (repo) => {
    const newFavoriteRepos = favoriteRepos.filter((current) => current.id !== repo.id);
    setFavoriteRepos(newFavoriteRepos);
    setLocalStorageValue(newFavoriteRepos);
  };

  return { favoriteRepos, addFavoriteRepo, removeFavoriteRepo };
}

/**
 * Hook to manipulate Favorite Repositories using Local Storage by Ids
 * @returns {object} - list of Ids for favorite repositories, setter methods to Add and Remove favorite items by Id
 */
export function useFavoriteRepoIds() {
  const [repos, setLocalStorageValue] = useLocalStorage('favoriteRepoIds', []);
  const [favoriteRepos, setFavoriteRepos] = useState(repos);

  const addFavoriteRepoId = (repoId) => {
    const newFavoriteRepos = [...new Set([...favoriteRepos, repoId])]; // remove duplicates
    setFavoriteRepos(newFavoriteRepos);
    setLocalStorageValue(newFavoriteRepos);
  };

  const removeFavoriteRepoId = (repoId) => {
    const newFavoriteRepos = favoriteRepos.filter((current) => String(current) !== String(repoId));
    setFavoriteRepos(newFavoriteRepos);
    setLocalStorageValue(newFavoriteRepos);
  };

  return { favoriteRepoIds, addFavoriteRepoId, removeFavoriteRepoId };
}
