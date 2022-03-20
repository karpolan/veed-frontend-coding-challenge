import { FavoriteRepoList } from '../components/ViewControls';

/**
 * Renders "Favorite Repos" view
 */
const FavoriteRepos = () => {
  return (
    <>
      <h2>Favorite GitHub repositories</h2>
      <FavoriteRepoList />
    </>
  );
};

export default FavoriteRepos;
