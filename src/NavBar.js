import React, { Component } from 'react'
import logo from './images/logo.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'user@gmail.com',
            password: 'user@gmail.com'
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/admin');

    }
    render() {
        return (
            <div>
                <div style={{
                    overflowY: "hidden",
                    width: "100%",
                    backgroundColor: "black",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    position: "fixed",
                    top: "0",
                    left: "0",
                }}>
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
                        }}>
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
                            <form onSubmit={this.handleSubmit}>
                                <Link
                                    to="/"
                                    type="submit"
                                    style={{
                                        backgroundColor: "#264033",
                                        color: "white",
                                        border: "none",
                                        cursor: " pointer",
                                        borderRadius: "20px",
                                        textDecoration: "none"
                                    }}
                                >Logout</Link>
                            </form>
                            {/* <input
                                            type="text"
                                            placeholder="ፈልግ . . ."
                                            style={{

                                                padding: "4px",
                                                border: "none",
                                                fontSize: "17px",
                                                borderRadius: "20px",
                                                marginRight: "20px"
                                            }} /> */}
                            {/* <Link to="/" className="btn btn-primary" disabled><span className="glyphicon glyphicon-logout"></span>
                            
                                           
                                                Logout
         
                                        </Link> */}

                            {/* <select style={{

                                            padding: "4px",
                                            border: "none",
                                            fontSize: "17px",
                                            borderRadius: "20px",
                                            marginLeft: "5px"
                                        }} onChange={this.SelectedOption}>
                                            <option value="1">{this.state.language ? "አማርኛ" : "Amahric"}</option>
                                            <option value="0">{this.state.language ? "እንግሊዘኛ" : "English"}</option>
                                        </select> */}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
