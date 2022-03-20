import PropTypes from 'prop-types';
import AsyncRepoItem from './AsyncRepoItem';

/**
 * Renders list of repos by IDs, asynchronously loads every repository's data
 * @param {array} repoIds - list of repository's Ids
 */
const AsyncRepoList = ({ repoIds }) => {
  return !repoIds?.length ? (
    <p>No repositories found...</p>
  ) : (
    <ul>
      {repoIds?.map((current) => (
        <AsyncRepoItem key={current} id={current} />
      ))}
    </ul>
  );
};

AsyncRepoList.propTypes = {
  repoIds: PropTypes.array.isRequired,
};

export default AsyncRepoList;
