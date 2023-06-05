import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";

/*
 * We wrap the App component with the Provider component.
 * The Provider component makes the given redux store available to any nested components.
 *
 * We have one store for our entire application.
 * But we can divide the store into slices, each slice managed by a different reducer.
 *
 * In Redux, you usually have multiple reducers to manage different parts of the state,
 * and you use Redux's combineReducers function to combine them into a single root reducer.
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
