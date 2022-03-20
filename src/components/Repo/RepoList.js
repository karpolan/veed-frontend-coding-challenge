import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

/**
 * Renders list of given repos
 * @param {array} repos - list of repositories
 */
const RepoList = ({ repos }) => {
  return !repos?.length ? (
    <p>No repositories found...</p>
  ) : (
    <ul>
      {repos?.map((current) => (
        <RepoItem key={current.id} {...current} />
      ))}
    </ul>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
