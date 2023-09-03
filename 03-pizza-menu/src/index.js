import React from "react";
import ReactDOM from "react-dom/client";

// The entry point of a react app should be index.js, becuase from the lessons of webpack,
// the entry point value is index.js

// This is just a convention
function App() {
  return <h1>Hello React!!!</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
