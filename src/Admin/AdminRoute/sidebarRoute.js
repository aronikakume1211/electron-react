import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Negotioator from '../Admin_modules/Negotiator';
import Judgment_debate from '../Admin_modules/Judgment_debate';
import Employe_Emplyr_debt from '../Admin_modules/employ&emplr_debt';
import Accident_report from '../Admin_modules/Accident_report';
import Accident_type from '../Admin_modules/Accident_Type';
import Affected_body_part from '../Admin_modules/Affected_body_part';
import Cause_Accident from '../Admin_modules/Cause_Accident';
import Employe_age_region from '../Admin_modules/employee_age_gap';
import Vaccancy from '../Admin_modules/Vaccancy';
import Registerd_Vaccancy from '../Admin_modules/Registerd_vaccancy';
import Judgmnet_Edit from '../Components/Judgment_debat/judgment_edit';
import Judgment_Delete from '../Components/Judgment_debat/judgment_delete';
const routes = [
    {
        path: "/user",
        main: () => <Negotioator />,
        sidebar: () => <div> አስማሚ የቀረቡ አቤቱታዎች</div>
    },
    {
        path: "/judge",
        main: () => <Judgment_debate />,
        sidebar: () => <div>ፍ/ቤት የቀረቡ ክርክሮች</div>
    },
    {
        path: "/employee_emplr",
        main: () => <Employe_Emplyr_debt />,
        sidebar: () => <div>አሰሪና ሰራተኛ ክርክሮች</div>
    },
    {
        path: "/accident_report",
        main: () => <Accident_report />,
        sidebar: () => <div>አደጋ ማጠቃለያ ሪፖርት</div>
    },
    {
        path: "/affected_body",
        main: () => <Affected_body_part />,
        sidebar: () => <div>የተጎዳው የሰውነት ክፍል</div>
    },
    {
        path: "/accident_type",
        main: () => <Accident_type />,
        sidebar: () => <div>የደረሰው ጉዳት አይነት</div>
    },
    {
        path: "/cause_accident",
        main: () => <Cause_Accident />,
        sidebar: () => <div>የደረሰው ዓደጋ ምክንያት</div>
    },
    {
        path: "/employee_age_gap",
        main: () => <Employe_age_region />,
        sidebar: () => <div>የሰራተኞች ዕድሜ ክልል</div>
    },
    {
        path: "/vaccancy",
        main: () => <Vaccancy />,
        sidebar: () => <div>የስራ ቦታዎች/ድርጅቶች</div>
    },
    {
        path: "/registerd_vaccancy",
        main: () => <Registerd_Vaccancy />,
        sidebar: () => <div>የተመዘገቡ የስራ ቦታዎች</div>
    }
]
export default class sidebar extends Component {
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
                                    marginLeft: "20px"
                                }}>
                                    <input
                                        type="text"
                                        placeholder="Search . . ."
                                        style={{
                                            padding: "4px",
                                            border: "none",
                                            borderBottom: "1px solid",
                                            fontSize: "17px",
                                            borderColor: "#0099ff",
                                            color: "#0099ff"


                                        }} />
                                </li>
                                <li>
                                    <Link to="/user" className="btn btn-default"><span className="glyphicon glyphicon-home"></span> አስማሚ የቀረቡ አቤቱታዎች</Link>
                                </li>

                                <li>
                                    <Link to="/judge" className="btn btn-default"><span className="glyphicon glyphicon-th"></span> ፍ/ቤት የቀረቡ ክርክሮች</Link>
                                </li>
                                <li>
                                    <Link to="/employee_emplr" className="btn btn-default"><span className="glyphicon glyphicon-th-list"></span> አሰሪና ሰራተኛ ክርክሮች</Link>
                                </li>
                                <li>
                                    <Link to="/accident_report" className="btn btn-default"><span className="glyphicon glyphicon-user"></span> አደጋ ማጠቃለያ ሪፖርት</Link>
                                </li>
                                <li>
                                    <Link to="/affected_body" className="btn btn-default"><span className="glyphicon glyphicon-film"></span> የተጎዳው የሰውነት ክፍል</Link>
                                </li>
                                <li>
                                    <Link to="/accident_type" className="btn btn-default"><span className="glyphicon glyphicon-th"></span> የደረሰው ጉዳት አይነት</Link>
                                </li>

                                <li>
                                    <Link to="/cause_accident" className="btn btn-default"><span className="glyphicon glyphicon-oil"></span> የደረሰው ዓደጋ ምክንያት</Link>
                                </li>
                                <li>
                                    <Link to="/employee_age_gap" className="btn btn-default"><span className="glyphicon glyphicon-th"></span> የሰራተኞች ዕድሜ ክልል</Link>
                                </li>
                                <li>
                                    <Link to="/vaccancy" className="btn btn-default"><span className="glyphicon glyphicon-scissors"></span> የስራ ቦታዎች/ድርጅቶች</Link>
                                </li>
                                <li>
                                    <Link to="/registerd_vaccancy" className="btn btn-default"><span className="glyphicon glyphicon-th"></span> የተመዘገቡ የስራ ቦታዎች</Link>
                                </li>

                            </ul>
                        </div>

                        <div style={{ flex: 1, }}>
                            <div style={{ flex: 1, padding: "15px", marginLeft: "18%", marginTop: "6%" }}>
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
                                {/* Delete routes */}
                                <Route path ="/judge/delete/:id" component={Judgment_Delete} />
                                {/* edit routes*/}
                                <Route path="/judge/edit/:id" component={Judgmnet_Edit} />
                            </div>

                        </div>

                    </div>

                </Router>
            </div>
        );
    }
}

