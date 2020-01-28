import React from 'react'
import { Link } from 'react-router-dom'
import DataStore from 'nedb'
import {ExcelFile, ExcelSheet} from "react-data-export";

let database;
class judgment_dbt_table extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: '',
      endDate: '',
      Judgment_Data: [],
      temp: ''
    }
  }
  lie = () => {
    alert("Hello wowo")
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
  LoadData = () => {
    database = new DataStore("../Judgment_Data.db");
    database.loadDatabase(err => {
      if (err) throw err;
    });
    database.find({}, (err, docs) => {
      this.setState({
        Judgment_Data: docs
      });
      this.setState({
        temp: this.state.Judgment_Data
      })
      console.log(this.state.Judgment_Data);

    })
  }
  componentDidMount() {
    this.LoadData()
  }

  DeleteItem = (id) => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      const items = this.state.Judgment_Data.filter(item => item._id !== id)
      this.setState({
        Judgment_Data: items
      })
      database.remove({ _id: id }, {}, (err) => {
        if (err) console.log(err);
    })
    }
  }
  //table body
  TableBody = () => {
    let counter = 1;
    return this.state.Judgment_Data.map((current, index) => {
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
            <Link to={"/judge/edit/" + current._id} style={{ marginLeft: 4, }} ><span className="glyphicon glyphicon-trash"></span>Edit</Link>
            <button onClick={() => this.DeleteItem(current._id)} style={{ marginRight: 4, color: "red" }}> <span className="glyphicon glyphicon-edit"></span>Delete</button>
          </td>
        </tr>)
    })
  }

  //table header
  Header = () => {
    return (
      <table className="table table-striped table-bordered">
        <caption style={{ fontWeight: "bold", textAlign: "center" }}>ለአስማሚ የቀረቡ አቤቱታዎች ብዛት በኢንዱስትሪ መደብ ሪፖርት ማቅረቢያ ቅፅ</caption>
        <thead>
          <tr>
            <th>ተ.ቁ</th>
            <th>የኢንዱስትሪ መደብ</th>
            <th>የአቤቱታዎች ብዛት</th>
            <th>የድርጅቱ ይዞታ</th>
            <th>አቤቱታው የቀረበው</th>
            <th>የአቤቱታው ምክንያት</th>
            <th>የቀረበበት ቀን</th>
            <th>የተደረሰበት ውጤት</th>
            <th>የተጠናቀቀበት ቀን</th>
            <th style={{ color: "blue" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.TableBody()}
        </tbody>
      </table>)
  }
  //search items
  SearchResult = (startDat, endDate) => {
    if (startDat != '' && endDate !== '') {
      let result = this.state.Judgment_Data.filter(item => item.startDate >= startDat)
        .filter(items => items.startDate <= endDate)
      this.setState({
        Judgment_Data: result
      })
    } else {
      this.setState({
        Judgment_Data: this.state.temp
      })
    }
  }
  //report data
  _reportResult=(startDate, endDate)=>{
    const multiDataSet = [
    {
        columns: ["Name", "Salary", "Sex"],
        data: [
            ["Johnson", 30000, "Male"],
            ["Monika", 355000, "Female"],
            ["Konstantina", 20000, "Female"],
            ["John", 250000, "Male"],
            ["Josef", 450500, "Male"],
        ]
    },
    // {
    //     xSteps: 1, // Will start putting cell with 1 empty cell on left most
    //     ySteps: 5, //will put space of 5 rows,
    //     columns: ["Name", "Department"],
    //     data: [
    //         ["Johnson", "Finance"],
    //         ["Monika", "IT"],
    //         ["Konstantina", "IT Billing"],
    //         ["John", "HR"],
    //         ["Josef", "Testing"],
    //     ]
    // }
];
    alert("Hello report")
  }
  render() {
    return (
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
              <button className="form-control glyphicon glyphicon-search btn btn-primary " onClick={() => this.SearchResult(this.state.startDate, this.state.endDate)}>
                search
            </button>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="form-group">
            <ExcelFile>
                <ExcelSheet dataSet={multiDataSet} name="Organization"/>
            </ExcelFile>
              <button className="form-control glyphicon glyphicon-cloud-download btn btn-primary " onClick={() => this._reportResult(this.state.startDate, this.state.endDate)}>
               ሪፖርት
            </button>
            </div>
          </div>
        </div>
        {this.Header()}
      </div>
    )
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
export default judgment_dbt_table
