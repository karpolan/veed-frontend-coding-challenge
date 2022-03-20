import { useLocalStorage } from '../hooks';
import { FilteredRepoList, FilterForRepos } from '../components/ViewControls';

/**
 * Renders "Latest GitHub Releases" view
 */
const LatestReleases = () => {
  const [order, setOrder] = useLocalStorage('filter.order', 'desc');
  const [sort, setSort] = useLocalStorage('filter.sort', 'stars');
  const [textSearch, setTextSearch] = useLocalStorage('filter.textSearch', '');

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
    <>
      <h2>Latest GitHub releases</h2>
      <FilterForRepos
        order={order}
        sort={sort}
        textSearch={textSearch}
        onOrderChange={onOrderChange}
        onSortChange={onSortChange}
        onTextSearchChange={onTextSearchChange}
      />
      <FilteredRepoList order={order} sort={sort} textSearch={textSearch} />
      <FilterForRepos
        order={order}
        sort={sort}
        textSearch={textSearch}
        onOrderChange={onOrderChange}
        onSortChange={onSortChange}
        onTextSearchChange={onTextSearchChange}
      />
    </>
  );
};

export default LatestReleases;
