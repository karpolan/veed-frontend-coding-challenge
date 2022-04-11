# Frontend Coding Challenge

The idea of this project is to implement a small client application for discovering trending
repositories on GitHub.

A list of the repositories created in the last 7 days with the most number of stars in
github should be displayed and the user should be able to favourite them.
The favourited repositories should be visible either through a filter or in a different tab.

Some basic info about the repo should be displayed, such as: repo name, link to GitHub, description and number of stars. To keep things simple, the favourites won’t be sent back to GitHub’s servers but just
stored locally (e.g localstorage, cookies etc...).

🍎 Bonus task: if time allows, a language filter would be an awesome addition to have.

GitHub provides a public search endpoint which you can use for fetching the most starred repositories:

`https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc`

We value: clear, easy to understand code, use of semantic HTML, CSS naming conventions and tests. The technology you use is up to you, but we work with React so seeing this in the solution is always great as well. Have fun!

## Created using reate React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
