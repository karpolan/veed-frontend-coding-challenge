import React from 'react';
import { useGitHubRepos } from '../hooks';
import RepoList from '../components/RepoList';

/**
 * Renders "Latest GitHub Releases" view
 */
const LatestReleases = () => {
  const { repos, error, loading } = useGitHubRepos();

  return (
    <div>
      <h2>Latest GitHub releases</h2>
      {loading ? <p>Loading...</p> : error ? <p>Error: {error.message}</p> : <RepoList repos={repos} />}
    </div>
  );
};

export default LatestReleases;
