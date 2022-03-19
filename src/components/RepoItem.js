import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useFavoriteRepos } from './FavoriteReposContext';

/**
 * Renders Single Repository item
 */
const RepoItem = ({ id, name, description, url, language, homepage, full_name, html_url, stargazers_count }) => {
  const { favoriteRepos, addFavoriteRepo, removeFavoriteRepo } = useFavoriteRepos();
  const isFavorite = favoriteRepos?.includes(id);

  const onFavoriteAddClick = useCallback(() => addFavoriteRepo(id), [id, addFavoriteRepo]);

  const onFavoriteRemoveClick = useCallback(() => removeFavoriteRepo(id), [id, removeFavoriteRepo]);

  return (
    <div>
      <h3>{name}</h3>
      <h5>Stars {stargazers_count}</h5>
      <p>{description}</p>
      <p>{language}</p>
      <a href={html_url}>{html_url}</a>
      <br />
      {homepage && <a href={homepage}>Homepage</a>}

      {isFavorite ? (
        <button onClick={onFavoriteRemoveClick}>Remove from Favorites</button>
      ) : (
        <button onClick={onFavoriteAddClick}>Add to Favorites</button>
      )}
    </div>
  );
};

RepoItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number,
  language: PropTypes.string,
  homepage: PropTypes.string,
  full_name: PropTypes.string,
  html_url: PropTypes.string,
};

export default RepoItem;
