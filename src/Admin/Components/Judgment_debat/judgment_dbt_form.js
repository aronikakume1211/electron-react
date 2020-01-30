import React, { Component, StyleSheet } from 'react';
import { Link } from 'react-router-dom'
import DataStore from 'nedb'
let erro = true
class Judgment_dbt_form extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      total: '',
      coverage: '',
      reason: '',
      byWhome: 'በድርጅት',
      startDate: '',
      result: '',
      endDate: ''
    }
  }
  onChangeCode = (e) => {
    this.setState({
      code: e.target.value,
    })
  }
  onChangeTotal = (e) => {
    this.setState({
      total: e.target.value
    })
  }
  onChangeCoverage = (e) => {
    this.setState({
      coverage: e.target.value
    })
  }
  onChangeReason = (e) => {
    this.setState({
      reason: e.target.value
    })
  }
  onChangeByWhome = (e) => {
    this.setState({
      byWhome: e.target.value
    })
  }
  onChangeStartDate = (e) => {
    this.setState({
      startDate: e.target.value
    })
  }
  onChangeResult = (e) => {
    this.setState({
      result: e.target.value
    })
  }
  onChangeEndDate = (e) => {
    this.setState({
      endDate: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const inputObject = {
      code: this.state.code,
      total: this.state.total,
      coverage: this.state.coverage,
      reason: this.state.reason,
      byWhome: this.state.byWhome,
      startDate: this.state.startDate,
      result: this.state.result,
      endDate: this.state.endDate
    }
    const database = new DataStore("../Judgment_Data.db");
    database.loadDatabase((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Created Sucessfuly");
      }
    })
    const { code, total, coverage, reason, byWhome, startDate, result, endDate } = this.state;
    if (code == '' || total == '' ||
      coverage == '' || result == '' ||
      reason == '' || byWhome == '' ||
      startDate == '' || endDate == '') {
      erro = false;
      alert("እባክዎ በትክክል ይሙሉ!")

    } else {
      if (startDate > endDate) {
        alert("እባክዎ የአቤቱታው የቀረበበት ቀን እና የተጠናቀቀበትን ቀን ያስተካክሉ!");
        erro = false;
      } else {
        database.insert(inputObject, (err, res) => {
          if (err) throw err;
          else {
            erro = true;
            alert("Succesfully Added!")
            console.log(inputObject);
            this.setState({
              code: '',
              total: '',
              coverage: '',
              reason: '',
              byWhome: 'በድርጅት',
              startDate: '',
              result: '',
              endDate: ''
            })
          }
        });
      }
    }
  }
  render() {
    return (
      <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "10%" }}>
        <form onSubmit={this.onSubmit} >
          <div className="row">
            <div className="col-sm-4" style={{}}>
              <div className="form-group">
                <label htmlFor="fname">የኢንዱስትሪ መደብ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.code}
                  onChange={this.onChangeCode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mname">የአቤቱታዎች ብዛት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.total}
                  onChange={this.onChangeTotal}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">የድርጅቱ ይዞታ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.coverage}
                  onChange={this.onChangeCoverage}
                />
              </div>
            </div>

            <div className="col-sm-4" style={{}}>
              <div className="form-group">
                <label htmlFor="fname">አቤቱታው የቀረበው</label>
                <select className="form-control"
                  value={this.state.byWhome}
                  onChange={this.onChangeByWhome}
                >
                  <option>በድርጅት</option>
                  <option>በማህበር</option>
                  <option>በግል</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="mname">አቤቱታው የቀረበበት ምክንያት</label>
                <textarea
                  rows="5"
                  type="text"
                  className="form-control"
                  value={this.state.reason}
                  onChange={this.onChangeReason}
                />
              </div>
            </div>

            <div className="col-sm-4" style={{}}>
              <div className="form-group">
                <label htmlFor="lname">አቤቱታው የቀረበበት ቀን</label>
                <input
                  type="date"
                  className="form-control"
                  value={this.state.startDate}
                  onChange={this.onChangeStartDate}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mname">የአቤቱታው የተደረሰበት ውጤት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.result}
                  onChange={this.onChangeResult}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">አቤቱታው የተጠናቀቀበት ቀን</label>
                <input
                  type="date"
                  className="form-control"
                  value={this.state.endDate}
                  onChange={this.onChangeEndDate}
                />
              </div>
            </div>
          </div>
          <Link to="/user"
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

export default Judgment_dbt_form;
