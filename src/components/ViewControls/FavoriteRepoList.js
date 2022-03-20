import { useFavoriteRepos } from '../FavoriteReposContext';
import { AsyncRepoList } from '../Repo';

/**
 * Renders list of Favorite Repositories
 */
const FavoriteRepoList = () => {
  const { favoriteRepos } = useFavoriteRepos();

  return !favoriteRepos?.length ? (
    <p>There is no favorite repositories...</p>
  ) : (
    <AsyncRepoList repoIds={favoriteRepos} />
  );
};

export default FavoriteRepoList;
