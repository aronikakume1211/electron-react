import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataStore from 'nedb'
class Accident_report_form extends Component {
  constructor() {
    super();
    this.state = {
      orgName: '',
      code: '',
      maleEmployee: '',
      femaleEmployee: '',
      malePermitedDeath: '',
      femalePermitedDeath: '',
      maleNotPermitedDeath: '',
      femaleNotPermitedDeath: '',
      maleDeath: '',
      femaleDeath: '',
      totalPermited: '',
      date:'',
      moneyExpanditur: '',
      acciReasonExpan: ''
    }
  }
  onChangeOrgName = (e) => {
    this.setState({
      orgName: e.target.value
    })
  }
  onChangeCode = (e) => {
    this.setState({
      code: e.target.value
    })
  }
  onChangeMaleEmployee = (e) => {
    this.setState({
      maleEmployee: e.target.value
    })
  }
  onChangeFemaleEmployee = (e) => {
    this.setState({
      femaleEmployee: e.target.value
    })
  }
  onChangeMalePermited = (e) => {
    this.setState({
      malePermitedDeath: e.target.value
    })
  }
  onChangeFemalePermited = (e) => {
    this.setState({
      femalePermitedDeath: e.target.value
    })
  }
  onChangeNotMalePermited = (e) => {
    this.setState({
      maleNotPermitedDeath: e.target.value
    })
  }
  onChangeNotFemalePermited = (e) => {
    this.setState({
      femaleNotPermitedDeath: e.target.value
    })
  }
  onChangeMaleDeath = (e) => {
    this.setState({
      maleDeath: e.target.value
    })
  }
  onChangeFemaleDeath = (e) => {
    this.setState({
      femaleDeath: e.target.value
    })
  }
  onChangeTotalPermi = (e) => {
    this.setState({
      totalPermited: e.target.value
    })
  }
  onChangeDate=(e)=>{
    this.setState({
      date:e.target.value
    })
  }
  onChangeMoneyExpan = (e) => {
    this.setState({
      moneyExpanditur: e.target.value
    })
  }
  onChangeAccidExpen = (e) => {
    this.setState({
      acciReasonExpan: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();

    const inputValue = {
      orgName: this.state.orgName,
      code: this.state.code,
      maleEmployee: this.state.maleEmployee,
      femaleEmployee: this.state.femaleEmployee,
      malePermitedDeath: this.state.malePermitedDeath,
      femalePermitedDeath: this.state.femalePermitedDeath,
      maleNotPermitedDeath:this.state.maleNotPermitedDeath,
      femaleNotPermitedDeath:this.state.femaleNotPermitedDeath,
      maleDeath: this.state.maleDeath,
      femaleDeath: this.state.femaleDeath,
      totalPermited: this.state.totalPermited,
      date:this.state.date,
      moneyExpanditur: this.state.moneyExpanditur,
      acciReasonExpan: this.state.acciReasonExpan
    }
    const database = new DataStore("../Accident_Report_Data.db");
    database.loadDatabase((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Created Sucessfuly");
      }
    })
    const {
      orgName,
      code,
      maleEmployee,
      femaleEmployee,
      malePermitedDeath,
      femalePermitedDeath,
      maleDeath,
      femaleDeath,
      totalPermited,
      date,
      moneyExpanditur,
      acciReasonExpan
    } = this.state;
    if (orgName == '' || code == ''|| date=='') {
      alert("እባክዎ በትክክል ይሙሉ!")
    } else {
      database.insert(inputValue, (err, res) => {
        if (err) console.log(err)
        else {
          alert("Registerd!");
          this.setState({
            orgName: '',
            code: '',
            maleEmployee: '',
            femaleEmployee: '',
            malePermitedDeath: '',
            femalePermitedDeath: '',
            maleNotPermitedDeath:'',
            femaleNotPermitedDeath:'',
            maleDeath: '',
            femaleDeath: '',
            totalPermited: '',
            date:'',
            moneyExpanditur: '',
            acciReasonExpan: ''
          })
        }

      })
    }
  }
  render() {
    return (
      <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "7%" }}>
        <form onSubmit={this.onSubmit}>
          <div className="row">

            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="fname">የድርጅቱ ስም</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.orgName}
                  onChange={this.onChangeOrgName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fname">የኢንዱስትሪ መደብ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.code}
                  onChange={this.onChangeCode}
                />
              </div>
              <div className="row">
                <div className="col-sm-6 form-group">
                  <label htmlFor="fname">የወንድ ሰራተኛ ብዛት </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.maleEmployee}
                    onChange={this.onChangeMaleEmployee}
                  />
                </div>
                <div className="col-sm-6 form-group">
                  <label htmlFor="fname">የሴት ሰራተኛ ብዛት </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.femaleEmployee}
                    onChange={this.onChangeFemaleEmployee}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="fname">ሞት ያላደረሱ አደጋዎች </label>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="fname">በፈቃድ </label>
                      <div className="row">
                        <div className="col-sm-6 form-group">
                        <label htmlFor="fname">ወንድ</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.malePermitedDeath}
                            onChange={this.onChangeMalePermited}
                          />
                        </div>
                        <div className="col-sm-6 form-group">
                        <label htmlFor="fname">ሴት</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.femalePermitedDeath}
                            onChange={this.onChangeFemalePermited}
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="fname">ያለፍቃድ</label>
                      <div className="row">
                        <div className="col-sm-6 form-group">
                        <label htmlFor="fname">ወንድ</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.maleNotPermitedDeath}
                            onChange={this.onChangeNotMalePermited}
                          />
                        </div>
                        <div className="col-sm-6 form-group">
                        <label htmlFor="fname">ሴት</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.femaleNotPermitedDeath}
                            onChange={this.onChangeNotFemalePermited}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 form-group">
                  <label htmlFor="fname">የወንድ ሞት አደጋዎች</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.maleDeath}
                    onChange={this.onChangeMaleDeath}
                  />
                </div>
                <div className="col-sm-6 form-group">
                  <label htmlFor="fname">የሴት ሞት አደጋዎች</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.femaleDeath}
                    onChange={this.onChangeFemaleDeath}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-5">
                    <div className="form-group">
                    <label htmlFor="fname">የፈቃድ ቀን ብዛት</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.totalPermited}
                      onChange={this.onChangeTotalPermi}
                    />
                  </div>
                </div>
                <div className="col-sm-7">
                    <div className="form-group">
                    <label htmlFor="fname">ቀን</label>
                    <input
                      type="date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.onChangeDate}
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="fname">የባከነ ገንዘብ በደመወዝ ሲሰላ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.moneyExpanditur}
                  onChange={this.onChangeMoneyExpan}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fname">በስራ ላይ አደጋ ምክንያት የወጣ ገንዘብ (በብር) </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.acciReasonExpan}
                  onChange={this.onChangeAccidExpen}
                />
              </div>
            </div>
          </div>
          <Link to="/accident_report"
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
        </form>
      </div>
    );
  }
}

export default Accident_report_form;
