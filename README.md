# 10up Technical Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To start

1. Clone the project to your local machine
2. Go to the project root directory in Terminal (Mac/Linux) or Command (Windows)
3. Run 'npm i' to install all dependencies
4. Run 'npm run start' to start the project in development mode
5. Run 'npm run build' to build a production ready assets (which can then be deployed to a web server/cdn)

## Global Objectives

As outlined in the provided test documentation.

### how you scaffold your application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project uses React-Router for the route management.

This project uses React Hooks for state management.

This project uses Axios for all HTTP requests.

N.B. I have specifically chosen libraries that will work on both for client and server-side rendering, as this was one of the future requirements.

Below is a description of the folder decisions made:

- "/components" will contain all React components that are not specifically route-level elements (pages).
- "/constants" will contain all shared constant values
- "/lib" will contain all functional JS code, that is not specifically a React (or UI) component
- "/pages" will contain all route-level elements (pages)

I have also ensured that each function and component will be contained within a folder, to allow greater visibility when editing the code, and to ensure that components can have complimentary files within the same location, e.g. styles and tests.

### follow React best practices

All functions and components are designed to only do one thing, and one thing well. This allows for better maintainability, re-use and testing

All functions and components should be well named, and structured so as to make maintainability and finding components easier.

Currently, CSS is not embedded into the JS, but could be easily done so as all CSS is split into the necessary component folder structure.

I would also like to refactor and DRY the API requests in both the 'src/pages/page/index.js' and 'src/components/post/list' files.

### utilize build processes

I am utilising the built-in build processes of Create React App, which is built on top of an opinionated version of Webpack

### implement a routing strategy

I am utilising React Router for the routing, and have utilised the dynamic URL generation to retrieve the "About Us" page with the slug rather than hardcoding it.

### handle state management

I am using React Hooks to handle state management, which allows functions to access and set state internally across the application without the need for HOCs (like Redux).

## Authentication Objectives

### how you handle the authentication flow

I am using a custom hook to handle all authentication and state management. I have purposefully left the login redirect within the login page, as there may be multiple login screens with different functionality in the future - or even the abililty to remember where the user clicked the login function, so the application could return there in the future.

### store tokens

I am storing my tokens in localstorage so the state persists across windows and if the tab/window has been closed.

### handle expired tokens

I am passing the Authorization header with every request, if the user has logged in. If the request returns an error, I will automatically log the user out and re-render the page.

Unfortunately, I am unable to distinguish between standard network errors and token errors, as the API fails to respond (Network Error) rather than supplying a valid error response.

## Requirements

[*] Application utilizing the provided HTML/CSS and following the specifications.
[*] No server-side rendering is required, though we’d like the application built in such a way that server side rendering could be added in the future.
[*] Modern JavaScript best practices.
[*] No page reloads necessary.
[*] Built using React.
[*] Login/logout functionality using JSON Web Token authentication.
