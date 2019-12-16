import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Components/AdminHome';
import Other from '../Components/AdminHome';
import Akal_Gudat from '../Components/AdminHome';
import Commercial_sex from '../Components/AdminHome';
import Drug_user from '../Components/AdminHome';
import Elders from '../Components/AdminHome';
import Hiv_Adis from '../Components/AdminHome';
import Mental_disorder from '../Components/AdminHome';
import Migrants from '../Components/AdminHome';
import Street_Riders from '../Components/AdminHome';
import The_Beggers from '../Components/AdminHome';
import Vulnerable_children from '../Components/AdminHome';
import Vulnerable_youth from '../Components/AdminHome';
import logo from '../../images/logo.png';
// import Edit_hiv_adis from '../componenets/Forms/Edit_Hiv_adis';
// import Delete_hiv_adis from '../componenets/Forms/Delete_Hiv_adis'
// import Edit_Migrants from '../componenets/MigrantFroms/Edit_Migrant';
// import Delete_migrants from '../componenets/MigrantFroms/Delete_Migrant';
// import Delete_Akal_Gudat from '../componenets/AkalGudatForms/Delete_Akal_Gudat';
// import Edit_Akal_Gudat from '../componenets/AkalGudatForms/Edit_Akal_Gudat';
// import Delete_Mental from '../componenets/MentalForms/Delete_Mental';
// import Edit_Mental from '../componenets/MentalForms/Edit_Mental';
// import Delete_Drug_user from '../componenets/DrugForms/Delete_Drug_user';
// import Edit_Drug_user from '../componenets/DrugForms/Edit_Drug_user';
// import Delete_Vulenrable_youth from '../componenets/VulenrableYouthForms/Delete_Vulnerable-youth';
// import Edit_Vulenrable_youth from '../componenets/VulenrableYouthForms/Edit_Vulnerable-youth';
// import Delete_Sex from '../componenets/CommercialSexForms/Delete_Sex';
// import Edit_Sex from '../componenets/CommercialSexForms/Edit_Sex'
// import Delete_Beggar from '../componenets/TheBeggareForms/Delete_Beggar';
// import Edit_Beggar from '../componenets/TheBeggareForms/Edit_Beggar';
// import Delete_Street_Riders from '../componenets/StreetRidersForms/Delete_StreetRider';
// import Edit_Street_Riders from '../componenets/StreetRidersForms/Edit_StreetRider';
// import Delete_Vulnerable_children from '../componenets/VulnerableChildrenFroms/Delete_VulnerableChildren';
// import Edit_Vulnerable_children from '../componenets/VulnerableChildrenFroms/Edit_VulnerableChildren';
// import Delete_Elder from '../componenets/EldersForms/Delete_elder';
// import Edit_Elder from '../componenets/EldersForms/Edit_elder';
// import Delete_Home from '../componenets/HomeForms/Delete_Home';
// import Edit_Home from '../componenets/HomeForms/Edit_Home';
// import Home_Form from '../componenets/HomeForms/Home_form';
// import Login from './Login';
import App from '../../App';




const routes = [
    {
        path: "/admin",
        main: () => <Home title="አስማሚ የቀረቡ አቤቱታዎች" />,
        sidebar: () => <div> አስማሚ የቀረቡ አቤቱታዎች</div>
    },
    {
        path: "/migrants",
        main: () => <Migrants title="ፍ/ቤት የቀረቡ ክርክሮች" />,
        sidebar: () => <div>ፍ/ቤት የቀረቡ ክርክሮች</div>
    },
    {
        path: "/akalGudat",
        main: () => <Akal_Gudat title="አሰሪና ሰራተኛ ክርክሮች" />,
        sidebar: () => <div>አሰሪና ሰራተኛ ክርክሮች</div>
    },
    {
        path: "/elders",
        main: () => <Elders title="አደጋ ማጠቃለያ ሪፖርት" />,
        sidebar: () => <div>አደጋ ማጠቃለያ ሪፖርት</div>
    },
    {
        path: "/Vulnerable-children",
        main: () => <Vulnerable_children title="የተጎዳው የሰውነት ክፍል" />,
        sidebar: () => <div>የተጎዳው የሰውነት ክፍል</div>
    },
    {
        path: "/Street-Riders",
        main: () => <Street_Riders title="የደረሰው ጉዳት አይነት" />,
        sidebar: () => <div>የደረሰው ጉዳት አይነት</div>
    },
    {
        path: "/The-beggers",
        main: () => <The_Beggers title="የደረሰው ዓደጋ ምክንያት" />,
        sidebar: () => <div>የደረሰው ዓደጋ ምክንያት</div>
    },
    {
        path: "/commercial-sex-offenders",
        main: () => <Commercial_sex title="የሰራተኞች ዕድሜ ክልል" />,
        sidebar: () => <div>የሰራተኞች ዕድሜ ክልል</div>
    },
    {
        path: "/hiv-adis-positive",
        main: () => <Hiv_Adis title="የስራ ቦታዎች/ድርጅቶች" />,
        sidebar: () => <div>የስራ ቦታዎች/ድርጅቶች</div>
    },
    {
        path: "/Vulnerable-youth",
        main: () => <Vulnerable_youth title="የተመዘገቡ የስራ ቦታዎች" />,
        sidebar: () => <div>የተመዘገቡ የስራ ቦታዎች</div>
    }
    // {
    //     path: "/Drug-user",
    //     main: () => <Drug_user />,
    //     sidebar: () => <div>የተመዘገቡ የስራ ቦታዎች</div>
    // },
    // {
    //     path: "/mental-disorder",
    //     main: () => <Mental_disorder />,
    //     sidebar: () => <div>የተመዘገቡ የስራ ቦታዎች</div>
    // },
    // {
    //     path: "/other",
    //     main: () => <Other />,
    //     sidebar: () => <div>Other</div>
    // },
    // {
    //     path: "/other",
    //     main: () => <Other />,
    //     sidebar: () => <div>Other</div>
    // }
]
export default class sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 1,
            fixdorNat: 1
        };
        this.SelectedOption = this.SelectedOption.bind(this);

    }
    // componentDidMount(){
    //     let id=this.props.match.params.id;
    //     console.log(id);

    // }
    SelectedOption = (e) => {
        this.setState({
            language: this.state.language ? 0 : 1,

        })
        //console.log(this.state.language);
        //property=this.state.language;




    }
    ChangeBoolean = () => {
        this.setState({
            fixdorNat: 0
        });
        alert(this.state.fixdorNat);

    }
    render() {
        return (
            <div>
                <Router>
                
                    <div style={{ display: "flex" }} className="Sidenav">
                        <div
                            style={{
                                height: "100%",
                                width: "18%",
                                position: "fixed",
                                top: "41px",
                                left: "0",
                                overflowX: "hidden",
                                paddingTop: "15px",
                                background: "#fff",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

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
                                    marginLeft:"20px"
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
                                    <Link to="/admin" className="btn btn-default"><span className="glyphicon glyphicon-home"></span> አስማሚ የቀረቡ አቤቱታዎች</Link>
                                </li>

                                <li>
                                    <Link to="/migrants" className="btn btn-default"><span className="glyphicon glyphicon-th"></span> ፍ/ቤት የቀረቡ ክርክሮች</Link>
                                </li>
                                <li>
                                    <Link to="/akalGudat" className="btn btn-default"><span className="glyphicon glyphicon-th-list"></span> አሰሪና ሰራተኛ ክርክሮች</Link>
                                </li>
                                <li>
                                    <Link to="/elders" className="btn btn-default"><span className="glyphicon glyphicon-user"></span> አደጋ ማጠቃለያ ሪፖርት</Link>
                                </li>
                                <li>
                                    <Link to="/Vulnerable-children" className="btn btn-default"><span className="glyphicon glyphicon-film"></span> የተጎዳው የሰውነት ክፍል</Link>
                                </li>
                                <li>
                                    <Link to="/Street-Riders" className="btn btn-default"><span className="glyphicon glyphicon-th"></span> የደረሰው ጉዳት አይነት</Link>
                                </li>

                                <li>
                                    <Link to="/The-beggers" className="btn btn-default"><span className="glyphicon glyphicon-oil"></span> የደረሰው ዓደጋ ምክንያት</Link>
                                </li>
                                <li>
                                    <Link to="/commercial-sex-offenders" className="btn btn-default"><span className="glyphicon glyphicon-th"></span> የሰራተኞች ዕድሜ ክልል</Link>
                                </li>
                                <li>
                                    <Link to="/hiv-adis-positive" className="btn btn-default"><span className="glyphicon glyphicon-scissors"></span> የስራ ቦታዎች/ድርጅቶች</Link>
                                </li>
                                <li>
                                    <Link to="/Vulnerable-youth" className="btn btn-default"><span className="glyphicon glyphicon-th"></span> የተመዘገቡ የስራ ቦታዎች</Link>
                                </li>


                            </ul>
                        </div>

                        <div style={{ flex: 1, padding: "0px" }}>

                            
                            <div style={{ flex: 1, padding: "15px", marginLeft: "18%", marginTop: "6%" }}>
                                {/* <Route path="/forms" component={Home_Form} /> */}

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
                               
                                {/* <div style={{ borderRadius: "20px" }}>
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
                                <Route path="/edit/:id" component={Edit_Home} /> */}
                            </div>

                        </div>

                    </div>

                </Router>
            </div>
        );
    }
}

