
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
      Sex: 'ወንድ',
      Age: '',
      akalGudat: 'ማየት የተሳነው/ች',
      underAss: 'አንድ እግር የሌለው/ት',
      accident: 'በተፈጥሮ',
      help: '',
      whereHelp: '',
      income: ''


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
  onChangeAkalgudat = (e) => {
    this.setState({
      akalGudat: e.target.value,
    });
  }
  onChangeUnderAss = (e) => {
    this.setState({
      underAss: e.target.value,
    });
  }
  onChangeAccident = (e) => {
    this.setState({
      accident: e.target.value,
    });
  }
  onChangeHelp = (e) => {
    this.setState({
      help: e.target.value,
    });
  }
  onChangeWhereHelp = (e) => {
    this.setState({
      whereHelp: e.target.value,
    });
  }
  onChangeIncome = (e) => {
    this.setState({
      income: e.target.value,
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
      akalGudat: this.state.akalGudat,
      underAss: this.state.underAss,
      accident: this.state.accident,
      help: this.state.help,
      whereHelp: this.state.whereHelp,
      income: this.state.income
    };
    const database = new Datastore("../Akal_Gudat_Data.db");
    database.loadDatabase((err) => {
      if (err) {
        console.log(err);
      }
    });
    if (this.state.fname == '' || this.state.lname == '' ||
      this.state.mname == '' || this.state.Age == '' ||
      this.state.help == '' || this.state.whereHelp == '' ||
      this.state.income == '') {
      alert("እባክዎ በትክክል ይሙሉ!")
    } else {
      if (this.state.income < 0 || this.state.Age < 0) {
        alert("ያስገቡት የወር ገቢ እና ዕድሜ ከ 0 በታች ነው! ያስተካክሉ!")
      } else {
        database.insert(obj, (err, res) => {
          if (err) {
            console.log(err);
          }
          else {
            alert("Registered!");
          }
        });
        this.setState({
          fname: '',
          lname: '',
          mname: '',
          Sex: 'ወንድ',
          Age: '',
          akalGudat: 'ማየት የተሳነው/ች',
          underAss: 'አንድ እግር የሌለው/ት',
          accident: 'በተፈጥሮ',
          help: '',
          whereHelp: '',
          income: ''

        });
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

              <div className="row">
                <div className="col-sm-6">
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
                <div className="col-sm-6">
                  <div className="form-group">
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
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="sex">የአካል ጉዳት ሁኔታ</label>
                    <select className="form-control"
                      value={this.state.akalgudat}
                      onChange={this.onChangeAkalgudat}
                    >
                      <option>ማየት የተሳነው/ች</option>
                      <option>መስማት የተሳነው/ች</option>
                      <option>ምናገር የተሳነው/ች</option>
                      <option>ማየትና መስማት የተሳነው/ች</option>
                      <option> ሌላ</option>
                      <option>የአእምሮ</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="age">ከወገብ በታች</label>
                    <select className="form-control"
                      value={this.state.underAss}
                      onChange={this.onChangeUnderAss}
                    >
                      <option> አንድ እግር የሌለው/ት</option>
                      <option> ሁለቱም እግር የሌለው/ት</option>
                      <option>የመንቀሳቀስ ችግር ያለበት/ት</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="lname">የጉዳት መንሰኤ</label>
                    <select className="form-control"
                      value={this.state.accident}
                      onChange={this.onChangeAccident}
                    >
                      <option>በተፈጥሮ</option>
                      <option>በአደጋ ምክንያት</option>
                      <option>በህመም ምክንያት</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="checkup">የወር ገቢ</label>
                    <input
                      type="number"
                      className="form-control"
                      id="checkup"
                      value={this.state.income}
                      onChange={this.onChangeIncome} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="income">ያገኙት ድጋፈ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.help}
                  onChange={this.onChangeHelp} />
              </div>
              <div className="form-group">
                <label htmlFor="tegalache">ድጋፉን ከማን አገኘ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.whereHelp}
                  onChange={this.onChangeWhereHelp} />
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