import { createContext, useContext, useState } from 'react';
import { getFavoriteRepos, localStorageSet, LOCAL_STORAGE_FAVORITES } from '../utils/localStorage';

/**
 * Private Context for Favorite Repos
 */
const FavoriteReposContext = createContext();

/**
 * Wrapper around useContext() hook to get Favorite Repos context's value
 * @returns {object} - getter for list of Ids for favorite repositories, setter methods to Add and Remove favorite repo by Id
 */
function useFavoriteRepos() {
  const { favoriteRepos, addFavoriteRepo, removeFavoriteRepo } = useContext(FavoriteReposContext);

  return { favoriteRepos, addFavoriteRepo, removeFavoriteRepo };
}

/**
 * Context provider for Favorite Repos
 * @provides { favoriteRepos, addFavoriteRepo, removeFavoriteRepo } object as context value
 */
const FavoriteReposProvider = ({ children }) => {
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

  return (
    <FavoriteReposContext.Provider value={{ favoriteRepos, addFavoriteRepo, removeFavoriteRepo }}>
      {children}
    </FavoriteReposContext.Provider>
  );
};

export { FavoriteReposProvider, useFavoriteRepos };
