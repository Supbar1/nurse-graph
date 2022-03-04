import React, { Component } from 'react';
import MovieRow from './MovieRow';
import UserContext from './userContext';

class MovieList extends Component {
componentDidMount() {
    console.log("context", this.context) 
}

    render() {
        return (
            <UserContext.Consumer>
            { fantastycznaZabawa => <div>
                Putin kurwa jebana {fantastycznaZabawa.currentUser ? fantastycznaZabawa.currentUser.name : ""}{" "} <MovieRow />
            </div> }
            </UserContext.Consumer>
            );
    }
}
MovieList.contextType = UserContext;
export default MovieList;