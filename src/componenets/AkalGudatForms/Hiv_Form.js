import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Datastore from 'nedb';
export default class Hiv_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      mname: '',
      Sex: '',
      Age: '',
      blind: '',
      deaf: '',
      notSpeak: '',
      blindNdeaf: '',
      onlyOneLeg: '',
      noBothLeg: '',
      noMove: '',
      other: '',
      mentalDisorder: '',
      natural: '',
      accident: '',
      healthProblm: '',
      help: '',
      whereHelp: '',
      income: ''
    };
  }
  onChangeFname = (e) => {
    this.setState({
      fname: e.target.value,
    });
  };
  onChangeMname = (e) => {
    this.setState({
      mname: e.target.value,
    });
  };
  onChangeLname = (e) => {
    this.setState({
      lname: e.target.value,
    });
  };
  onChangeAge = (e) => {
    this.setState({
      Age: e.target.value,
    });
  };
  onChangeBlind = (e) => {
    this.setState({
      bleind: e.target.value,
    });
  };
  onChangeDeaf = (e) => {
    this.setState({
      deaf: e.target.value,
    });
  };
  onChangeKebele = (e) => {
    this.setState({
      Kebele: e.target.value,
    });
  };
  onChangeIncome = (e) => {
    this.setState({
      Income: e.target.value,
    });
  };
  onChangeExposerate = (e) => {
    this.setState({
      ExposeRate: e.target.value,
    });
  };
  onChangeCheckup = (e) => {
    this.setState({
      checkup: e.target.value,
    });
  };
  onChangeSex = (e) => {
    this.setState({
      Sex: e.target.value,
    });
  };
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
    };
    const database = new Datastore("../Hiv_Adis_data.db");
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
        alert("Succefully Added!");
      }
    });
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
  };
  render() {
    return (<div>
      <form onSubmit={this.onSubmit} style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "5px" }}>
        <div className="row">
          <div className="col-sm-4" style={{}}>
            <div className="form-group">
              <label htmlFor="fname">First Name:</label>
              <input type="text" className="form-control" value={this.state.fname} onChange={this.onChangeFname} />
            </div>
            <div className="form-group">
              <label htmlFor="mname">Middle Name:</label>
              <input type="text" className="form-control" value={this.state.mname} onChange={this.onChangeMname} />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name:</label>
              <input type="text" className="form-control" value={this.state.lname} onChange={this.onChangeLname} />
            </div>
            <div className="form-group">
              <label htmlFor="sex">Sex:</label>
              <input type="text" className="form-control" value={this.state.Sex} onChange={this.onChangeSex} />
            </div>
          </div>
          <div className="col-sm-4" style={{}}>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input type="number" className="form-control" value={this.state.Age} onChange={this.onChangeAge} />
            </div>
            <div className="form-group">
              <label htmlFor="zone">Zone:</label>
              <input type="text" className="form-control" value={this.state.Zone} onChange={this.onChangeZone} />
            </div>
            <div className="form-group">
              <label htmlFor="woreda">woreda:</label>
              <input type="text" className="form-control" value={this.state.woreda} onChange={this.onChangeWoreda} />
            </div>
            <div className="form-group">
              <label htmlFor="kebele">kebele:</label>
              <input type="text" className="form-control" value={this.state.Kebele} onChange={this.onChangeKebele} />
            </div>
          </div>


          <div className="col-sm-4" style={{}}>
            <div className="form-group">
              <label htmlFor="income">Income:</label>
              <input type="text" className="form-control" value={this.state.Income} onChange={this.onChangeIncome} />
            </div>
            <div className="form-group">
              <label htmlFor="tegalache">Expose rate:</label>
              <input type="text" className="form-control" value={this.state.ExposeRate} onChange={this.onChangeExposerate} />
            </div>
            <div className="form-group">
              <label htmlFor="checkup">Check up:</label>
              <input type="text" className="form-control" id="checkup" value={this.state.checkup} onChange={this.onChangeCheckup} />
            </div>

          </div>
        </div>



        <Link to="/akalGudat" type="button" className="btn btn-primary" style={{
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


    </div>);
  }
}
