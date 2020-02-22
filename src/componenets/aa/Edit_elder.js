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
            woreda: '',
            kebele: '',
            village: '',
            education: '',
            servival: '',
            familyTuwari: '',
            familyGrowing: '',
            helpType: '',
            income: '',
        }
    }
    DatabaseConnection = (props) => {


        database = new Datastore("../Elders_Data.db");
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
                    woreda: docs.woreda,
                    Kebele: docs.Kebele,
                    village:docs.village,
                    servival:docs.servival,
                    familyTuwari:docs.familyTuwari,
                    familyGrowing:docs.familyGrowing,
                    education:docs.education,
                    helpType:docs.helpType,
                    income: docs.income,
                });
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
    onChangeSex = (e) => {
        this.setState({
            Sex: e.target.value,
        });
    }
    onChangeWoreda = (e) => {
        this.setState({
            woreda: e.target.value,
        });
    }
    onChangeKebele = (e) => {
        this.setState({
            kebele: e.target.value,
        });
    }
    onChangeVillage = (e) => {
        this.setState({
            village: e.target.value,
        });
    }
    onChangeFamilyTuwari = (e) => {
        this.setState({
            familyTuwari: e.target.value,
        });
    }
    onChangeFamilyGrowing = (e) => {
        this.setState({
            familyGrowing: e.target.value,
        });


    }
    onChangeEducation = (e) => {
        this.setState({
            education: e.target.value,
        });
    }
    onChangeServival = (e) => {
        this.setState({
            servival: e.target.value,
        });
    }
    onChangeHelpType = (e) => {
        this.setState({
            helpType: e.target.value,
        });
    }
    onChangeIncome = (e) => {
        this.setState({
            income: e.target.value,
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
            woreda: this.state.woreda,
            kebele: this.state.kebele,
            village: this.state.village,
            servival: this.state.servival,
            familyTuwari: this.state.familyTuwari,
            familyGrowing: this.state.familyGrowing,
            education: this.state.education,
            helpType: this.state.helpType,
            income: this.state.income,
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
        this.props.history.push('/elders');
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
                                        <label htmlFor="age">hhhh</label>
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
                                <label htmlFor="lname">መተዳደሪያ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.servival}
                                    onChange={this.onChangeServival}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="akal">የቤተሰብ ሁኔታ</label>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="sex">ጧሪ</label>
                                        <select className="form-control"
                                            value={this.state.familyTuwari}
                                            onChange={this.onChangeFamilyTuwari}
                                        >
                                            <option>አለ</option>
                                            <option>የለም</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="age">የሚያሳድጓቸው ህፅናት</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.familyGrowing}
                                            onChange={this.onChangeFamilyGrowing}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="sex">የሚያስፈልጋቸው የድጋፍ ዓይነት</label>
                                        <select className="form-control"
                                            value={this.state.helpType}
                                            onChange={this.onChangeHelpType}
                                        >
                                            <option>ገንዘብ</option>
                                            <option>የቁሳቁስ</option>
                                            <option>የአልባሳት</option>
                                            <option>የመጠለያ</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="age">የወር ገቢ</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.income}
                                            onChange={this.onChangeIncome}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="income">የት/ት ደረጃ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.education}
                                        onChange={this.onChangeEducation} />
                                </div>
                            </div>

                        </div>
                    </div>



                    <Link to="/elders" type="button" className="btn btn-primary" style={{
                        borderRadius: "20px",
                        margin: "10px",
                    }}>
                        <span className="glyphicon glyphicon-step-backward"></span>back
                    </Link>
                    <button type="submit" className="btn btn-primary" style={{
                        borderRadius: "20px",
                        margin: "10px",
                    }} onClick={this.onSubmit}>
                        <span className="glyphicon glyphicon-save"></span> Save
                    </button>
                </form>
            </div>
        );
    }
}
