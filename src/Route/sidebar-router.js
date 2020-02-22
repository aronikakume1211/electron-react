import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../componenets/home';
import AkalGudat from '../componenets/akalGudat';
import Commercialsex from '../componenets/commercial-sex-offenders';
import Druguser from '../componenets/Drug-user';
import Elders from '../componenets/elders';
import HivAdis from '../componenets/hiv-adis-positive';
import Mentaldisorder from '../componenets/mental-disorder';
import Migrants from '../componenets/migrants';
import StreetRiders from '../componenets/Street-Riders';
import TheBeggers from '../componenets/The-beggars';
import Vulnerablechildren from '../componenets/Vulnerable-children';
import Vulnerableyouth from '../componenets/Vulnerable-youth';
import HomeForm from '../componenets/HomeForms/Home_form';
let property = 1;
const routes = [
    {
        path: "/home/Home",
        exact: true,
        main: () => <Home />,
        sidebar: () => <div>ቀጥታ ድጋፍ</div>
    },
    {
        path: "/migrants",
        main: () => <Migrants />,
        sidebar: () => <div>ከስደት ተመላሽ</div>
    },
    {
        path: "/akalGudat",
        main: () => <AkalGudat />,
        sidebar: () => <div>አካል ጉዳተኞች</div>
    },
    {
        path: "/elders",
        main: () => <Elders />,
        sidebar: () => <div>አረጋዊያን</div>
    },
    {
        path: "/Vulnerable-children",
        main: () => <Vulnerablechildren />,
        sidebar: () => <div>ተጋላጭ ህፃናት</div>
    },
    {
        path: "/Street-Riders",
        main: () => <StreetRiders />,
        sidebar: () => <div>ጎዳና ተዳዳሪዎች</div>
    },
    {
        path: "/The-beggers",
        main: () => <TheBeggers />,
        sidebar: () => <div>ለምኖ አዳሪዎች</div>
    },
    {
        path: "/commercial-sex-offenders",
        main: () => <Commercialsex />,
        sidebar: () => <div>ንግዳዊ ወሲብ ተዳዳሪዎች</div>
    },
    {
        path: "/hiv-adis-positive",
        main: () => <HivAdis props={property} />,
        sidebar: () => <div>HIV/ADIS +</div>
    },
    {
        path: "/Vulnerable-youth",
        main: () => <Vulnerableyouth />,
        sidebar: () => <div>ተጋላጭ የሆኑ ወጣቶች</div>
    },
    {
        path: "/Drug-user",
        main: () => <Druguser />,
        sidebar: () => <div>አደንዛዥ ዕፅ ተጠቃሚ</div>
    },
    {
        path: "/mental-disorder",
        main: () => <Mentaldisorder />,
        sidebar: () => <div>አእምሮ ህሙማን</div>
    },
   
]
export default class sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 1
        };
     
    }
    render() {
        return (
            <div>
                <Router>
                    <div style={{ display: "flex" }} className="Sidenav">
                        <div
                            style={{
                                height: "100%",
                                width: "15%",
                                position: "fixed",
                                zIndex: "1",
                                top: "41px",
                                left: "0",
                                overflowX: "hidden",
                                paddingTop: "15px",
                                background: "#fff",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                            }}
                        >
                            <ul style={{
                                listStyleType: "none",
                                padding: "0px 8px 6px 0px",
                                textDecoration: "none",
                                fontSize: "25px",
                                //color: "#818181",
                                display: "block",
                                textDecoration: "none"

                            }}>
                                <li style={{
                                    marginLeft:"10px"
                                }}>
                                <input
                                            type="text"
                                            placeholder="Search . . ."
                                            style={{
                                                padding: "4px",
                                                border:"none",
                                                borderBottom:"1px solid",
                                                fontSize: "17px",
                                                borderColor:"#0099ff",
                                                color:"#0099ff"
                                               
                                               
                                            }} />
                                </li>
                                <li>
                                    <Link to="/home/Home" className="btn btn-default"><span className="glyphicon glyphicon-home"></span>{this.state.language ? " ቀጥታ ድጋፍ" : " Direct Help"}</Link>
                                </li>
                                <li>
                                    <Link to="/hiv-adis-positive" className="btn btn-default"><span className="glyphicon glyphicon-scissors"></span>{this.state.language ? " ኤች አይ ቪ ኤድስ +" : " HIV/ADIS +"}</Link>
                                </li>
                                <li>
                                    <Link to="/migrants" className="btn btn-default"><span className="glyphicon glyphicon-th"></span>{this.state.language ? " ከስደት ተመላሽ" : " Migrants"}</Link>
                                </li>
                                <li>
                                    <Link to="/akalGudat" className="btn btn-default"><span className="glyphicon glyphicon-th-list"></span>{this.state.language ? " አካል ጉዳተኞች" : " Akal Gudat"}</Link>
                                </li>
                                <li>
                                    <Link to="/elders" className="btn btn-default"><span className="glyphicon glyphicon-user"></span>{this.state.language ? " አረጋዊያን" : " Elders"}</Link>
                                </li>
                                <li>
                                    <Link to="/Vulnerable-children" className="btn btn-default"><span className="glyphicon glyphicon-film"></span>{this.state.language ? " ተጋላጭ ህፃናት" : " Vulnerable Children"}</Link>
                                </li>
                                <li>
                                    <Link to="/Street-Riders" className="btn btn-default"><span className="glyphicon glyphicon-th"></span>{this.state.language ? " ጎዳና ተዳዳሪዎች" : " Street Riders"}</Link>
                                </li>
                                <li>
                                    <Link to="/The-beggers" className="btn btn-default"><span className="glyphicon glyphicon-oil"></span>{this.state.language ? " ለምኖ አዳሪዎች" : " The Beggers"}</Link>
                                </li>
                                <li>
                                    <Link to="/commercial-sex-offenders" className="btn btn-default"><span className="glyphicon glyphicon-th"></span>{this.state.language ? " ንግዳዊ ወሲብ ተዳዳሪዎች" : " Commercial sex offender"}</Link>
                                </li>

                                <li>
                                    <Link to="/Vulnerable-youth" className="btn btn-default"><span className="glyphicon glyphicon-th"></span>{this.state.language ? " ተጋላጭ የሆኑ ወጣቶች" : " Vulnerable Youth"}</Link>
                                </li>
                                <li>
                                    <Link to="/Drug-user" className="btn btn-default"><span className="glyphicon glyphicon-pushpin"></span>{this.state.language ? " አደንዛዥ ዕፅ ተጠቃሚ" : " Drug Users"}</Link>
                                </li>
                                <li>
                                    <Link to="/mental-disorder" className="btn btn-default"><span className="glyphicon glyphicon-lock"></span>{this.state.language ? " አእምሮ ህሙማን" : " Mental Disorders"}</Link>
                                </li>
                            </ul>
                        </div>
                        <div style={{ flex: 1, padding: "0px" }}>
                            <div style={{ flex: 1, padding: "15px", marginLeft: "15%", marginTop: "6%" }}>
                                <Route path="/forms" component={HomeForm} />
                                
                                <Switch>
                                    {
                                        routes.map((route, index) => (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                exact={route.exact}
                                                children={<route.main />}
                                            />
                                        ))
                                    }

                                </Switch>
                                
                            </div>

                        </div>

                    </div>

                </Router>
            </div>
        );
    }
}

