import React, { Component } from 'react';
import Clock from './Clock';
class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = { deadline: 'May, 4, 2020' };
    }
    render() {
        return (
            <div className="App">
                <div className="App-title">
                    <p style={{
                        color:"#13001a",
                        fontSize:"28px"
                    }}>{this.props.title}</p>
                    <h1 style={{
                        color: "red"
                    }}>Comeing Soon...</h1>
                </div>
                <div className="App-date">
                    May, 2020
                </div>
                <Clock deadline={this.state.deadline} />
                ***********
                <h1 style={{
                        color: "red"
                    }}>በቅርብ ቀን ይጠብቁን...</h1>
                    *********
                    
            </div>
        );
    }
}

export default AdminHome;
