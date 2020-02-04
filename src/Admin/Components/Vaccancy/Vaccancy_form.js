import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataStore from 'nedb';
class Vaccancy_form extends Component {
  constructor() {
    super();
    this.state = {
      woreda: 'ቡለን',
      orgName: '',
      orgPlace: '',
      coverage: 'የመንግስት ልማት ድርጅት',
      establishDate: '',
      service: '',
      permnentMale: '',
      permnentFemale: '',
      tempoMale: '',
      tempoFemale: '',
      someWorkMale: '',
      someWorkFemale: ''
    }
  }
  onChangeWoreda = (e) => {
    this.setState({
      woreda: e.target.value
    })
  }
  onChangeOrgName = (e) => {
    this.setState({
      orgName: e.target.value
    })
  }
  onChangeOrgPlace = (e) => {
    this.setState({
      orgPlace: e.target.value
    })
  }
  onChangeCoverage = (e) => {
    this.setState({
      coverage: e.target.value
    })
  }
  onChangeEstablishDate = (e) => {
    this.setState({
      establishDate: e.target.value
    })
  }
  onChangeService = (e) => {
    this.setState({
      service: e.target.value
    })
  }
  onChangePermaMale = (e) => {
    this.setState({
      permnentMale: e.target.value
    })
  }
  onChangePermaFemale = (e) => {
    this.setState({
      permnentFemale: e.target.value
    })
  }
  onChangeTempoMale = (e) => {
    this.setState({
      tempoMale: e.target.value
    })
  }
  onChangeTempoFemale = (e) => {
    this.setState({
      tempoFemale: e.target.value
    })
  }
  onChangeSomeWorkMale = (e) => {
    this.setState({
      someWorkMale: e.target.value
    })
  }
  onChangeSomeWorkFemale = (e) => {
    this.setState({
      someWorkFemale: e.target.value
    })
  }
  //submit to database
  onSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      woreda: this.state.woreda,
      orgName: this.state.orgName,
      orgPlace: this.state.orgPlace,
      coverage: this.state.coverage,
      establishDate: this.state.establishDate,
      service: this.state.service,
      permnentMale: this.state.permnentMale,
      permnentFemale: this.state.permnentFemale,
      tempoMale: this.state.tempoMale,
      tempoFemale: this.state.tempoFemale,
      someWorkMale: this.state.someWorkMale,
      someWorkFemale: this.state.someWorkFemale
    }
    const database = new DataStore("../Vaccancy_Data.db");
    database.loadDatabase(err => {
      if (err) console.log(err);
    });
    const {
      woreda,
      orgName,
      orgPlace,
      coverage,
      establishDate,
      service,
      permnentMale,
      permnentFemale,
      tempoMale,
      tempoFemale,
      someWorkMale,
      someWorkFemale
    } = this.state
    if (orgName == '' || orgPlace == '' ||
      coverage == '' || establishDate == '' ||
      service == '') {
      alert("እባክዎ በትክክል ይሙሉ!")
    } else {
      if (permnentMale < 0 || permnentFemale < 0 ||
        tempoMale < 0 || tempoFemale < 0 ||
        someWorkMale < 0 || someWorkFemale < 0) {
        alert("ከ <0> በታች ቁጥር አስገብተዋል እባክዎ ከ <0> በላይ ይሙሉ!")
      } else {
        database.insert(inputData, (err, res) => {
          if (err) console.log(err)
          else {
            alert("Registerd!");
            this.setState({
              woreda: 'ቡለን',
              orgName: '',
              orgPlace: '',
              coverage: 'የመንግስት ልማት ድርጅት',
              establishDate: '',
              service: '',
              permnentMale: '',
              permnentFemale: '',
              tempoMale: '',
              tempoFemale: '',
              someWorkMale: '',
              someWorkFemale: ''
            })
          }
        })
      }
    }
  }
  render() {
    return (
      <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "10%" }}>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label>ወረዳ</label>
                <select
                  className="form-control"
                  value={this.state.woreda}
                  onChange={this.onChangeWoreda}
                >
                  <option>ቡለን</option>
                  <option>ወምበራ</option>
                  <option>ድባጤ</option>
                  <option>ዳንጉር</option>
                </select>
              </div>
              <div className="form-group">
                <label>የድርጅቱ ስም</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.orgName}
                  onChange={this.onChangeOrgName}
                />
              </div>
              <div className="form-group">
                <label>ድርጅቱ የሚገኝበት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.orgPlace}
                  onChange={this.onChangeOrgPlace}
                />
              </div>
            </div>

            <div className="col-sm-4">
              <div className="form-group">
                <label>የድርጅቱ ይዞታ</label>
                <select
                  className="form-control"
                  value={this.state.coverage}
                  onChange={this.onChangeCoverage}
                >
                  <option>የመንግስት ልማት ድርጅት</option>
                  <option>የግል ድርጅት</option>
                </select>
              </div>
              <div className="form-group">
                <label>የተቋቋመበት ዘመን</label>
                <input
                  type="date"
                  className="form-control"
                  value={this.state.establishDate}
                  onChange={this.onChangeEstablishDate}
                />
              </div>
              <div className="form-group">
                <label>የሚያመርታቸው/የሚሰጣቸው አገልግሎት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.service}
                  onChange={this.onChangeService}
                />
              </div>
            </div>

            <div className="col-sm-4" style={{ backgroundColor: "grey", color: "#fff" }}>
              <label>የሰራተኞች ቅጥር ሁኔታ</label>
              <div className="form-group">
                <label>ላልተወሰነ ጊዜ/ቋሚ</label>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>ወንድ</label>
                      <input
                        type="number"
                        min="0"
                        className="form-control"
                        value={this.state.permnentMale}
                        onChange={this.onChangePermaMale}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>ሴት</label>
                      <input
                        type="number"
                        min="0"
                        className="form-control"
                        value={this.state.permnentFemale}
                        onChange={this.onChangePermaFemale}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>ለተወሰነ ጊዜ</label>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>ወንድ</label>
                      <input
                        type="number"
                        min="0"
                        className="form-control"
                        value={this.state.tempoMale}
                        onChange={this.onChangeTempoMale}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>ሴት</label>
                      <input
                        type="number"
                        min="0"
                        className="form-control"
                        value={this.state.tempoFemale}
                        onChange={this.onChangeTempoFemale}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>ለተወሰነ ስራ</label>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>ወንድ</label>
                      <input
                        type="number"
                        min="0"
                        className="form-control"
                        value={this.state.someWorkMale}
                        onChange={this.onChangeSomeWorkMale}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>ሴት</label>
                      <input
                        type="number"
                        min="0"
                        className="form-control"
                        value={this.state.someWorkFemale}
                        onChange={this.onChangeSomeWorkFemale}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/vaccancy"
            type="button"
            className="btn btn-primary"
            style={{
              borderRadius: "20px",
              margin: "10px"
            }}
          >
            <span className="glyphicon plyphicon-step-back"></span>back
            </Link>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              borderRadius: "20px",
              margin: "10px"
            }}
            onClick={this.onSubmit}
          >
            <span className="glyphicon glyphicon-save"></span>save
              </button>
        </form>
      </div>
    );
  }
}
export default Vaccancy_form;
