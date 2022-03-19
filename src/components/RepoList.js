import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

/**
 * Renders as list/table if given repos
 * @param {array} repos - list of repositories
 */
const RepoList = ({ repos }) => {
  return repos?.map((repo) => <RepoItem key={repo.id} {...repo} />) ?? <p>No repositories found</p>;
};

RepoList.propTypes = {
  repos: PropTypes.array,
};

export default RepoList;
