import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Datastore from 'nedb';
import WoredaList from '../Forms/woredaList'

export default class beggar_form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            mname: '',
            Sex: 'ወንድ',
            Age: '',
            woreda: '',
            kebele: '',
            village:'',
            helper:'ዘመድ',
            familyStatus: 'አባት ብቻ ያለው/ት',
            educationStatus: 'በመማር ላይ ያለ/ች',
            no_Children: '',
            checkup: ''

        }
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
    onChangeVillage = (e) => {
        this.setState({
            village: e.target.value,
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
    onChangeFamilyStatus = (e) => {
        this.setState({
            familyStatus: e.target.value,
        });
    }
    onChangeCheckup = (e) => {
        this.setState({
            checkup: e.target.value,
        });


    }
    onChangeEducationStatus = (e) => {
        this.setState({
            educationStatus: e.target.value,
        });
    }
    onChangeHelper = (e) => {
        this.setState({
            helper: e.target.value,
        });
    }
    onChangeNumberOfChildren = (e) => {
        this.setState({
            no_Children: e.target.value,
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            fname: this.state.fname,
            lname: this.state.lname,
            mname: this.state.mname,
            Sex: this.state.Sex,
            Age: this.state.Age,
            woreda: this.state.woreda,
            kebele: this.state.kebele,
            village: this.state.village,
            familyStatus: this.state.familyStatus,
            educationStatus: this.state.educationStatus,
            no_Children: this.state.no_Children,
            checkup: this.state.checkup
        };
        const database = new Datastore("../Vulnerable_children_Data.db");
        database.loadDatabase((err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Database created sucessfuly");
            }
        });
        database.insert(obj, (err, res) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Database added!");
                console.log(obj);

                alert("Succefully Added!");
            }
        });
        this.setState({
            fname: '',
            lname: '',
            mname: '',
            Sex: 'ወንድ',
            Age: '',
            woreda: '',
            kebele: '',
            village:'',
            helper:'ዘመድ',
            familyStatus: 'አባት ብቻ ያለው/ት',
            educationStatus: 'በመማር ላይ ያለ/ች',
            no_Children: '',
            checkup: ''
        });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "7%" }}>
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
                                <label htmlFor="akal">ያለበት አካባቢ</label>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label htmlFor="age">ወረዳ</label>
                                        <WoredaList onChangeSelectWoreda={this.onChangeWoreda} />
                                        
                                        {/* <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.woreda}
                                            onChange={this.onChangeWoreda}
                                        /> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="sex">ቀበሌ</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.kebele}
                                            onChange={this.onChangeKebele}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="age">ሰፈር</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.village}
                                            onChange={this.onChangeVillage}
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="sex">ድጋፍ ያደረገ ያለ</label>
                                        <select className="form-control"
                                            value={this.state.helper}
                                            onChange={this.onChangeHelper}
                                        >
                                            <option>ዘመድ</option>
                                            <option>ማ/ሰብ</option>
                                            <option>ድርጅት</option>
                                            <option>መንግስት</option>
                                            <option>ደጋፊ የለውም/ትም</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="age">የት/ት ሁኔታ</label>
                                        <select className="form-control"
                                            value={this.state.educationStatus}
                                            onChange={this.onChangeEducationStatus}
                                        >
                                            <option>በመማር ላይ ያለ/ች</option>
                                            <option>ያቋረጠ/ች</option>
                                            <option>ያልጀመረ/ች</option>
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
                                <label htmlFor="income">በቤተሰቡ ውስጥ ያሉ ህፃናት ብዛት</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={this.state.no_Children}
                                    onChange={this.onChangeNumberOfChildren} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="income">ምርመራ</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={this.state.checkup}
                                    onChange={this.onChangeCheckup}
                                    placeholder="ምርመራ..."
                                />
                            </div>

                        </div>
                    </div>



                    <Link to="/Vulnerable-children" type="button" className="btn btn-primary" style={{
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
