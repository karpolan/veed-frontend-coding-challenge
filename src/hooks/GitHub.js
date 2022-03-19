import { useEffect, useState } from 'react';
import { endOfDay, format, subDays } from 'date-fns';

const PERIOD_IN_DAYS = 7;

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
export function useGitHubSearchRepos({ query = `created:>${getDateBefore()}`, sort = 'stars', order = 'desc' } = {}) {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const url = `https://api.github.com/search/repositories?q=${query}&sort=${sort}&order=${order}&per_page=100`;
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

/**
 * Returns singe repository for given id
 * @param {number} id - id of repository to fetch
 * @returns {object} - repository data object, error and loading state
 */
export function useGitHubSingleRepo(id) {
  const [repo, setRepo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const url = `https://api.github.com/repositories/${id}`;
        console.log('API call to:', url);
        const response = await fetch(url);
        const json = await response.json();
        // console.log('API json', json);
        setRepo(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { repo, error, loading };
}
