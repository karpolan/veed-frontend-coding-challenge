import { render, screen } from '@testing-library/react';
import { FavoriteReposProvider } from '../FavoriteReposContext';
import RepoList from './RepoList';

const repo1 = {
  id: 470962649,
  html_url: 'https://github.com/dair-ai/ML-Course-Notes',
  name: 'ML-Course-Notes',
};

const repo2 = {
  id: 471142135,
  html_url: 'https://github.com/neilsardesai/Manila',
  name: 'Manila',
};

const WrapperdComponent = (props) => (
  <FavoriteReposProvider>
    <RepoList {...props} />
  </FavoriteReposProvider>
);

describe('RepoList component', () => {
  //   beforeEach(() => {});

  it('renders self', () => {
    render(<WrapperdComponent repos={[repo1, repo2]} />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('supports .repos property as empty array ', () => {
    render(<WrapperdComponent repos={[]} />);
    const message = screen.getByText(/No repositories found/);
    expect(message).toBeInTheDocument();
  });
});
