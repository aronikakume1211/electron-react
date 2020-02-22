import React, { Component } from 'react';
import { BrowserRoute as Route, Router, Link } from 'react-router-dom';
import Datastore from 'nedb';
import ZoneList from './zoneList';
import WoredaList from './woredaList';

export default class Hiv_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      mname: '',
      Sex: '',
      Age: '',
      Zone: 'All',
      woreda: 'All',
      Kebele: '',
      Income: '',
      ExposeRate: '',
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
      Income: this.state.Income,
      ExposeRate: this.state.ExposeRate,
      checkup: this.state.checkup
    }
    const database = new Datastore("../Hiv_Adis_data.db");
    database.loadDatabase((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Database created sucessfuly");

      }
    });
    if (this.state.fname == '' || this.state.lname == '' ||
      this.state.mname == '' || this.state.Age == '' ||
      this.state.Kebele == '' ||
      this.state.Income == '' ||
      this.state.ExposeRate == '' ||
      this.state.checkup == '') {
      alert("እባክዎ በትክክል ይሙሉ!")
    } else {
      if (this.state.Age < 0) {
        alert("ያስገቡት ዕድሜ ከ 0 በታች ነው! ያስተካክሉ!")
      } else {
        if (this.state.woreda == 'All' || this.state.Zone == 'All') {
          alert("እባክዎ ዞን እና ወረዳ ይምረጡ!")
        } else {
          database.insert(obj, (err, res) => {
            if (err) {
              console.log(err);

            } else {
              alert("Registerd!")
              this.setState({
                fname: '',
                lname: '',
                mname: '',
                Sex: '',
                Age: '',
                Zone: 'መተከል',
                woreda: 'ቡለን',
                Kebele: '',
                Income: '',
                ExposeRate: '',
                checkup: ''
              })
            }
          });
        }
      }
    }
  }
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

                <ZoneList onChangeSelectZone={this.onChangeZone} />
              </div>
              <div className="form-group">
                <label htmlFor="woreda">ወረዳ</label>
                <WoredaList onChangeSelectWoreda={this.onChangeWoreda} />
              </div>
              <div className="form-group">
                <label htmlFor="kebele">ቀበሌ</label>
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
                <label htmlFor="tegalache">የተጋላጭነት አይነት</label>
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

          {/* Center div */}

          <Link to="/hiv-adis-positive"
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
