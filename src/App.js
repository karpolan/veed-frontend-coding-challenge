/**
 * Main Application component
 */
const App = () => {
  return (
    <>
      <header>GitHub Trends</header>
      <main>Content here...</main>
      <footer>
        Copyright &copy; {new Date().getFullYear()}{' '}
        <a
          href="https://karpolan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          KARPOLAN
        </a>
      </footer>
    </>
  );
};

export default App;
