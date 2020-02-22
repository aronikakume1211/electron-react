import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Datastore from 'nedb';

export default class Home_form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      mname: '',
      Sex: 'ወንድ',
      Age: '',
      familyMale: '',
      familyfemale: '',
      noOfWorker: '',
      notWorkIncaseHealth: '',
      helpLess: '',
      income: '',
      housing: '',
      village: '',
      userType: '',
      spcificVilgName: '',
      phone: '+251',
      noOfUser: '',
      level: '',
      city: '',
      kebele: ''
    }
  }
  onChangeCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }
  onChangeKebele = (e) => {
    this.setState({
      kebele: e.target.value
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
  onChangeFamilyMale = (e) => {
    this.setState({
      familyMale: e.target.value,
    });
  }
  onChangeFamilyFemale = (e) => {
    this.setState({
      familyfemale: e.target.value,
    });
  }
  onChangeNoOfWorker = (e) => {
    this.setState({
      noOfWorker: e.target.value,
    });
  }
  onChangeNotWorkInCaseHealth = (e) => {
    this.setState({
      notWorkIncaseHealth: e.target.value,
    });
  }
  onChangeHelpLess = (e) => {
    this.setState({
      helpLess: e.target.value,
    });
  }
  onChangeIncome = (e) => {
    this.setState({
      income: e.target.value,
    });
  }
  onChangeHousing = (e) => {
    this.setState({
      housing: e.target.value,
    });
  }
  onChangeVillage = (e) => {
    this.setState({
      village: e.target.value,
    });
  }
  onChangeUserType = (e) => {
    this.setState({
      userType: e.target.value,
    });
  }
  onChangeSpacificVillage = (e) => {
    this.setState({
      spcificVilgName: e.target.value,
    });
  }
  onChangePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  }
  onChangeNumberOfUser = (e) => {
    this.setState({
      noOfUser: e.target.value,
    });
  }
  onChangeLevel = (e) => {
    this.setState({
      level: e.target.value,
    });
  }
  //submit the form to database
  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      fname: this.state.fname,
      lname: this.state.lname,
      mname: this.state.mname,
      Sex: this.state.Sex,
      Age: this.state.Age,
      familyMale: this.state.familyMale,
      familyfemale: this.state.familyfemale,
      noOfWorker: this.state.noOfWorker,
      notWorkIncaseHealth: this.state.notWorkIncaseHealth,
      helpLess: this.state.helpLess,
      income: this.state.income,
      housing: this.state.housing,
      village: this.state.village,
      userType: this.state.userType,
      spcificVilgName: this.state.spcificVilgName,
      phone: this.state.phone,
      noOfUser: this.state.noOfUser,
      level: this.state.level,
      city: this.state.city,
      kebele: this.state.kebele
    }
    if (!(this.state.fname === "")) {
      const database = new Datastore('../Home_Data.db');
      database.loadDatabase((err) => {
        if (err) throw err;
      });
      database.insert(obj, (err, res) => {
        if (err) throw err;
        else {
          alert("Registered!")
          this.setState({
            fname: '',
            lname: '',
            mname: '',
            Sex: 'ወንድ',
            Age: '',
            familyMale: '',
            familyfemale: '',
            noOfWorker: '',
            notWorkIncaseHealth: '',
            helpLess: '',
            income: '',
            housing: '',
            village: '',
            userType: '',
            spcificVilgName: '',
            phone: '+251',
            noOfUser: '',
            level: ''
          })
        }
      });
    } else {
      alert("እባክዎ መጀመሪያ ይሙሉ!");
    }
  }

  render() {
    return (
      <div >
        <form onSubmit={this.onSubmit} style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "7%" }}>
          <div className="row">
            <div className="col-sm-4" style={{}}>
              <div className="form-group">
                <label htmlFor="fname">የአባ/እማ ወራ ስም</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.fname}
                  onChange={this.onChangeFname}
                  style={{}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mname">የአባ/እማ ወራ የአባት ስም</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.mname}
                  onChange={this.onChangeMname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">የአባ/እማ ወራ የአያት ስም</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.lname}
                  onChange={this.onChangeLname}
                />
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="sex">የአባ/እማ ወራ ጾታ</label>
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
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="age">የአባ/እማ ወራ እድሜ</label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.Age}
                      onChange={this.onChangeAge}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="zone">የቤተሰቡ የወንድ ብዛት</label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.familyMale}
                      onChange={this.onChangeFamilyMale}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="zone">የቤተሰቡ የሴት ብዛት</label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.familyfemale}
                      onChange={this.onChangeFamilyFemale}
                    />
                  </div>
                </div>
              </div>


            </div>
            <div className="col-sm-4" style={{}}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="woreda">መስራት የሚችሉ ብዛት/ከ18-59</label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.noOfWorker}
                      onChange={this.onChangeNoOfWorker}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="kebele">መስራት የማይችሉ</label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.notWorkIncaseHealth}
                      onChange={this.onChangeNotWorkInCaseHealth}
                    />
                  </div>
                </div>
              </div>


              <div className="form-group">
                <label htmlFor="income">አረጋዊ/አካል ጉዳተኛ/ህመምተኛ/ጧሪና ደጋፊ የሌላቸው</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.helpLess}
                  onChange={this.onChangeHelpLess}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tegalache">የቤተሰብ ወርሃዊ ገቢ</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.income}
                  onChange={this.onChangeIncome}
                />
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="zone">ቤትና የቤት ዕቃ ሁኔታ</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.housing}
                        onChange={this.onChangeHousing}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="zone">ከተማ</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.city}
                        onChange={this.onChangeCity}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="zone">ቀበሌ</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.kebele}
                        onChange={this.onChangeKebele}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="zone">ጎጥ</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.village}
                        onChange={this.onChangeVillage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4" style={{}}>

              <div className="form-group">
                <label htmlFor="zone">የተጠቃሚ አይነት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.userType}
                  onChange={this.onChangeUserType}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zone">ቦታውን ለመለየት ልዩ መጠሪያ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.spcificVilgName}
                  onChange={this.onChangeSpacificVillage}
                />
              </div>
              <div className="form-group">
                <label htmlFor="checkup">ስልክ ቁጥር</label>
                <input
                  type="number"
                  className="form-control" id="checkup"
                  value={this.state.phone}
                  onChange={this.onChangePhone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zone">የተጠቃሚ ብዛት</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.noOfUser}
                  onChange={this.onChangeNumberOfUser}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zone">ደረጃ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.level}
                  onChange={this.onChangeLevel}
                />
              </div>
            </div>
          </div>
          <Link to="/home/Home"
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
    )
  }
}
