import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DataStore from 'nedb';
let erro = true;
class Employ_Emplr_dbt_form extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      dropDown: 'አስማሚ',
      federal: 0,
      region: 0,
      zone: 0,
      woreda: 0,
      date: ''
    }
  }
  onChangeCode = (e) => {
    this.setState({
      code: e.target.value
    })
  }
  onChangeDropDown = (e) => {
    this.setState({
      dropDown: e.target.value
    })
  }
  onChangeFederal = (e) => {
    this.setState({
      federal: e.target.value
    })
  }
  onChangeRegion = (e) => {
    this.setState({
      region: e.target.value
    })
  }
  onChangeZone = (e) => {
    this.setState({
      zone: e.target.value
    })
  }
  onChangeWoreda = (e) => {
    this.setState({
      woreda: e.target.value
    })
  }
  onChangeDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    const inputValue = {
      code: this.state.code,
      dropDown: this.state.dropDown,
      federal: this.state.federal,
      region: this.state.region,
      zone: this.state.zone,
      woreda: this.state.woreda,
      date: this.state.date
    }
    const database = new DataStore("../Emplyr_Debt_Data.db");
    database.loadDatabase(err => {
      if (err) console.log(err);
    });
    const {
      code,
      dropDown,
      federal,
      region,
      zone,
      woreda,
      date
    } = this.state;

    if (code == '' || dropDown == '' ||
      federal == '' || region == '' ||
      zone == '' || woreda == '' ||
      date == '') {
      alert("እባክዎ በትክክል ይሙሉ!")
    } else {
      database.insert(inputValue, (err, ress) => {
        if (err) console.log(err)
        else {
          console.log(inputValue)
          alert("Registered!")
          this.setState({
            federal: '',
            region: '',
            zone: '',
            woreda: '',
          });
        }
      });
    }

  }
  render() {
    return (
      <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "10%" }}>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label>የኢንዱስትሪ መደብ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.code}
                  onChange={this.onChangeCode}
                />
              </div>
              <div className="form-group">
                <label>የስራ ክርክሮች ሰሚ አካላት </label>
                <select
                  className="form-control"
                  value={this.state.dropDown}
                  onChange={this.onChangeDropDown}
                >
                  <option>አስማሚ</option>
                  <option>የገላጋይ ሽምግልና አካላት</option>
                  <option>ለአሰሪና ሠራተኛ ጉዳይ ወሳኝ ቦርድ</option>
                  <option>ለመደበኛ ፍ/ቤቶች የቀረቡ የስራ ክርክሮች ሰሚ ችሎቶች </option>
                  <option>ሌሎች</option>
                </select>
              </div>
              <div className="form-group">
                <label>ቀን</label>
                <input
                  type="date"
                  className="form-control"
                  value={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
            </div>
            <div className="col-sm-8" style={{ backgroundColor: 'grey', color:'#fff', padding:'4%' }}>
              <label>የስራ ክርክሮች ሰሚ አካላት ብዛት</label>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>በፌደራል ያሉ</label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.federal}
                      onChange={this.onChangeFederal}
                    />
                  </div>
                  <div className="form-group">
                    <label>በክልል ያሉ</label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.region}
                      onChange={this.onChangeRegion}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>በዞን ያሉ</label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.zone}
                      onChange={this.onChangeZone}
                    />
                  </div>
                  <div className="form-group">
                    <label>በወረዳ ያሉ</label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.woreda}
                      onChange={this.onChangeWoreda}
                    />
                  </div>
                </div>
              </div>
              <Link to="/employee_emplr"
            type="button"
            className="btn btn-primary"
            style={{
              borderRadius: "20px",
              margin: "10px"
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
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Employ_Emplr_dbt_form;
