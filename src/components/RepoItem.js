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
      {language && <p>Language: {language}</p>}
      <p>
        <a href={html_url}>{html_url}</a>
      </p>

      {homepage && (
        <p>
          <a href={homepage}>Homepage</a>
        </p>
      )}

      {isFavorite ? (
        <button onClick={onFavoriteRemoveClick}>Favorite</button>
      ) : (
        <button onClick={onFavoriteAddClick}>Un-Favorite</button>
      )}
    </div>
  );
};

RepoItem.propTypes = {
  id: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  stargazers_count: PropTypes.number,
  language: PropTypes.string,
  homepage: PropTypes.string,
  full_name: PropTypes.string,
};

export default RepoItem;
