import React, { Component } from 'react';
import { BrowserRoute as Route, Router, Link } from 'react-router-dom'
import Datastore from 'nedb';
let database;
export default class Hiv_Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            fname: '',
            lname: '',
            mname: '',
            Sex: '',
            Age: '',
            Zone: '',
            woreda: '',
            Kebele: '',
            Income: '',
            ExposeRate: '',
            checkup: ''
        }
    }
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
        database.findOne({ _id: id }, (err, docs) => {
            if (err) throw err;
            else {
                this.setState({
                    fname: docs.fname,
                    lname: docs.lname,
                    mname: docs.mname,
                    Sex: docs.Sex,
                    Age: docs.Age,
                    Zone: docs.Zone,
                    woreda: docs.woreda,
                    Kebele: docs.Kebele,
                    Income: docs.Income,
                    ExposeRate: docs.ExposeRate,
                    checkup: docs.checkup
                })
                console.log(this.state.fname);
            }
        });
    }

    changer = (prop) => {
        console.log(prop.fname);


    }
    onChangeFname = (e) => {
        this.setState({
            fname: e.target.value,
        });
    }
    onChangeMname = (e) => {
        this.setState({
            mname: e.target.value,
        });
    }
    onChangeLname = (e) => {
        this.setState({
            lname: e.target.value,
        });
    }
    onChangeAge = (e) => {
        this.setState({
            Age: e.target.value,
        });
    }
    onChangeZone = (e) => {
        this.setState({
            Zone: e.target.value,
        });
    }
    onChangeWoreda = (e) => {
        this.setState({
            woreda: e.target.value,
        });
    }
    onChangeKebele = (e) => {
        this.setState({
            Kebele: e.target.value,
        });
    }
    onChangeIncome = (e) => {
        this.setState({
            Income: e.target.value,
        });
    }
    onChangeExposerate = (e) => {
        this.setState({
            ExposeRate: e.target.value,
        });
    }
    onChangeCheckup = (e) => {
        this.setState({
            checkup: e.target.value,
        });
    }
    onChangeSex = (e) => {
        this.setState({
            Sex: e.target.value,
        });
    }
    onSubmit = (e) => {

        let id = this.props.match.params.id;
        e.preventDefault();
        const updatedData = {
            fname: this.state.fname,
            lname: this.state.lname,
            mname: this.state.mname,
            Sex: this.state.Sex,
            Age: this.state.Age,
            Zone: this.state.Zone,
            woreda: this.state.woreda,
            Kebele: this.state.Kebele,
            Income: this.state.Income,
            ExposeRate: this.state.ExposeRate,
            checkup: this.state.checkup
        }

        database.update({ _id: id }, { $set: updatedData }, (err, count) => {
            if (err) {
                console.log(err);

            } else {
                console.log("Updated!");
                alert("Updated!")

            }
        })

        this.setState({
            fname: '',
            lname: '',
            mname: '',
            Sex: '',
            Age: '',
            Zone: '',
            woreda: '',
            Kebele: '',
            Income: '',
            ExposeRate: '',
            checkup: ''
        });
        this.props.history.push('/Vulnerable-youth');
    }

    render() {
        return (
            <div>

                <form onSubmit={this.onSubmit} style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "5px" }}>
                    <div className="row">
                        <div className="col-sm-4" style={{}}>
                            <div className="form-group">
                                <label htmlFor="fname">ስም</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.fname}
                                    onChange={this.onChangeFname}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mname">የአባት ስም</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.mname}
                                    onChange={this.onChangeMname}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lname">የአያት ስም</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.lname}
                                    onChange={this.onChangeLname}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sex">ፆታ</label>
                                <select className="form-control"
                                    value={this.state.Sex}
                                    onChange={this.onChangeSex}
                                >
                                    <option>ወንድ</option>
                                    <option>ሴት</option>
                                    <option>ሌላ</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-4" style={{}}>
                            <div className="form-group">
                                <label htmlFor="age">ዕድሜ</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={this.state.Age}
                                    onChange={this.onChangeAge}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="zone">ዞን</label>
                                <select className="form-control"
                                    value={this.state.Zone}
                                    onChange={this.onChangeZone}
                                >
                                    <option>መተከል</option>
                                    <option>አሶሳ</option>
                                    <option>ካማሺ</option>
                                </select>

                            </div>
                            <div className="form-group">
                                <label htmlFor="woreda">ወረዳ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.woreda}
                                    onChange={this.onChangeWoreda}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="kebele">ቀበሌ/ቀጠና</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Kebele}
                                    onChange={this.onChangeKebele}
                                />
                            </div>
                        </div>

                        {/* right */}
                        <div className="col-sm-4" style={{}}>
                            <div className="form-group">
                                <label htmlFor="income">የገቢ ምንጭ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Income}
                                    onChange={this.onChangeIncome}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tegalache">የተገላጭነት አይነት</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.ExposeRate}
                                    onChange={this.onChangeExposerate}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="checkup">ምርመራ</label>
                                <input
                                    type="text"
                                    className="form-control" id="checkup"
                                    value={this.state.checkup}
                                    onChange={this.onChangeCheckup}
                                />
                            </div>

                        </div>
                    </div>

                    <Link to="/Vulnerable-youth"
                        type="button"
                        className="btn btn-primary"
                        style={{
                            borderRadius: "20px",
                            margin: "10px",
                        }}
                    //onClick={this.DeleteHandlerEvent}
                    >

                        <span className="glyphicon glyphicon-step-backward"></span>back

                </Link>

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
                        <span className="glyphicon glyphicon-save"></span> Update

                </Link>
                </form>


            </div>
        );
    }
}
