import React, { Component } from 'react'

class MorningButton extends React.Component {
    
    
    styles = {
        fontSize: 100
    };

    incrementDays = () => {
        this.setState({days: this.props.days + 1});
    }
    incrementNights = () => {
        this.setState({nights: this.props.nights + 1});
    }


    render() { 
        if (this.props.nights > 0) 
        return <span style={this.styles} class='badge m-2 badge-info'>Noc</span>;
        if (this.props.days > 0) 
        return <span style={this.styles} class='badge m-2 badge-info'>Dzien</span>;
        return (
        <div>
            {/* <span style={this.styles} className={this.getDayClasses()}>{this.state.days}</span>
            <span style={this.styles} className={this.getNightClasses()}>{this.state.nights}</span> */}
            <button onClick={this.incrementDays} className='btn btn-warning'>Dzień</button>
            <button onClick={this.incrementNights} className='btn btn-secondary'>Noc</button>
        </div>
        );
    }

    getDayClasses() {
        let classes = "badge m-2 badge-";
        classes+= this.props.days=== 0 ? "danger" : "info";
        return classes;
    }
    getNightClasses() {
        let classes = "badge m-2 badge-";
        classes+= this.props.nights=== 0 ? "danger" : "info";
        return classes;
    }
    getCount() {
        const {count} = this.props;
        return count === 0 ? "Zero" : count;
    }
}
 
export default MorningButton;