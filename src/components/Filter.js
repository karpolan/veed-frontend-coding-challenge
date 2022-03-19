import PropTypes from 'prop-types';

/**
 * Renders set of controls to perform the text search, to choose the sorting method and to choose the order of sorting
 */
const Filter = ({ order, sort, textSearch, onOrderChange, onSortChange, onTextSearchChange }) => {
  return (
    <div>
      <label>
        Search for
        <input type="text" value={textSearch} onChange={onTextSearchChange} />
      </label>

      <label>
        Sort by
        <select value={sort} onChange={onSortChange}>
          <option value="">Best match</option>
          <option value="stars">Stars</option>
          <option value="name">Name</option>
          <option value="comments">Comments</option>
          <option value="reactions">Reactions</option>
          <option value="created">Create date</option>
          <option value="updated">Update date</option>
        </select>
      </label>

      <label>
        Order by
        <select value={order} onChange={onOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
};

Filter.propTypes = {
  order: PropTypes.string,
  sort: PropTypes.string,
  textSearch: PropTypes.string,
  onOrderChange: PropTypes.func,
  onSortChange: PropTypes.func,
  onTextSearchChange: PropTypes.func,
};

export default Filter;
