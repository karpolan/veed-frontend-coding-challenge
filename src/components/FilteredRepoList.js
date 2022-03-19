import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGitHubSearchRepos } from '../hooks';
import RepoList from './RepoList';

/**
 * Renders list of repos filtered and sorted by given criteria
 * @param {string} order - order to sort by (asc or desc)
 * @param {string} sort - filed to sort by
 * @param {string} textSearch - text to search in names and descriptions to filter the list of repos
 */
const FilteredRepoList = ({ order, sort, textSearch }) => {
  const { repos, error, loading } = useGitHubSearchRepos({ sort, order });
  const [filteredRepos, setFilteredRepos] = useState(repos);

  useEffect(() => {
    const textSearchLowerCase = textSearch?.toLowerCase();
    setFilteredRepos(
      textSearch
        ? repos.filter(
            (current) =>
              current?.name?.toLowerCase().includes(textSearchLowerCase) ||
              current?.description?.toLowerCase().includes(textSearchLowerCase)
          )
        : repos
    );
  }, [repos, textSearch]);

  return (
    <>{loading ? <p>Loading...</p> : error ? <p>Error: {error.message}</p> : <RepoList repos={filteredRepos} />}</>
  );
};

FilteredRepoList.propTypes = {
  order: PropTypes.string,
  sort: PropTypes.string,
  textSearch: PropTypes.string,
};

export default FilteredRepoList;
