import { formatISO, subDays, subHours } from 'date-fns';
import { render, screen } from '@testing-library/react';
import { FavoriteReposProvider } from '../FavoriteReposContext';
import RepoItem from './RepoItem';

const minPropsToTest = {
  id: 470962649,
  html_url: 'https://github.com/dair-ai/ML-Course-Notes',
  name: 'ML-Course-Notes',
};

const WrapperdComponent = (props) => (
  <FavoriteReposProvider>
    <RepoItem {...props} />
  </FavoriteReposProvider>
);

describe('RepoItem component', () => {
  //   beforeEach(() => {});

  it('renders self', () => {
    render(<WrapperdComponent {...minPropsToTest} />);

    const title = screen.getByText(minPropsToTest.name).closest('h3');
    expect(title).toBeInTheDocument();

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', minPropsToTest.html_url);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('supports .description property', () => {
    const testingValue = 'Some description';
    render(<WrapperdComponent {...minPropsToTest} description={testingValue} />);
    const description = screen.getByText(testingValue);
    expect(description).toBeInTheDocument();
  });

  it('supports .language property', () => {
    const testingValue = 'Some language';
    render(<WrapperdComponent {...minPropsToTest} language={testingValue} />);
    const text = screen.getByText(testingValue);
    expect(text).toBeInTheDocument();
  });

  it('supports .stargazers_count property', () => {
    const testingValue = 123;
    render(<WrapperdComponent {...minPropsToTest} stargazers_count={testingValue} />);
    const text = screen.getByText(testingValue);
    const icon = text.firstChild;
    expect(text).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('supports .forks_count property', () => {
    const testingValue = 321;
    render(<WrapperdComponent {...minPropsToTest} forks_count={testingValue} />);
    const text = screen.getByText(testingValue);
    const icon = text.firstChild;
    expect(text).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('supports .updated_at property older then 30 days', () => {
    const testingValue = '1977-04-23';
    const testingResult = /Apr 23, 1977/;
    render(<WrapperdComponent {...minPropsToTest} updated_at={testingValue} />);
    const text = screen.getByText(testingResult);
    expect(text).toBeInTheDocument();
  });

  it('supports .updated_at property younger then 30 days', () => {
    const testingValue = formatISO(subDays(new Date(), 15));
    const testingResult = /15 days ago/;
    render(<WrapperdComponent {...minPropsToTest} updated_at={testingValue} />);
    const text = screen.getByText(testingResult);
    expect(text).toBeInTheDocument();
  });

  it('supports .updated_at property younger then 1 day', () => {
    const testingValue = formatISO(subHours(new Date(), 12));
    const testingResult = /12 hours ago/;
    render(<WrapperdComponent {...minPropsToTest} updated_at={testingValue} />);
    const text = screen.getByText(testingResult);
    expect(text).toBeInTheDocument();
  });
});
