import { useLocalStorage } from '../hooks';
import Filter from '../components/Filter';
import FilteredRepoList from '../components/FilteredRepoList';

/**
 * Renders "Latest GitHub Releases" view
 */
const LatestReleases = () => {
  const [order, setOrder] = useLocalStorage('filter.order', 'desc');
  const [sort, setSort] = useLocalStorage('filter.sort', 'stars');
  const [textSearch, setTextSearch] = useLocalStorage('filter.textSearch', '');

  //   const onListItemFavoriteChange = (item) => {
  //     item.isFavorite = !item.isFavorite;
  //   };

  const onOrderChange = (event) => {
    setOrder(event?.target?.value);
  };

  const onSortChange = (event) => {
    setSort(event?.target?.value);
  };

  const onTextSearchChange = (event) => {
    setTextSearch(event?.target?.value);
  };

  return (
    <div>
      <h2>Latest GitHub releases</h2>
      <Filter
        order={order}
        sort={sort}
        textSearch={textSearch}
        onOrderChange={onOrderChange}
        onSortChange={onSortChange}
        onTextSearchChange={onTextSearchChange}
      />
      <FilteredRepoList order={order} sort={sort} textSearch={textSearch} />
    </div>
  );
};

export default LatestReleases;
