import React, { Component } from 'react'
import MorningButton from './morningbutton';

class Calendar extends React.Component {
    state = {
        count: 0,
        days: 0,
        nights: 0
    };
    render() { 
        console.log('elo');
        return <div>
            
        <table className='table'>
            <thead>
            <tr>
                <th><MorningButton /></th>
                <th><MorningButton /></th>
                <th><MorningButton /></th>
                <th><MorningButton /></th>
                <th><MorningButton /></th>
                <th><MorningButton /></th>
                <th><MorningButton /></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
            </tr>
            <tr>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
            </tr>
            <tr>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
            </tr>
            <tr>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
                <td><MorningButton /></td>
            </tr>
            </tbody>
        </table>
     
        </div>;
    }
}
 
export default Calendar;