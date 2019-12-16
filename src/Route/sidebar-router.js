import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../componenets/home';
import Other from '../componenets/migrants';
import Akal_Gudat from '../componenets/akalGudat';
import Commercial_sex from '../componenets/commercial-sex-offenders';
import Drug_user from '../componenets/Drug-user';
import Elders from '../componenets/elders';
import Hiv_Adis from '../componenets/hiv-adis-positive';
import Mental_disorder from '../componenets/mental-disorder';
import Migrants from '../componenets/migrants';
import Street_Riders from '../componenets/Street-Riders';
import The_Beggers from '../componenets/The-beggars';
import Vulnerable_children from '../componenets/Vulnerable-children';
import Vulnerable_youth from '../componenets/Vulnerable-youth';
import logo from '../images/logo.png';
import Edit_hiv_adis from '../componenets/Forms/Edit_Hiv_adis';
import Delete_hiv_adis from '../componenets/Forms/Delete_Hiv_adis'
import Edit_Migrants from '../componenets/MigrantFroms/Edit_Migrant';
import Delete_migrants from '../componenets/MigrantFroms/Delete_Migrant';
import Delete_Akal_Gudat from '../componenets/AkalGudatForms/Delete_Akal_Gudat';
import Edit_Akal_Gudat from '../componenets/AkalGudatForms/Edit_Akal_Gudat';
import Delete_Mental from '../componenets/MentalForms/Delete_Mental';
import Edit_Mental from '../componenets/MentalForms/Edit_Mental';
import Delete_Drug_user from '../componenets/DrugForms/Delete_Drug_user';
import Edit_Drug_user from '../componenets/DrugForms/Edit_Drug_user';
import Delete_Vulenrable_youth from '../componenets/VulenrableYouthForms/Delete_Vulnerable-youth';
import Edit_Vulenrable_youth from '../componenets/VulenrableYouthForms/Edit_Vulnerable-youth';
import Delete_Sex from '../componenets/CommercialSexForms/Delete_Sex';
import Edit_Sex from '../componenets/CommercialSexForms/Edit_Sex'
import Delete_Beggar from '../componenets/TheBeggareForms/Delete_Beggar';
import Edit_Beggar from '../componenets/TheBeggareForms/Edit_Beggar';
import Delete_Street_Riders from '../componenets/StreetRidersForms/Delete_StreetRider';
import Edit_Street_Riders from '../componenets/StreetRidersForms/Edit_StreetRider';
import Delete_Vulnerable_children from '../componenets/VulnerableChildrenFroms/Delete_VulnerableChildren';
import Edit_Vulnerable_children from '../componenets/VulnerableChildrenFroms/Edit_VulnerableChildren';
import Delete_Elder from '../componenets/EldersForms/Delete_elder';
import Edit_Elder from '../componenets/EldersForms/Edit_elder';
import Delete_Home from '../componenets/HomeForms/Delete_Home';
import Edit_Home from '../componenets/HomeForms/Edit_Home';
import Home_Form from '../componenets/HomeForms/Home_form';
import Login from './Login';

const delete_routes = [
    {
        path: "/hiv-adis-positive/delete/",
        exact: true,
        main: () => <Delete_hiv_adis />
    },
    {
        path: "/migrants/delete/",
        main: () => <Delete_migrants />
    }
]

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
        main: () => <Akal_Gudat />,
        sidebar: () => <div>አካል ጉዳተኞች</div>
    },
    {
        path: "/elders",
        main: () => <Elders />,
        sidebar: () => <div>አረጋዊያን</div>
    },
    {
        path: "/Vulnerable-children",
        main: () => <Vulnerable_children />,
        sidebar: () => <div>ተጋላጭ ህፃናት</div>
    },
    {
        path: "/Street-Riders",
        main: () => <Street_Riders />,
        sidebar: () => <div>ጎዳና ተዳዳሪዎች</div>
    },
    {
        path: "/The-beggers",
        main: () => <The_Beggers />,
        sidebar: () => <div>ለምኖ አዳሪዎች</div>
    },
    {
        path: "/commercial-sex-offenders",
        main: () => <Commercial_sex />,
        sidebar: () => <div>ንግዳዊ ወሲብ ተዳዳሪዎች</div>
    },
    {
        path: "/hiv-adis-positive",
        main: () => <Hiv_Adis props={property} />,
        sidebar: () => <div>HIV/ADIS +</div>
    },
    {
        path: "/Vulnerable-youth",
        main: () => <Vulnerable_youth />,
        sidebar: () => <div>ተጋላጭ የሆኑ ወጣቶች</div>
    },
    {
        path: "/Drug-user",
        main: () => <Drug_user />,
        sidebar: () => <div>አደንዛዥ ዕፅ ተጠቃሚ</div>
    },
    {
        path: "/mental-disorder",
        main: () => <Mental_disorder />,
        sidebar: () => <div>አእምሮ ህሙማን</div>
    },
    {
        path: "/other",
        main: () => <Other />,
        sidebar: () => <div>Other</div>
    },
    {
        path: "/other",
        main: () => <Other />,
        sidebar: () => <div>Other</div>
    }
]
export default class sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 1
        };
        this.SelectedOption = this.SelectedOption.bind(this);

    }
    SelectedOption = (e) => {
        this.setState({
            language: this.state.language ? 0 : 1,

        })
        //console.log(this.state.language);
        //property=this.state.language;
        console.log(property = this.state.language);



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
                                {/* <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/other">Other</Link>
                                </li> */}
                            </ul>

                        </div>
                        <div style={{ flex: 1, padding: "0px" }}>

                            {/* <div style={{ overflowY: "hidden", width: "100%", backgroundColor: "black", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", position: "fixed" }}>
                                <div>
                                    <img src={logo} width="100px" height="40px" style={{ float: "left", paddingLeft: "40px" }} />
                                    <h1 style={{
                                        float: "left",
                                        color: "#fff",
                                        alignItems: "center",
                                        padding: "6px",
                                        border: "none",
                                        marginTop: "8px",
                                        paddingLeft: "400px",
                                        marginBottom: "8px",
                                        fontSize: "17px",
                                        borderRadius: "4px"
                                    }}>{<Switch>
                                        {
                                            routes.map((route, index) => (
                                                <Route
                                                    key={index}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    children={route.sidebar}
                                                />
                                            ))
                                        }
                                    </Switch>}
                                    </h1>
                                    <div style={{
                                        float: "right",
                                        padding: "3px",
                                        border: "none",
                                        marginTop: "2px",
                                        marginRight: "16px",
                                        marginBottom: "2px",
                                        fontSize: "17px",
                                        borderRadius: "4px"
                                    }}>
                                        <input
                                            type="text"
                                            placeholder={this.state.language ? "ፈልግ . . ." : "Search . . ."}
                                            style={{

                                                padding: "4px",
                                                border: "none",
                                                fontSize: "17px",
                                                borderRadius: "20px",
                                                marginRight: "20px"
                                            }} />
                                        {/* <Link to="/" className="btn btn-primary" disabled><span className="glyphicon glyphicon-logout"></span>
                            
                                           
                                                Logout
         
                                        </Link> 

                                        {/* <select style={{

                                            padding: "4px",
                                            border: "none",
                                            fontSize: "17px",
                                            borderRadius: "20px",
                                            marginLeft: "5px"
                                        }} onChange={this.SelectedOption}>
                                            <option value="1">{this.state.language ? "አማርኛ" : "Amahric"}</option>
                                            <option value="0">{this.state.language ? "እንግሊዘኛ" : "English"}</option>
                                        </select> *
                                    </div>

                                </div>
                            </div> */}
                            <div style={{ flex: 1, padding: "15px", marginLeft: "15%", marginTop: "6%" }}>
                                <Route path="/forms" component={Home_Form} />
                                
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
                                <div style={{ borderRadius: "20px" }}>
                                    <Route path="/hiv-adis-positive/delete/:id" component={Delete_hiv_adis} />
                                    <Route path="/migrants/delete/:id" component={Delete_migrants} />
                                    <Route path="/akalGudat/delete/:id" component={Delete_Akal_Gudat} />
                                    <Route path="/mental-disorder/delete/:id" component={Delete_Mental} />
                                    <Route path="/Drug-user/delete/:id" component={Delete_Drug_user} />
                                    <Route path="/Vulnerable-youth/delete/:id" component={Delete_Vulenrable_youth} />
                                    <Route path="/commercial-sex-offenders/delete/:id" component={Delete_Sex} />
                                    <Route path="/The-beggers/delete/:id" component={Delete_Beggar} />
                                    <Route path="/Street-Riders/delete/:id" component={Delete_Street_Riders} />
                                    <Route path="/Vulnerable-children/delete/:id" component={Delete_Vulnerable_children} />
                                    <Route path="/elders/delete/:id" component={Delete_Elder} />
                                    <Route path="/delete/:id" component={Delete_Home} />
                                    
                                </div>
                                <Route path="/hiv-adis-positive/edit/:id" component={Edit_hiv_adis} />
                                <Route path="/migrants/edit/:id" component={Edit_Migrants} />
                                <Route path="/akalGudat/edit/:id" component={Edit_Akal_Gudat} />
                                <Route path="/mental-disorder/edit/:id" component={Edit_Mental} />
                                <Route path="/Drug-user/edit/:id" component={Edit_Drug_user} />
                                <Route path="/Vulnerable-youth/edit/:id" component={Edit_Vulenrable_youth} />
                                <Route path="/commercial-sex-offenders/edit/:id" component={Edit_Sex} />
                                <Route path="/The-beggers/edit/:id" component={Edit_Beggar} />
                                <Route path="/Street-Riders/edit/:id" component={Edit_Street_Riders} />
                                <Route path="/Vulnerable-children/edit/:id" component={Edit_Vulnerable_children} />
                                <Route path="/elders/edit/:id" component={Edit_Elder} />
                                <Route path="/edit/:id" component={Edit_Home} />
                            </div>

                        </div>

                    </div>

                </Router>
            </div>
        );
    }
}

