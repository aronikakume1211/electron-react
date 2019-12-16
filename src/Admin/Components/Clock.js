import React, { Component } from 'react';
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }
    leading0(num) {
        return num < 10 ? '0' + num : num;
    }
    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            this.setState({ days, hours, minutes, seconds });
        }
    }
    render() {
        return (
            <div className="row" style={{margin:"16px"}}>
                <div className="Clock-days col-sm-3 " style={{
                    fontSize:"24px",
                    width:"200px",
                    height:"200px",
                    background:"#13001a",
                    marginLeft:"10px",
                    paddingLeft:"55px",
                    paddingTop:"80px",
                    paddingBottom:"50px",
                    borderRadius:"50%",
                    fontWeight:"bold",
                    color:"#fff"
                }}>
                    {this.leading0(this.state.days)}
                    Days
                    </div>
                <div className="Clock-hours col-sm-3"style={{
                    fontSize:"22px",
                    width:"200px",
                    height:"200px",
                    textAlign:"center",
                    background:"#260033",
                    marginLeft:"10px",
                    paddingLeft:"55px",
                    paddingTop:"80px",
                    paddingBottom:"50px",
                    borderRadius:"50%",
                    fontWeight:"bold",
                    color:"#fff"
                }}>
                    {this.leading0(this.state.hours)}
                    Hours
                    </div>
                <div className="Clock-minutes col-sm-3"
                style={{
                    fontSize:"20px",
                    width:"200px",
                    height:"200px",
                    background:"#39004d",
                    marginLeft:"10px",
                    paddingLeft:"55px",
                    paddingTop:"80px",
                    paddingBottom:"50px",
                    borderRadius:"50%",
                    fontWeight:"bold",
                    color:"#fff"

                }}>
                    {this.leading0(this.state.minutes)}
                    Minutes
                    </div>
                <div className="Clock-seconds col-sm-3"
                style={{
                    fontSize:"18px",
                    width:"200px",
                    height:"200px",
                    background:"#4d0066",
                    marginLeft:"10px",
                    paddingLeft:"55px",
                    paddingTop:"80px",
                    paddingBottom:"50px",
                    borderRadius:"50%",
                    fontWeight:"bold",
                    color:"#fff"
                }}>
                    {this.leading0(this.state.seconds)} Seconds
                    </div>
            </div>
        );
    }
}
export default Clock;