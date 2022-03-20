import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { differenceInDays, formatDistanceToNow, format } from 'date-fns';
import { useFavoriteRepos } from '../FavoriteReposContext';
import { ForkIcon, StarIcon } from '../icons';
import styles from './Repo.module.css'; // Styles for RepoXxx components only

/**
 * Renders Single Repository item
 * Note: using of CSS modules in this component just for demo purposes
 */
const RepoItem = ({ description, forks_count, html_url, id, language, name, stargazers_count, updated_at }) => {
  const { favoriteRepos, addFavoriteRepo, removeFavoriteRepo } = useFavoriteRepos();
  const isFavorite = favoriteRepos?.includes(id);

  const dateUpdated = updated_at && new Date(updated_at);
  const dateNow = new Date();
  const updatedToRender =
    differenceInDays(dateNow, dateUpdated) < 30
      ? formatDistanceToNow(dateUpdated, { addSuffix: true })
      : dateUpdated
      ? format(dateUpdated, 'MMM d, yyyy')
      : undefined;

  const onFavoriteAddClick = useCallback(() => addFavoriteRepo(id), [id, addFavoriteRepo]);

  const onFavoriteRemoveClick = useCallback(() => removeFavoriteRepo(id), [id, removeFavoriteRepo]);

  return (
    <li>
      <div className={styles.title}>
        <h3>
          <a href={html_url} rel="noopener noreferrer" target="_blank">
            {name}
          </a>
        </h3>
        {isFavorite ? (
          <button onClick={onFavoriteRemoveClick}>Remove form Favorites</button>
        ) : (
          <button onClick={onFavoriteAddClick}>Add to Favorite</button>
        )}
      </div>
      <p>{description}</p>
      <div className={styles.info}>
        {language && <span>{language}</span>}
        {stargazers_count && (
          <span>
            <StarIcon /> {stargazers_count}
          </span>
        )}
        {forks_count && (
          <span>
            <ForkIcon /> {forks_count}
          </span>
        )}
        {updatedToRender && <span>Updated: {updatedToRender}</span>}
      </div>
    </li>
  );
};

RepoItem.propTypes = {
  id: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  language: PropTypes.string,
  stargazers_count: PropTypes.number,
  forks_count: PropTypes.number,
  updated_at: PropTypes.string,
};

export default RepoItem;
