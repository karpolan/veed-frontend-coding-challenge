import { useEffect, useState } from 'react';
import { endOfDay, format, subDays } from 'date-fns';

const PERIOD_IN_DAYS = 7;
const ENDPOINT_REPOSITORIES = 'https://api.github.com/search/repositories';
// const ENDPOINT = https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc

/**
 * Helper to get date before given of days
 * @param {number} daysBefore - number of days to deduct from today, by default it is PERIOD_IN_DAYS
 * @returns {string} - date as string in format 'YYYY-MM-DD'
 */
function getDateBefore(daysBefore = PERIOD_IN_DAYS) {
  return format(endOfDay(subDays(new Date(), daysBefore)), 'yyyy-MM-dd');
}

/**
 * Returns list of repositories for given query, sorting and order
 * @param {string} query - search query for GitHub API, buy default it is 'created:>YYYY-MM-DD', where date is before today for PERIOD_IN_DAYS of days
 * @param {string} sort - sorting field for GitHub API, by default it is 'stars'
 * @param {string} order - sorting order for GitHub API, by default it is 'desc'
 * @returns {object} - list of repositories, error and loading state
 */
export function useGitHubRepos({ query = `created:>${getDateBefore()}`, sort = 'stars', order = 'desc' } = {}) {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const url = `${ENDPOINT_REPOSITORIES}?q=${query}&sort=${sort}&order=${order}&per_page=100`;
        console.log('API call to:', url);
        const response = await fetch(url);
        const json = await response.json();
        // console.log('API json', json);
        setRepos(json.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, sort, order]);

  return { repos, error, loading };
}
