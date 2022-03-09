import React, { Component } from "react";
import MoviePage from "./MoviePage";
import UserContext from "./userContext";
import Login from "./Login";
import CartContext from "./cartContext";

class Srapp extends Component {
  handleLoggedIn = (username) => {
    console.log("Getting the user: " + username);
    const user = { name: "Bartolini" };
    this.setState({ currentUser: user });
  };
  state = {
    currentUser: { name: Bartek },
  };
  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default Srapp;
