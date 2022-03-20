import React from 'react';
import { useLocalStorage } from '../hooks';
import FavoriteRepos from './FavoriteRepos';
import LatestReleases from './LatestReleases';

// Sample of inline styles applied in run-time
const styleTabDefault = {
  margin: '0.5rem',
};
const styleTabSelected = {
  ...styleTabDefault,
  color: '#ffffff',
  backgroundColor: '#0969da',
  borderColor: 'rgba(27, 31, 36, 0.15)',
};

/**
 * Renders a Tabs view to switch between "Latest Releases" and "Favorite Repositories" views
 * Note: using of inline styles in this component just for demo purposes
 */
const TabView = () => {
  const [tabIndex, setTabIndex] = useLocalStorage('tab', 0);

  const onTabChange = (event) => {
    setTabIndex(event?.target?.value);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <button value={0} style={tabIndex === '0' ? styleTabSelected : styleTabDefault} onClick={onTabChange}>
          Latest Releases
        </button>
        <button value={1} style={tabIndex === '1' ? styleTabSelected : styleTabDefault} onClick={onTabChange}>
          Favorite Repositories
        </button>
      </div>
      {tabIndex === '0' ? <LatestReleases /> : <FavoriteRepos />}
    </>
  );
};

export default TabView;
