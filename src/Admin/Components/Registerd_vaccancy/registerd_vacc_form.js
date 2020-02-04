import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DataStore from 'nedb'
class Registerd_vacc_form extends Component {
  constructor() {
    super();
    this.state = {
      woreda: 'ቡለን',
      ereshaTotal: '',
      ereshaCheck: '',
      minralTotal: '',
      minralCheck: '',
      plantTotal: '',
      plantCheck: '',
      electricTotal: '',
      electricCheck: '',
      buildingTotal: '',
      buildingCheck: '',
      marchentTotal: '',
      marchentCheck: '',
      transportTotal: '',
      transportCheck: '',
      financeTotal: '',
      financeCheck: '',
      otherTotal: '',
      otherCheck: ''
    }
  }
  onChangeWoreda = (e) => {
    this.setState({
      woreda: e.target.value
    })
  }
  onChangeErshaTotal = (e) => {
    this.setState({
      ereshaTotal: e.target.value
    })
  }
  onChangeErshaCheck = (e) => {
    this.setState({
      ereshaCheck: e.target.value
    })
  }
  onChangeMinralTotal = (e) => {
    this.setState({
      minralTotal: e.target.value
    })
  }
  onChangeMinralCheck = (e) => {
    this.setState({
      minralCheck: e.target.value
    })
  }
  onChangePlantTotal = (e) => {
    this.setState({
      plantTotal: e.target.value
    })
  }
  onChangePlantCheck = (e) => {
    this.setState({
      plantCheck: e.target.value
    })
  }
  onChangeElectricTotal = (e) => {
    this.setState({
      electricTotal: e.target.value
    })
  }
  onChangeelectricCheck = (e) => {
    this.setState({
      electricCheck: e.target.value
    })
  }
  onChangeBuildingTotal = (e) => {
    this.setState({
      buildingTotal: e.target.value
    })
  }
  onChangeBuildingCheck = (e) => {
    this.setState({
      buildingCheck: e.target.value
    })
  }
  onChangeMarchentTotal = (e) => {
    this.setState({
      marchentTotal: e.target.value
    })
  }
  onChangeMarchentCheck = (e) => {
    this.setState({
      marchentCheck: e.target.value
    })
  }
  onChangeTransportTotal = (e) => {
    this.setState({
      transportTotal: e.target.value
    })
  }
  onChangeTransportCheck = (e) => {
    this.setState({
      transportCheck: e.target.value
    })
  }
  onChangeFinanceTotal = (e) => {
    this.setState({
      financeTotal: e.target.value
    })
  }
  onChangeFinanceCheck = (e) => {
    this.setState({
      financeCheck: e.target.value
    })
  }
  onChangeOtherTotal = (e) => {
    this.setState({
      otherTotal: e.target.value
    })
  }
  onChangeOtherCheck = (e) => {
    this.setState({
      otherCheck: e.target.value
    })
  }
  onSubmit = e => {
    e.preventDefault();
    const inputValues = {
      woreda: this.state.woreda,
      ereshaTotal: this.state.ereshaTotal,
      ereshaCheck: this.state.ereshaCheck,
      minralTotal: this.state.minralTotal,
      minralCheck: this.state.minralCheck,
      plantTotal: this.state.plantTotal,
      plantCheck: this.state.plantCheck,
      electricTotal: this.state.electricTotal,
      electricCheck: this.state.electricCheck,
      buildingTotal: this.state.buildingTotal,
      buildingCheck: this.state.buildingCheck,
      marchentTotal: this.state.marchentTotal,
      marchentCheck: this.state.marchentCheck,
      transportTotal: this.state.transportTotal,
      transportCheck: this.state.transportCheck,
      financeTotal: this.state.financeTotal,
      financeCheck: this.state.financeCheck,
      otherTotal: this.state.otherTotal,
      otherCheck: this.state.otherCheck
    }
    const {
      woreda,
      ereshaTotal,
      ereshaCheck,
      minralTotal,
      minralCheck,
      plantTotal,
      plantCheck,
      electricTotal,
      electricCheck,
      buildingTotal,
      buildingCheck,
      marchentTotal,
      marchentCheck,
      transportTotal,
      transportCheck,
      financeTotal,
      financeCheck,
      otherTotal,
      otherCheck
    } = this.state
    const database = new DataStore("../Registerd_Vaccancy_Data.db");
    database.loadDatabase((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Created Sucessfuly");
      }
    })
    if (electricTotal == '' && ereshaTotal == '' &&
      minralTotal == '' && plantTotal == '' &&
      buildingTotal == '' && marchentTotal == '' &&
      transportTotal == '' && financeTotal == '' &&
      otherTotal == '') {
      alert("እባክዎ መጀመሪያ ይሙሉ!")
    } else {
      database.insert(inputValues, (err, res) => {
        if (err) console.log(err)
        else {
          alert("Registerd!");
          this.setState({
            ereshaTotal: '',
            ereshaCheck: '',
            minralTotal: '',
            minralCheck: '',
            plantTotal: '',
            plantCheck: '',
            electricTotal: '',
            electricCheck: '',
            buildingTotal: '',
            buildingCheck: '',
            marchentTotal: '',
            marchentCheck: '',
            transportTotal: '',
            transportCheck: '',
            financeTotal: '',
            financeCheck: '',
            otherTotal: '',
            otherCheck: ''
          })
        }
      })
    }
  }
  render() {
    return (
      <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "10%" }}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="fname">ወረዳ </label>
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
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="fname" style={label}>እርሻ፣አደን፣ደንና ዓሣ</label>
                <br />
                <label htmlFor="fname">ብዛት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.ereshaTotal}
                  onChange={this.onChangeErshaTotal}
                />
                <label htmlFor="fname">ምርምራ</label>
                <textarea
                  rows="2"
                  type="text"
                  className="form-control"
                  value={this.state.ereshaCheck}
                  onChange={this.onChangeErshaCheck}
                >
                </textarea>


              </div>
              <div className="form-group">
                <label htmlFor="fname" style={label}>ማዕድንና ድንጋይ ሥራ </label>
                <br />
                <label htmlFor="fname">ብዛት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.minralTotal}
                  onChange={this.onChangeMinralTotal}
                />
                <label htmlFor="fname">ምርምራ</label>
                <textarea
                  rows="2"
                  type="text"
                  className="form-control"
                  value={this.state.minralCheck}
                  onChange={this.onChangeMinralCheck}
                >
                </textarea>
              </div>
              <div className="form-group">
                <label htmlFor="fname" style={label}>ፋብሪካ</label>
                <br />
                <label htmlFor="fname">ብዛት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.plantTotal}
                  onChange={this.onChangePlantTotal}
                />
                <label htmlFor="fname">ምርምራ</label>
                <textarea
                  rows="2"
                  type="text"
                  className="form-control"
                  value={this.state.plantCheck}
                  onChange={this.onChangePlantCheck}
                >
                </textarea>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="fname" style={label}>መብራት ፣ጋዝና ውሃ </label>
                <br />
                <label htmlFor="fname">ብዛት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.electricTotal}
                  onChange={this.onChangeElectricTotal}
                />
                <label htmlFor="fname">ምርምራ</label>
                <textarea
                  rows="2"
                  type="text"
                  className="form-control"
                  value={this.state.electricCheck}
                  onChange={this.onChangeelectricCheck}
                >
                </textarea>
              </div>
              <div className="form-group">
                <label htmlFor="fname" style={label}>ሕንፃ ሥራ</label>
                <br />
                <label htmlFor="fname">ብዛት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.buildingTotal}
                  onChange={this.onChangeBuildingTotal}
                />
                <label htmlFor="fname">ምርምራ</label>
                <textarea
                  rows="2"
                  type="text"
                  className="form-control"
                  value={this.state.buildingCheck}
                  onChange={this.onChangeBuildingCheck}
                >
                </textarea>
              </div>
              <div className="form-group">
                <label htmlFor="fname" style={label}>ጅምላና ችርቻሮ ንግድ </label>
                <br />
                <label htmlFor="fname">ብዛት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.marchentTotal}
                  onChange={this.onChangeMarchentTotal}
                />
                <label htmlFor="fname">ምርምራ</label>
                <textarea
                  rows="2"
                  type="text"
                  className="form-control"
                  value={this.state.marchentCheck}
                  onChange={this.onChangeMarchentCheck}
                >
                </textarea>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="fname" style={label}>ትራንስፖርት ፣ዕቃ ማከማቻና መገናኛ </label>
                <br />
                <label htmlFor="fname">ብዛት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.transportTotal}
                  onChange={this.onChangeTransportTotal}
                />
                <label htmlFor="fname">ምርምራ</label>
                <textarea
                  rows="2"
                  type="text"
                  className="form-control"
                  value={this.state.transportCheck}
                  onChange={this.onChangeTransportCheck}
                >
                </textarea>
              </div>
              <div className="form-group">
                <label htmlFor="fname" style={label}>ፋይናንስ ፣መድንና የመሳሰለው ንግድ </label>
                <br />
                <label htmlFor="fname">ብዛት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.financeTotal}
                  onChange={this.onChangeFinanceTotal}
                />
                <label htmlFor="fname">ምርምራ</label>
                <textarea
                  rows="2"
                  type="text"
                  className="form-control"
                  value={this.state.financeCheck}
                  onChange={this.onChangeFinanceCheck}
                >
                </textarea>
              </div>
              <div className="form-group">
                <label htmlFor="fname" style={label}>ሰበነክ/የተለያዩ ማህበራዊ አገልግሎት ሰጭ ድርጅቶች </label>
                <br />
                <label htmlFor="fname">ብዛት</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.otherTotal}
                  onChange={this.onChangeOtherTotal}
                />
                <label htmlFor="fname">ምርምራ</label>
                <textarea
                  rows="2"
                  type="text"
                  className="form-control"
                  value={this.state.otherCheck}
                  onChange={this.onChangeOtherCheck}
                >
                </textarea>
              </div>
            </div>
          </div>
          <Link to="/registerd_vaccancy"
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
const label = {
  color: "blue",

}

export default Registerd_vacc_form;
