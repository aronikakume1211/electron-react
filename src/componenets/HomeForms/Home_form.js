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
      level: ''
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
    }
    if (!(this.state.fname === "")) {
      const database = new Datastore('../Home_Data.db');
      database.loadDatabase((err) => {
        if (err) throw err;
        else {
          console.log("Database Created!");
        }
      });
      database.insert(obj, (err, res) => {
        if (err) throw err;
        else {
          alert("Succesfully Added!")
          console.log(obj);
          
        }
      });
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

    } else {
      alert("እባክዎ መጀመሪያ ይሙሉ!");
    }
  }

  render() {
    return (
      <div >


        {/* <form onSubmit={this.onSubmit} style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
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
                <select className="form-control"
                  value={this.state.currentStatus}
                  onChange={this.onChangeCurrentStatus}
                >
                  <option>በስራ ላይ ያለ/ች</option>
                  <option>ስራ ፈላጊ</option>
                </select>
                {/* <input
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
                {/* <input
                  type="text"
                  className="form-control" id="checkup"
                  value={this.state.checkup}
                  onChange={this.onChangeCheckup}
                  placeholder="ምርመራ..."
                /> *
              </div>
            </div>
          </div>

         

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
        </form> */}
        <form onSubmit={this.onSubmit} style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding:"10px"}}>
          <div className="row">

            <div className="col-sm-4" style={{}}>
              <div className="form-group">
                <label htmlFor="fname">የአባ/እማ ወራ ስም</label>
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
                <label htmlFor="mname">የአባ/እማ ወራ የአባት ስም</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.mname}
                  onChange={this.onChangeMname}
                  placeholder="የአባት ስም"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">የአባ/እማ ወራ የአያት ስም</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.lname}
                  onChange={this.onChangeLname}
                  placeholder="የአያት ስም ..."
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
                      placeholder="እድሜ..."
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
                      placeholder="የቤተሰቡ የወንድ ብዛት..."
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
                      placeholder="የቤተሰቡ የሴት ብዛት..."
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
                  placeholder="መስራት የሚችሉ ብዛት/ከ18-59..."
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
                  placeholder="በጤና/በአካል ጉዳት ምክኒያት መስራት የማይችሉ"
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
                  placeholder="አረጋዊ/አካል ጉዳተኛ/ህመምተኛ/ጧሪና ደጋፊ የሌላቸው..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="tegalache">የቤተሰብ ወርሃዊ ገቢ</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.income}
                  onChange={this.onChangeIncome}
                  placeholder="የቤተሰብ ወርሃዊ ገቢ .."
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkup">ቤትና የቤት ዕቃ ሁኔታ</label>
                <input
                  type="text"
                  className="form-control" id="checkup"
                  value={this.state.housing}
                  onChange={this.onChangeHousing}
                  placeholder="ቤትና የቤት ዕቃ ሁኔታ ..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="zone">ጎጥ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.village}
                  onChange={this.onChangeVillage}
                  placeholder="ጎጥ..."
                />
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
                  placeholder="የተጠቃሚ አይነት..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="zone">ቦታውን ለመለየት ልዩ መጠሪያ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.spcificVilgName}
                  onChange={this.onChangeSpacificVillage}
                  placeholder="ቦታውን ለመለየት ልዩ መጠሪያ..."
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
              <div className="form-group">
                <label htmlFor="zone">የተጠቃሚ ብዛት</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.noOfUser}
                  onChange={this.onChangeNumberOfUser}
                  placeholder="የተጠቃሚ ብዛት..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="zone">ደረጃ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.level}
                  onChange={this.onChangeLevel}
                  placeholder="ደረጃ..."
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
