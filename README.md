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

## Exercise Guidelines

Build a checkout experience! As you know, Eventbrite is an events platform where creators create events and consumers can purchase tickets to those events (the latter is the side you're likely more familiar with). We don't expect you to build out our entire checkout flow, but let's start by building a simple modal for an event where:
- Step 1:
    - Display the name, date, and event image from the `Event` object
    ![Image of Event Header](https://user-images.githubusercontent.com/41654211/95794865-c33ebe80-0c9d-11eb-9089-505e4f3ec94d.png)
    - List the ticket classes available for purchase
    ![Image of Tickets](https://user-images.githubusercontent.com/41654211/95794917-e79a9b00-0c9d-11eb-861c-fbf67a741e1b.png)
    - Enable a selection of 1-10 tickets per ticket class (you can ignore the min and max on the ticket classes)
    ![Image of Ticket Dropdown](https://user-images.githubusercontent.com/41654211/95794955-fd0fc500-0c9d-11eb-8b0c-00cd56b10b62.png)
    - Dynamically show the tickets being selected
    - Dynamically calculate the `Total` computed from the `cost + fee + tax` on the ticket class object
    ![Image of Order Summary](https://user-images.githubusercontent.com/41654211/95794992-1add2a00-0c9e-11eb-9255-2e17247c90f1.png)

- Step 2:
    - Click the `Checkout` button
    ![Image of Checkout](https://user-images.githubusercontent.com/41654211/95795070-524bd680-0c9e-11eb-8988-279abe0d6f22.png)
    - Mock the API `POST` request to place an order. This should include the name and email of the attendee, the ticket classes, and cost breakdown.
    - Navigate to a confirmation screen once the request is successful

- Step 3:
    - Think about what one thing you would do to improve the first page of our checkout flow (we'll talk about this more during the TPS).
    ![Image of Checkout Flow](https://user-images.githubusercontent.com/41654211/95795176-917a2780-0c9e-11eb-8af0-72571f8005dc.png)

### Resources

- [QA event to use as a model](https://www.evbqa.com/e/principal-fe-interview-tickets-82187949369)
- [API docs and access to an API key](https://www.eventbrite.com/platform/)
- [Orders documentation](https://www.eventbrite.com/platform/docs/orders)
    * Only our `GET` endpoint for orders are public and you can access those above but you'll need to mock out the `POST` request for the order
