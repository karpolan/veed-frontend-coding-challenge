import PropTypes from 'prop-types';
import './controls.scss'; // Styles for ViewControls only

/**
 * Renders set of controls to perform the text search, to choose the sorting method and to choose the order of sorting
 * Note: using of SCSS styles in this component just for demo purposes
 */
const FilterForRepos = ({ order, sort, textSearch, onOrderChange, onSortChange, onTextSearchChange }) => {
  return (
    <div className="filter">
      <div className="textSearch" title="Applied to name, description, language and so on.">
        <label>Filter by</label>
        <input type="text" value={textSearch} onChange={onTextSearchChange} />
      </div>

      <div className="sort">
        <label>Sort by</label>
        <select value={sort} onChange={onSortChange}>
          <option value="">Best match</option>
          <option value="stars">Stars</option>
          <option value="name">Name</option>
          <option value="comments">Comments</option>
          <option value="reactions">Reactions</option>
          <option value="created">Create date</option>
          <option value="updated">Update date</option>
        </select>
      </div>

      <div className="order">
        <label>Order by</label>
        <select value={order} onChange={onOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

FilterForRepos.propTypes = {
  order: PropTypes.string,
  sort: PropTypes.string,
  textSearch: PropTypes.string,
  onOrderChange: PropTypes.func,
  onSortChange: PropTypes.func,
  onTextSearchChange: PropTypes.func,
};

export default FilterForRepos;
