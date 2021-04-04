# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Project Structure/Decisions
- Used CRA with typescript as suggested. There is actually an outdated instruction in the project pdf. The command should be `yarn create react-app <project_name> --template typescript`. Not sure if that was intentional
- Added node-sass, axios, and classnames packages
- Used custom hooks and functional components

## Didn't have time for...

### Component Structure
- I would have probably moved the header to a separate component if I had more time and maybe even the buttons
### Tests
- In the 4 hr time limit I was able to get the types added but didn't have time to write any tests. Normally I would do a mix of unit, integration, and e2e using, jest, react-testing-library,  enzyme, playwright/puppeteer

### Style/Responsive Mobile
- I focused more on the component and state logic in the 4 hrs and didn't have time to do much beyond basic style. I would refine it much more for a production client and add either responsive breakpoints for mobile or just use flex-box

### State management
- If the project got any bigger I would likely use context API or Redux to avoid prop-drilling. Also, no state is currently persisted on browser refresh. I would use some remote state store library or localStorage if that was a requirement

### Loading State
- I only had time for a basic "loading" component. I would make custom one or use a library to create a better loading UX
### Shared Component Library
- For a large production client I would use something like StoryBook for reuseable components
### Linting
- I would customize lin ting and autofix settings for a production project

### TSDoc
- Might not be as necessary with TS than JSDoc is for JS but I would usually add TSDoc descriptions for all functions and components/hook before submitting a PR
### Node Proxy Layer
- In production React apps I usually have a backend Node proxy server that serves the client bundle but also proxies all API calls from the client to handle CORS issues as well as keeping credentials out of the client bundle

### Logging/Monitoring/Error Handling
- I would implement a logging/monitoring library before going to production

### CI/CD
- I would dockerize the app and setup CI/CD environments adn pipeline

