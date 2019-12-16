import React, { Component } from 'react';
import { BrowserRoute as Route, Router, Link } from 'react-router-dom'
import Datastore from 'nedb';
let database;
export default class Hiv_Form extends Component {
    DatabaseConnection = (props) => {
        database = new Datastore("../Vulnerable-youth.db");
        database.loadDatabase((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Database created sucessfuly");
            }
        });
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;
        this.DatabaseConnection(id)
    }
    onSubmit = (e) => {
        let id = this.props.match.params.id;
        e.preventDefault();
        database.remove({ _id: id }, {}, (err, numRemoved) => {
            if (err) throw err;
            alert("Deleted")
        })
        this.props.history.push('/Vulnerable-youth');
    }
    render() {
        return (
            <div>
                <form
                    onSubmit={
                        this.onSubmit
                    }
                    style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        padding: "5px",
                        background: "#ff9999",
                        borderRadius: "20px"
                    }}>
                    <div>
                        <h1>Are You Sure you want to delete ?</h1>
                    </div>

                    <Link
                        to="/Vulnerable-youth"
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            borderRadius: "20px",
                            margin: "10px",
                        }}
                        onClick={this.onSubmit}
                    >

                        <span className="glyphicon glyphicon-trash"></span>YES
                    </Link>
                    <Link
                        to="/Vulnerable-youth"
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            borderRadius: "20px",
                            margin: "10px",

                        }}

                    >
                        <span className="glyphicon glyphicon-backward"></span> NO
                    </Link>
                </form>
            </div>
        );
    }
}
