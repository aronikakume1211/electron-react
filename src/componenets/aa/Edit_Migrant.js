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
            Sex: 'ወንድ',
            Age: '',
            education: '',
            region: '',
            Zone: '',
            woreda: '',
            Kebele: '',
            leaveYr: '',
            country: '',
            returnYr: '',
            currentStatus: '',
            phone: '+251',
            checkup: ''
        }
    }
    DatabaseConnection = (props) => {


        database = new Datastore("../Migrant_data.db");
        database.loadDatabase((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Database created sucessfuly");
            }
        });



    }
    componentDidMount() {
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
                    education: docs.education,
                    leaveYr: docs.leaveYr,
                    country: docs.country,
                    returnYr: docs.returnYr,
                    currentStatus: docs.currentStatus,
                    phone: docs.phone,
                    checkup: docs.checkup
                })
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
    onChangeSex = (e) => {
        this.setState({
            Sex: e.target.value,
        });
    }
    onChangeAge = (e) => {
        this.setState({
            Age: e.target.value,
        });
    }
    onChangeEducation = (e) => {
        this.setState({
            education: e.target.value,
        });
    }
    onChangeRegion = (e) => {
        this.setState({
            region: e.target.value,
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
    onChangeLeaveYr = (e) => {
        this.setState({
            leaveYr: e.target.value,
        });
    }
    onChangeCountery = (e) => {
        this.setState({
            country: e.target.value,
        });
    }
    onChangeReturnYr = (e) => {
        this.setState({
            returnYr: e.target.value,
        });
    }
    onChangeCurrentStatus = (e) => {
        this.setState({
            currentStatus: e.target.value,
        });
    }
    onChangePhone = (e) => {
        this.setState({
            phone: e.target.value,
        });
    }
    onChangeCheckup = (e) => {
        this.setState({
            checkup: e.target.value,
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
            education: this.state.education,
            leaveYr: this.state.leaveYr,
            country: this.state.country,
            returnYr: this.state.returnYr,
            currentStatus: this.state.currentStatus,
            phone: this.state.phone,
            checkup: this.state.checkup
        }

        if (!(this.state.fname == "" || this.state.mname == "" ||
            this.state.lname == ""
            || this.state.Age == "" || this.state.education == ""
            || this.state.Kebele == "" || this.state.country == "" || this.state.currentStatus == ""
            || this.state.leaveYr == "" || this.state.returnYr == "" || this.state.phone == "")) {

            if (this.state.leaveYr <= this.state.returnYr) {
                database.update({ _id: id }, { $set: updatedData }, (err, count) => {
                    if (err) {
                        console.log(err);

                    } else {
                        console.log("Updated!");
                        alert("Updated!")

                    }
                })

                
                this.props.history.push('/migrants');
            } else {
                alert("እባክዎ የሄደበት/ች ወይም የተመለሰበት/ች ዓ/ም ትክክል መሆንዎን ያርጋግጡ!")
            }
        } else {
            alert("እባክዎ መጀመሪያ ይሙሉ!");
        }
    }

    render() {
        return (
            <div>

                <form onSubmit={this.onSubmit} style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                    <div className="row">
                        <div className="col-sm-3" style={{}}>
                        </div>
                        <div className="col-sm-3" style={{}}>
                            <div className="form-group">
                                <label htmlFor="fname">ስም</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.fname}
                                    onChange={this.onChangeFname}
                                    placeholder="ስም ..."
                                    style={{}}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mname">የአባት ስም</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.mname}
                                    onChange={this.onChangeMname}
                                    placeholder="የአባት ስም"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lname">የአያት ስም</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.lname}
                                    onChange={this.onChangeLname}
                                    placeholder="የአያት ስም ..."
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sex">ጾታ</label>
                                <select className="form-control"
                                    value={this.state.Sex}
                                    onChange={this.onChangeSex}
                                >
                                    <option>ወንድ</option>
                                    <option>ሴት</option>
                                    <option>ሌላ</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">እድሜ</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={this.state.Age}
                                    onChange={this.onChangeAge}
                                    placeholder="እድሜ..."
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="zone">የት/ት ደረጃ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.education}
                                    onChange={this.onChangeEducation}
                                    placeholder="የት/ት ደረጃ..."
                                />
                            </div>
                        </div>
                        {/* gehsjdj */}



                        {/* right */}
                        <div className="col-sm-3" style={{}}>
                            <div className="form-group">
                                <label htmlFor="woreda">ቀበሌ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.Kebele}
                                    onChange={this.onChangeKebele}
                                    placeholder="ቀበሌ..."
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="kebele">የሄደበት/ች ዓ/ም</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={this.state.leaveYr}
                                    onChange={this.onChangeLeaveYr}
                                    placeholder="የሄደበት/ች ዓ/ም"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="income">የሄደበት/ች አገር</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.country}
                                    onChange={this.onChangeCountery}
                                    placeholder="የሄደበት/ች አገር..."
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tegalache">የተመለሰበት/ች ዓ/ም</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={this.state.returnYr}
                                    onChange={this.onChangeReturnYr}
                                    placeholder="የተመለሰበት/ች ዓ/ም"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="checkup">አሁን ያለበት/ች ሁኔታ</label>
                                <input
                                    type="text"
                                    className="form-control" id="checkup"
                                    value={this.state.currentStatus}
                                    onChange={this.onChangeCurrentStatus}
                                    placeholder="አሁን ያለበት/ች ሁኔታ ..."
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="checkup">ስልክ ቁጥር</label>
                                <input
                                    type="tel"
                                    className="form-control" id="checkup"
                                    value={this.state.phone}
                                    onChange={this.onChangePhone}
                                />
                            </div>

                        </div>
                        <div className="col-sm-2" style={{}}>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3" style={{}}>

                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="checkup">ምርመራ</label>
                                <textarea
                                    className="form-control"
                                    rows="2"
                                    value={this.state.checkup}
                                    onChange={this.onChangeCheckup}
                                    placeholder="ምርመራ..."
                                >

                                </textarea>

                            </div>
                        </div>
                    </div>

                    {/* Center div */}

                    <Link to="/migrants"
                        type="button"
                        className="btn btn-primary"
                        style={{
                            borderRadius: "20px",
                            margin: "10px",
                        }}
                    //onClick={this.OnclickingEent}

                    >
                        <span className="glyphicon glyphicon-step-backward"></span>back

              </Link>
                    <Link
                        to="/migrants"
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            borderRadius: "20px",
                            margin: "10px",

                        }}
                        onClick={this.onSubmit}
                    >
                        <span className="glyphicon glyphicon-save"></span> Save

                   </Link>
                </form>


            </div>
        );
    }
}
