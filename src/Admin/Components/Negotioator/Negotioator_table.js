import React, { Component } from 'react';
import DataStore from 'nedb'
import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

let database, globalId, globalkey;
class Negotiator_table extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      Negotiotor_Data: [],
      // startDate: '',
      // endDate: '',
      ListTemp: [],
      temp: '',
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
  onChangeStartDate = (e) => {
    this.setState({
      startDate: e.target.value
    })
  }
  onChangeEndDate = (e) => {
    this.setState({
      endDate: e.target.value
    })
  }
  handleCancel = () => {
    this.setState({
      isEditing: false
    })
  }
  renderEditForm = () => {
    if (this.state.isEditing) {
      return (
        <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", }}>
          <div><button onClick={this.handleCancel} className=" btn btn-danger glyphicon glyphicon-remove-circle" style={{ padding: "1%", float: "right" }}></button></div>
          <form onSubmit={this.onSubmit} style={{ padding: "7%" }}>
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
                  <label htmlFor="fname">ክሱ  የቀረበው</label>
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
                  <label htmlFor="mname">የክሱ ምክንያት</label>
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
                  <label htmlFor="lname">ክሱ የቀረበበት ቀን</label>
                  <input
                    type="date"
                    className="form-control"
                    value={this.state.startDate}
                    onChange={this.onChangeStartDate}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mname">የቀረበው ክስ ውጤት</label>

                  <select
                    className="form-control"
                    value={this.state.result}
                    onChange={this.onChangeResult}>
                    <option>በስምምነት የተፈታ</option>
                    <option>በብይን የተዘገበ</option>
                    <option>በውሳኔ ተዘጋ</option>
                    <option>ውድቅ የተደረገ</option>
                    <option>ይግባን የተባለ</option>
                    <option>በይግባኝ የተሻረ</option>
                  </select>
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
  onSubmit = (e) => {
    e.preventDefault();

    const dataToupdate = {
      code: this.state.code,
      total: this.state.total,
      coverage: this.state.coverage,
      reason: this.state.reason,
      byWhome: this.state.byWhome,
      startDate: this.state.startDate,
      result: this.state.result,
      endDate: this.state.endDate
    }
    //update from database
    database.update({ _id: globalId }, { $set: dataToupdate }, (err, count) => {
      if (err) {
        console.log(err);
      } else {
        alert("Updated!")
      }
    })
    //handle editing arrays
    let arr = this.state.Negotiotor_Data;
    arr[globalkey] = dataToupdate;
    this.setState({
      Negotiotor_Data: arr,
      isEditing: false
    })
  }
  handleEditform = (id, key) => {
    globalId = id;
    globalkey = key;
    const items = this.state.Negotiotor_Data.filter(item => item._id == id);
    items.map((item) => {
      this.setState({
        code: item.code,
        total: item.total,
        coverage: item.coverage,
        reason: item.reason,
        byWhome: item.byWhome,
        startDate: item.startDate,
        result: item.result,
        endDate: item.endDate
      })
    })
    this.setState({
      isEditing: true,
    })
  }
  LoadData = () => {
    database = new DataStore("../Negotioator_Data.db");
    database.loadDatabase(err => {
      if (err) throw err;
    });
    database.find({}, (err, docs) => {
      this.setState({
        Negotiotor_Data: docs
      });
      this.setState({
        temp: this.state.Negotiotor_Data
      })

    })
  }
  componentDidMount() {
    this.LoadData();
  }
  DeleteItem = (id) => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      const items = this.state.Negotiotor_Data.filter(item => item._id !== id)
      this.setState({
        Negotiotor_Data: items
      })
      database.remove({ _id: id }, {}, (err) => {
        if (err) console.log(err);
      })
    }
  }
  TableBody = () => {
    let counter = 1;
    return this.state.Negotiotor_Data.map((current, index) => {
      return (
        <tr key={index}>
          <td>{counter++}</td>
          <td>{current.code}</td>
          <td>{current.total}</td>
          <td>{current.coverage}</td>
          <td>{current.byWhome}</td>
          <td>{current.reason}</td>
          <td>{current.startDate}</td>
          <td>{current.result}</td>
          <td>{current.endDate}</td>
          <td>
            <button className="btn btn-primary" onClick={() => this.handleEditform(current._id, index)} style={{}} ><span className=" glyphicon glyphicon-edit"></span>Edit</button>
            <button className="btn btn-danger" onClick={() => this.DeleteItem(current._id)} style={{}}> <span className="glyphicon glyphicon-trash"></span>Delete</button>
          </td>
        </tr>)
    })
  }
  Header = () => {
    return (
      <table className="table table-striped table-bordered">
        <caption style={{ fontWeight: "bold", textAlign: "center" }}>ለመደበኛ ፍ/ቤት የቀረቡ የስራ ክርክሮች ብዛት በኢንዱስትሪ መደብ ሪፖርት ማቅረቢያ ቅፅ</caption>
        <thead>
          <tr>
            <th>ተ.ቁ</th>
            <th>የኢንዱስትሪ መደብ</th>
            <th>የቀረቡ ክሶች</th>
            <th>የድርጅቱ ይዞታ</th>
            <th>ክሱ የቀረበው</th>
            <th>ምክንያት</th>
            <th>የቀረበበት ቀን</th>
            <th>የተደረሰበት ውጤት</th>
            <th>የተጠናቀቀበት ቀን</th>
            <th style={{ color: "blue" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.TableBody()}
        </tbody>
      </table>
    )
  }
  //search items
  SearchResult = (startDat, endDate) => {
    if (startDat != '' && endDate !== '') {
      let result = this.state.Negotiotor_Data.filter(item => item.startDate >= startDat)
        .filter(items => items.startDate <= endDate)
      this.setState({
        Negotiotor_Data: result
      })
    } else {
      this.setState({
        Negotiotor_Data: this.state.temp
      })
    }
  }
  render() {
    return (
      this.state.isEditing ?
        <div>
          {this.renderEditForm()}
        </div>
        :
        <div className="table-responsive">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="fname">የሪፖርት ጊዜ ከ*</label>
                <input
                  style={InputBorder}
                  type="date"
                  className="form-control"
                  onChange={this.onChangeStartDate}
                  value={this.state.startDate}
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="fname">እስከ *</label>
                <input
                  style={InputBorder}
                  type="date"
                  className="form-control"
                  onChange={this.onChangeEndDate}
                  value={this.state.endDate}
                />
              </div>
            </div>
            <div className="col-sm-1">
              <div className="form-group">
                <label htmlFor="fname">*</label>
                <button className="form-control glyphicon glyphicon-search btn btn-primary " style={{ padding: "2" }} onClick={() => this.SearchResult(this.state.startDate, this.state.endDate)}>
                  search
            </button>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-group">
                <label htmlFor="fname">*</label>
                <ExcelFile filename="ለመደበኛ ፍ/ቤት የቀረቡ የስራ ክርክሮች ብዛት በኢንዱስትሪ መደብ ሪፖርት" element={<button className="form-control glyphicon glyphicon-cloud-download btn btn-primary " >
                  ሪፖርት</button>}>
                  <ExcelSheet data={this.state.Negotiotor_Data} name="Judgment">
                    <ExcelColumn label="የኢንዱስትሪ መደብ" value="code" />
                    <ExcelColumn label="የቀረቡ ክሶች" value="total" />
                    <ExcelColumn label="የድርጅቱ ይዞታ" value="coverage" />
                    <ExcelColumn label="ክሱ የቀረበው" value="byWhome" />
                    <ExcelColumn label="የክሱ ምክንያት" value="reason" />
                    <ExcelColumn label="ክሱ የቀረበበት ቀን" value="startDate" />
                    <ExcelColumn label="የቀረበበት ክስ ውጤት" value="result" />
                    <ExcelColumn label="የተጠናቀቀበት ቀን" value="endDate" />
                  </ExcelSheet>
                </ExcelFile>
              </div>
            </div>
          </div>
          {this.Header()}
        </div>
    );
  }
}
const InputBorder = {
  borderTopWidth: "0",
  borderLeftWidth: "0",
  borderRightWidth: "0",
  borderBottomWidth: "1",
  borderBottomColor: "blue",
  borderRadius: '0',
}
export default Negotiator_table;
