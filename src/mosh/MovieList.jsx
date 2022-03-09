import React, { Component } from "react";
import MovieRow from "./MovieRow";
import UserContext from "./userContext";

function MovieList() {
  return (
    <UserContext.Consumer>
      {(displayingFunction) => (
        <div>
          Putin kurwa jebana
          {displayingFunction.button ? displayingFunction.button : ""}{" "}
          <MovieRow />
        </div>
      )}
    </UserContext.Consumer>
  );
}
export default MovieList;
