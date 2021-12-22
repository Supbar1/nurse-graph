import React, { Component } from 'react'

class NightButton extends React.Component {
    state = {
        nights: 0
    };
    
    styles = {
        fontSize: 100
    };

    incrementNights = () => {
        this.setState({nights: this.state.nights + 1});
    }


    render() { 
        if (this.state.nights > 0) 
        return <span style={this.styles} class='badge m-2 badge-info'>Noc</span>;
        return (
        <div>
            <span style={this.styles} className={this.getNightClasses()}>{this.state.nights}</span>
            <button onClick={this.incrementNights} className='btn btn-secondary'>Noc</button>
        </div>
        );
    }

    getNightClasses() {
        let classes = "badge m-2 badge-";
        classes+= this.state.nights=== 0 ? "danger" : "info";
        return classes;
    }
    getCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default NightButton;