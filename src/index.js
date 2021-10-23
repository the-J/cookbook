import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import App from "./App";

Amplify.configure(awsconfig);
// @TODO run logger in dev mode
// Amplify.Logger.LOG_LEVEL = "DEBUG";

// @TODO possibly helpful
// const listener = Hub.listen("datastore", async (hubData) => {
//   const { event, data } = hubData.payload;
//   if (event === "ready") {
//     console.log("datastore ready");
//   }
// });
//
// // Remove listener
// listener();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// @TODO web vitals
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
