import React from 'react';
import { useFavoriteRepos } from '../components/FavoriteReposContext';
import AsyncRepoList from '../components/AsyncRepoList';

/**
 * Renders "Favorite Repos" view
 */
const FavoriteRepos = () => {
  const { favoriteRepos } = useFavoriteRepos();

  console.log('favoriteRepos:', favoriteRepos);

  return (
    <div>
      <h2>Favorite GitHub repositories</h2>
      {!favoriteRepos?.length ? <p>There is no favorite repositories...</p> : <AsyncRepoList repoIds={favoriteRepos} />}
    </div>
  );
};

export default FavoriteRepos;
