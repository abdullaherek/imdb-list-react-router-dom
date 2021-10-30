import "./style/styles.scss"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Movies } from "./components/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/Top250Movies/pk_5g8ie7oxtyveni2lp")
      .then((res) => setMovies([res.data]))
      .catch((error) => console.log(error));
  }, []);
console.log(movies);
  return (
    <Router>
      <div className="App"> 
        <Route
          path="/imdb-list-react-router-dom"
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
