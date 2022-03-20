import { FavoriteReposProvider } from './components/FavoriteReposContext';
import TabView from './views/TabView';
import './App.css'; // Shared across App CSS styles

/**
 * Main Application component
 * Note: using of global CSS styles in this component just for demo purposes
 */
const App = () => {
  return (
    <FavoriteReposProvider>
      <header>
        <h1>GitHub Trends</h1>
      </header>
      <main>
        <TabView />
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
