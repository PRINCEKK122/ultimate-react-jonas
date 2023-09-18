import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import './index.css';
import App from './App';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <>
//       <StarRating maxRating={7} color="blue" onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars.</p>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} size={24} color="red" className="test" />
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating />
    <Test /> */}
  </React.StrictMode>
);
