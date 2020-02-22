import React, { Component } from 'react';
import { BrowserRoute as Route, Router, Link } from 'react-router-dom'
import Datastore from 'nedb';
let database;
class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            fname: '',
            lname: '',
            mname: '',
            Sex: 'ወንድ',
            Age: '',
            woreda: '',
            Kebele: '',
            birthPlace: '',
            howManyYr: '',
            howManyYrInCity: '',
            workStation: '',
            education: '',
            reason: ''
        }
    }
    DatabaseConnection = (props) => {
        database = new Datastore('../Sex_Data.db');
        database.loadDatabase((err) => {
            if (err) throw err;
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
                    woreda: docs.woreda,
                    Kebele: docs.Kebele,
                    birthPlace: docs.birthPlace,
                    howManyYr: docs.howManyYr,
                    howManyYrInCity: docs.howManyYrInCity,
                    workStation: docs.workStation,
                    education: docs.education,
                    reason: docs.reason
                })
            }
        });
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
    onChangeBirthPlace = (e) => {
        this.setState({
            birthPlace: e.target.value,
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
    onChangeHowManyYear = (e) => {
        this.setState({
            howManyYr: e.target.value,
        });
    }
    onChangeHowManyYearInCity = (e) => {
        this.setState({
            howManyYrInCity: e.target.value,
        });
    }
    onChangeWorkStation = (e) => {
        this.setState({
            workStation: e.target.value,
        });
    }
    onChangeEducation = (e) => {
        this.setState({
            education: e.target.value,
        });
    }
    onChangeReason = (e) => {
        this.setState({
            reason: e.target.value,
        });
    }
    onSubmit=(e)=>{
        let id=this.props.match.params.id;
        e.preventDefault();
        const UpdateData={
            fname: this.state.fname,
            lname: this.state.lname,
            mname: this.state.mname,
            Sex: this.state.Sex,
            Age: this.state.Age,
            woreda: this.state.woreda,
            Kebele: this.state.Kebele,
            birthPlace: this.state.birthPlace,
            howManyYr: this.state.howManyYr,
            howManyYrInCity: this.state.howManyYrInCity,
            workStation: this.state.workStation,
            education: this.state.education,
            reason: this.state.reason
        }
        database.update({_id:id}, {$set: UpdateData},(err, count)=>{
            if(err) throw err;
            else{
                alert("Updated!")
            }
        });
        this.setState({
            fname: '',
            lname: '',
            mname: '',
            Sex: 'ወንድ',
            Age: '',
            woreda: 'ቡለን',
            Kebele: 'በኩጂ',
            birthPlace: '',
            howManyYr: '',
            howManyYrInCity: '',
            workStation: '',
            education: '',
            reason: ''
        });
        this.props.history.push('/commercial-sex-offenders')

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
                                <div className="row">
                                    <div className="col-sm-6">
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
                                    <div className="col-sm-6">
                                        <label htmlFor="age">ዕድሜ</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={this.state.Age}
                                            onChange={this.onChangeAge}
                                        />
                                    </div>
                                </div>



                            </div>
                        </div>
                        <div className="col-sm-4" style={{}}>
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
                            <div className="form-group">
                                <label htmlFor="age">የትውልድ ቦታ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.birthPlace}
                                    onChange={this.onChangeBirthPlace}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">በስራው የቆይታ ጊዜ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.howManyYr}
                                    onChange={this.onChangeHowManyYear}
                                />
                            </div>
                        </div>

                        {/* right */}
                        <div className="col-sm-4" style={{}}>
                            <div className="form-group">
                                <label htmlFor="age">በከተማው የቆይታ ጊዜ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.howManyYrInCity}
                                    onChange={this.onChangeHowManyYearInCity}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">የሚሰሩበት ቦታ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.workStation}
                                    onChange={this.onChangeWorkStation}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="income">የት/ት ደረጃ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.education}
                                    onChange={this.onChangeEducation}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tegalache">ወደ ስራ የገቡበት ምክንያት</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.reason}
                                    onChange={this.onChangeReason}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Center div */}

                    <Link to="/commercial-sex-offenders"
                        type="button"
                        className="btn btn-primary"
                        style={{
                            borderRadius: "20px",
                            margin: "10px",
                        }}
                    >
                        <span className="glyphicon glyphicon-step-backward"></span>back
                    </Link>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            borderRadius: "20px",
                            margin: "10px",
                        }}
                        onClick={this.onSubmit}
                    >
                        <span className="glyphicon glyphicon-save"></span> Save
                   </button>
                </form>
            </div>
        );
    }
}

export default componentName;
