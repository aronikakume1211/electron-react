import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Datastore from 'nedb';
import WoredaList from '../Forms/woredaList';
import ZoneList from '../Forms/zoneList';
let database;
export default class Migrant_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      currentStatus: 'በስራ ላይ ያለ/ች',
      phone: '+251',
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

  componentDidMount() {
    database = new Datastore("../Migrant_data.db");
    database.loadDatabase((err) => {
      if (err) {
        console.log(err);
      }
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
        database.insert(obj, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            alert("Registered!")
          }
        });
        this.setState({
          fname: '',
          lname: '',
          mname: '',
          Sex: '',
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
          phone: '',
          checkup: ''
        })
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
        <form onSubmit={this.onSubmit} style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "1%" }}>
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

                />
              </div>
              <div className="form-group">
                <label htmlFor="zone">የት/ት ደረጃ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.education}
                  onChange={this.onChangeEducation}
                />
              </div>
              <div className="form-group">
                <label>ዞን</label>
                <ZoneList onChangeSelectZone={this.onChangeZone} />
              </div>
            </div>
            {/* gehsjdj */}



            {/* right */}
            <div className="col-sm-3" style={{}}>
              <div className="form-group">
                <label>ወረዳ</label>
                <WoredaList onChangeSelectWoreda={this.onChangeWoreda} />
              </div>
              <div className="form-group">
                <label htmlFor="woreda">ቀበሌ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.Kebele}
                  onChange={this.onChangeKebele}
                />
              </div>
              <div className="form-group">
                <label htmlFor="kebele">የሄደበት/ች ዓ/ም</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.leaveYr}
                  onChange={this.onChangeLeaveYr}
                />
              </div>
              <div className="form-group">
                <label htmlFor="income">የሄደበት/ች አገር</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.country}
                  onChange={this.onChangeCountery}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tegalache">የተመለሰበት/ች ዓ/ም</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.returnYr}
                  onChange={this.onChangeReturnYr}
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkup">አሁን ያለበት/ች ሁኔታ</label>
                <input
                  type="text"
                  className="form-control" id="checkup"
                  value={this.state.currentStatus}
                  onChange={this.onChangeCurrentStatus}
                />
              </div>
              <div className="form-group">
                <label htmlFor="checkup">ስልክ ቁጥር</label>
                <input
                  type="text"
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
                >

                </textarea>
                {/* <input
                  type="text"
                  className="form-control" id="checkup"
                  value={this.state.checkup}
                  onChange={this.onChangeCheckup}
                  placeholder="ምርመራ..."
                /> */}
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
