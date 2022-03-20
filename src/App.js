import { FavoriteReposProvider } from './components/FavoriteReposContext';
import FavoriteRepos from './views/FavoriteRepos';
import LatestReleases from './views/LatestReleases';

/**
 * Main Application component
 */
const App = () => {
  return (
    <FavoriteReposProvider>
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
    </FavoriteReposProvider>
  );
};

export default App;
