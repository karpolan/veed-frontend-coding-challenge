import PropTypes from 'prop-types';
import { useGitHubSingleRepo } from '../hooks';
import RepoItem from './RepoItem';

/**
 * Renders Single Repository, asynchronously by given Id, with loader and error
 */
const AsyncRepoItem = ({ id }) => {
  const { repo, error, loading } = useGitHubSingleRepo(id);

  return <>{loading ? <p>Loading...</p> : error ? <p>Error: {error.message}</p> : <RepoItem {...repo} />}</>;
};

AsyncRepoItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AsyncRepoItem;
