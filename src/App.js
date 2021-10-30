import "./style/styles.scss"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Movies } from "./components/Movies";
const API_KEY = process.env.REACT_APP_API_KEY  

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(API_KEY)
      .then((res) => setMovies([res.data]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Router>
      <div className="App"> 
        <Route
          path="/"
          exact
          render={() =>
            movies.map((movie, i) => (
              <div key={i} className="movies-container">
                {movie.items.map((fullMovie) => (
                  <Link
                    to={`movie/${fullMovie.id}`}
                    className="link"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div style={{ textAlign: "center" }}>
                      {fullMovie.fullTitle}
                    </div>
                    <hr></hr>
                  </Link>
                ))}
              </div>
            ))
          }
        />

        <Route
          path="/movie/:code"
          render={(renderProps) => {
            const movie = movies.map((firstStep) =>
              firstStep.items.find(
                (bul) => bul.id === renderProps.match.params.code
              )
            );
            return <Movies {...renderProps} movie={movie} />;
          }}
        />
      </div>
    </Router>
  );
}

export default App;
