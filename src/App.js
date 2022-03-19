import { endOfDay, format, subDays } from 'date-fns';
import FavoriteRepos from './views/FavoriteRepos';
import LatestReleases from './views/LatestReleases';

/**
 * Main Application component
 */
const App = () => {
  console.log('date', format(endOfDay(subDays(new Date(), 7)), 'yyyy-MM-dd'));

  return (
    <>
      <header>GitHub Trends</header>
      <main>
        <FavoriteRepos />
        <LatestReleases />
      </main>
      <footer>
        Copyright &copy; {new Date().getFullYear()}{' '}
        <a href="https://karpolan.com" target="_blank" rel="noopener noreferrer">
          KARPOLAN
        </a>
      </footer>
    </>
  );
};

export default App;
