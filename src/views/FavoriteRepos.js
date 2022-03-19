import React from 'react';
import { useFavoriteRepos } from '../hooks';
import RepoList from '../components/RepoList';

/**
 * Renders "Favorite Repos" view
 */
const FavoriteRepos = () => {
  const { favoriteRepos, addFavoriteRepo, removeFavoriteRepo } = useFavoriteRepos();

  return (
    <div>
      <h2>Favorite GitHub repositories</h2>
      {favoriteRepos?.length ? <RepoList repos={favoriteRepos} /> : <p>No repositories found</p>}
    </div>
  );
};

export default FavoriteRepos;
