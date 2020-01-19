import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Datastore from 'nedb';
let database, id;
export default class beggar_form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            fname: '',
            lname: '',
            mname: '',
            Sex: '',
            Age: '',
            region: '',
            Zone: '',
            woreda: '',
            kebele: '',
            currentStatus: '',
            familyStatus: '',
            education: '',
            educationStatus: '',
            income: '',
            healthStatus: ''

        }
    }
    DatabaseConnection = (props) => {
        database = new Datastore('../Beggar_Data.db');
        database.loadDatabase((err) => {
            if (err) throw err;
        });
    }
    componentDidMount() {
        id = this.props.match.params.id;
        this.DatabaseConnection(id);
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
                    region: docs.region,
                    Zone: docs.Zone,
                    currentStatus: docs.currentStatus,
                    familyStatus: docs.familyStatus,
                    education: docs.education,
                    educationStatus: docs.educationStatus,
                    income: docs.income,
                    healthStatus: docs.healthStatus
                })
            }
        })
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
            kebele: e.target.value,
        });
    }
    onChangeCurrentStatus = (e) => {
        this.setState({
            currentStatus: e.target.value,
        });
    }
    onChangeFamilyStatus = (e) => {
        this.setState({
            familyStatus: e.target.value,
        });
    }
    onChangeEducation = (e) => {
        this.setState({
            education: e.target.value,
        });


    }
    onChangeEducationStatus = (e) => {
        this.setState({
            educationStatus: e.target.value,
        });
    }
    onChangeHealth = (e) => {
        this.setState({
            healthStatus: e.target.value,
        });
    }
    onChangeIncome = (e) => {
        this.setState({
            income: e.target.value,
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const UpdateData = {
            fname: this.state.fname,
            lname: this.state.lname,
            mname: this.state.mname,
            Sex: this.state.Sex,
            Age: this.state.Age,
            region: this.state.region,
            Zone: this.state.Zone,
            woreda: this.state.woreda,
            kebele: this.state.kebele,
            currentStatus: this.state.currentStatus,
            familyStatus: this.state.familyStatus,
            education: this.state.education,
            educationStatus: this.state.educationStatus,
            income: this.state.income,
            healthStatus: this.state.healthStatus
        };
        database.update({ _id: id }, { $set: UpdateData }, (err, count) => {
            if (err) throw err;
            else {
                alert("Updated!")
            }
        });
        this.setState({
            fname: '',
            lname: '',
            mname: '',
            Sex: '',
            Age: '',
            region: 'ቤኒሻንጉል ጉሙዝ',
            Zone: '',
            woreda: '',
            kebele: '',
            currentStatus: 'ጎዳና ላይ',
            familyStatus: 'አባት ብቻ ያለው/ት',
            education: '',
            educationStatus: 'በመማር ላይ',
            income: 'ልመና',
            healthStatus: 'ጤነኛ'
        });
        this.props.history.push('/The-beggers')
    };
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
                                <label htmlFor="akal">የመጣበት አካባቢ</label>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="sex">ከልል</label>
                                        <select className="form-control"
                                            value={this.state.region}
                                            onChange={this.onChangeRegion}
                                        >
                                            <option>ቤኒሻንጉል ጉሙዝ</option>
                                            <option>ሴት</option>
                                            <option>ሌላ</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="age">ዞን</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.Zone}
                                            onChange={this.onChangeZone}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="sex">ወረዳ</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.woreda}
                                            onChange={this.onChangeWoreda}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="age">ቀበሌ</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.kebele}
                                            onChange={this.onChangeKebele}
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="sex">የመገኛ ሁኔታ</label>
                                        <select className="form-control"
                                            value={this.state.currentStatus}
                                            onChange={this.onChangeCurrentStatus}
                                        >
                                            <option>ጎዳና ላይ</option>
                                            <option>ተመላላሽ</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="age">የት/ት ሁኔታ</label>
                                        <select className="form-control"
                                            value={this.state.educationStatus}
                                            onChange={this.onChangeEducationStatus}
                                        >
                                            <option>በመማር ላይ</option>
                                            <option>ያቋረጠ</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mname">የቤተሰብ ሁኔታ</label>
                                    <select className="form-control"
                                        value={this.state.familyStatus}
                                        onChange={this.onChangeFamilyStatus}
                                    >
                                        <option>አባት ብቻ ያለው/ት</option>
                                        <option>እናት ብቻ ያለው/ት</option>
                                        <option>ሁለቱም የሉም</option>
                                    </select>
                                </div>
                            </div>

                        </div>


                        <div className="col-sm-4" style={{}}>
                            <div className="form-group">
                                <label htmlFor="income">የት/ት ደረጃ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.education}
                                    onChange={this.onChangeEducation} />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="sex">የገቢ ምንጭ</label>
                                        <select className="form-control"
                                            value={this.state.income}
                                            onChange={this.onChangeIncome}
                                        >
                                            <option>ልመና</option>
                                            <option>ትናንሽ ንግዶች</option>
                                            <option>ሰው ቤት ተመላላሽ</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="age">የጤና ሁኔታ</label>
                                        <select className="form-control"
                                            value={this.state.healthStatus}
                                            onChange={this.onChangeHealth}
                                        >
                                            <option>ጤነኛ</option>
                                            <option>ታማሚ</option>
                                        </select>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>



                    <Link to="/The-beggers" type="button" className="btn btn-primary" style={{
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
        )
    }
}
