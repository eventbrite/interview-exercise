# Hello from Eventbrite!

This repository is a boilerplate for you to use as a starting point for your exercise.
Feel free to change anything on it, this is here only to speed you up on getting started. If you need to change any configurations or add/remove packages or code feel free to do so.

## About this repository.

This repo has all the basic dependencies needed to create a React application.
- It uses [NPM](https://docs.npmjs.com/) to manage javascript dependencies like [React](https://reactjs.org/docs/getting-started.html) and [React DOM](https://reactjs.org/docs/react-dom.html).
- It runs [Webpack](https://webpack.js.org/concepts/) to compile [JSX](https://reactjs.org/docs/introducing-jsx.html) into javascript via [Babel](https://babeljs.io/docs/en/)
- It runs [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/) to allow on-the-fly re-compilation as you change your `.js` files for a smooth development experience.
- Additionally it runs a [Express](https://expressjs.com/en/guide/routing.html) node server to use in case any REST APIs are needed.

To run this repository you will need to have installed
- [Nodejs and NPM](https://nodejs.org/en/download/)

### Running the application
To run the application open a terminal on the project root folder and run

```
$> npm start
```

This will install all js dependencies, and run the servers.

**A browser should open on [http://localhost:8080](http://localhost:8080/).
If not load it manually.**

The Express API server runs on [http://localhost:3000](http://localhost:3000/), but you can more easily access it on [http://localhost:8080/api](http://localhost:8080/api).

Make sure both these ports are available when you run the app.

### Files in this Repo

- `package.json`: This is the package manifest for the project. It lists the project dependencies and the runnable scripts (like `npm start`)
- `webpack.config.js`: This is the webpack configuration. Describes the compilation process for the `.js` files. It also contains the `webpack-dev-server` configuration that allows your changes to be automatically be re-compiled and refreshed on the page while developing.
- `index.html`: This is the main page for the app, it loads the javascript and css resources for the app. We provide `eds.css`, our internal css boilerplate, feel free to remove if not familiarized.
- `src/index.js`: The javascript entry point of the app, it only contains logic to render the App main react component.
- `src/App.js`: The App main react component, contains a simple example of how to call the API server.
- `server/index.js`: The API server logic, runs alongside `webpack-dev-server` when you run `npm start`, you can add endpoints if you need. The server will be re-run when you change this file. You might have to refresh the page manually to see the API changes take effect on the app.
