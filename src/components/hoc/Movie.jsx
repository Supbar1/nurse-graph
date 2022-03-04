import React, { Component } from 'react';
import withTooltip from './withTooltip';

class Movie extends Component {
    
    render() {
        return (
            <div >
                Kiedy pan Wołodyjowski po raz 4 otwierał trumnę,
                spodziewał się że znajdzie w niej Draculę
                {this.props.showTooltip && <div>NIE MYLIŁ SIĘ!</div>}
            </div>
        );
    }
}

export default withTooltip(Movie);