import React, { Component } from 'react';
import DataStore from 'nedb'
import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

let database, globalId, globalkey, result, tempworeda;
class Vaccancy_table extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      isFound: false,
      Vaccancy_Data: [],
      temp: '',
      woreda: 'ቡለን',
      orgName: '',
      orgPlace: '',
      coverage: '',
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
      woreda: e.target.value,
    });
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
  //load data while the system did mount
  loadData = () => {
    database = new DataStore("../Vaccancy_Data.db");
    database.loadDatabase(err => {
      if (err) console.log(err);
    })
    database.find({}, (err, docs) => {
      this.setState({
        Vaccancy_Data: docs
      });
      this.setState({
        temp: this.state.Vaccancy_Data
      })
    })

  }
  componentDidMount() {
    this.loadData();
  }
  //handle cancel button in the edit form
  handleCancel = () => {
    this.setState({
      isEditing: false
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    const dataToUpdate = {
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
    database.update({ _id: globalId }, { $set: dataToUpdate }, (err, res) => {
      if (err) console.log(err)
      else {
        alert("Updated!")
      }
    });
    let arr = this.state.Vaccancy_Data;
    arr[globalkey] = dataToUpdate;
    this.setState({
      Vaccancy_Data: arr,
      isEditing: false
    })
  }
  //render Edit form
  renderEditForm = () => {
    if (this.state.isEditing) {
      return (
        <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", }}>
          <div><button onClick={this.handleCancel} className=" btn btn-danger glyphicon glyphicon-remove-circle" style={{ padding: "1%", float: "right" }}></button></div>
          <form onSubmit={this.onSubmit} style={{ padding: "7%" }}>
            <div className="row">
              <div className="col-sm-4">
                <div className="form-group">
                  <label>ወረዳ</label>
                  <select
                    className="form-control"
                    value={this.state.woreda}
                    onChange={this.onChangeWoreda}
                  >
                    <option>{this.state.woreda}</option>
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
      )
    }
  }
  //handel Edit form
  handleEditform = (id, index) => {
    globalId = id;
    globalkey = index;
    const items = this.state.Vaccancy_Data.filter(item => item._id == id);
    items.map(item => {
      this.setState({
        woreda: item.woreda,
        orgName: item.orgName,
        orgPlace: item.orgPlace,
        coverage: item.coverage,
        establishDate: item.establishDate,
        service: item.service,
        permnentMale: item.permnentMale,
        permnentFemale: item.permnentFemale,
        tempoMale: item.tempoMale,
        tempoFemale: item.tempoFemale,
        someWorkMale: item.someWorkMale,
        someWorkFemale: item.someWorkFemale,
        isEditing: true,
      })
    })
  }
  //delet section
  DeleteItem = (id) => {
    if (window.confirm("እርግጠኛ ንዎት ይጥፋ?")) {
      const items = this.state.Vaccancy_Data.filter(item => item._id !== id)
      this.setState({
        Vaccancy_Data: items,
        temp: items
      });
      database.remove({ _id: id }, {}, err => {
        if (err) console.log(err);
      })
    }
  }
  //search from Array storage
  SearchResult = () => {
    result = this.state.temp.filter(item => item.woreda == this.state.woreda);
    if (result.length > 0) {
      this.setState({
        Vaccancy_Data: result,
        isFound: false
      })

    } else {
      this.setState({
        Vaccancy_Data: this.state.temp,
        isFound: true
      })
    }
  }
  //Table Body part
  TableBody = () => {
    let counter = 1;
    return this.state.Vaccancy_Data.map((current, index) => {
      return (
        <tbody key={index}>
          <tr >
            <td>{counter++}</td>
            <td>{current.orgName}</td>
            <td>{current.orgPlace}</td>
            <td>{current.coverage}</td>
            <td>{current.establishDate}</td>
            <td>{current.service}</td>
            <td>{current.permnentMale}</td>
            <td>{current.permnentFemale}</td>
            <td>{current.permnentMale + current.permnentFemale}</td>
            <td>{current.tempoMale}</td>
            <td>{current.tempoFemale}</td>
            <td>{(current.tempoMale + current.tempoFemale)}</td>
            <td>{current.someWorkMale}</td>
            <td>{current.someWorkFemale}</td>
            <td>{current.someWorkMale + current.someWorkFemale}</td>
            <td>
              <button className="btn btn-primary" onClick={() => this.handleEditform(current._id, index)} style={{}} ><span className=" glyphicon glyphicon-edit"></span>Edit</button>
              <button className="btn btn-danger" onClick={() => this.DeleteItem(current._id)} style={{}}> <span className="glyphicon glyphicon-trash"></span>Delete</button>
            </td>
          </tr>
        </tbody>
      )
    })
  }
  //Table Header part
  Header = () => {
    return (
      <table className="table table-striped table-bordered">
        <caption style={{ fontWeight: "bold", textAlign: "center" }}>
          በ {this.state.isEditing}ወረዳ ዉስጥ የሚገኙ የሥራ ቦታዎች /ድርጅቶች/ መረጃ መሰብሰቢያ ቅፅ
        </caption>
        <thead>
          <tr>
            <th rowSpan="3">ተ.ቁ</th>
            <th rowSpan="3">የድርጅቱ ስም</th>
            <th rowSpan="3">የድርጅቱ መገኛ ቦታ</th>
            <th rowSpan="3">የድርጅቱ ይዞታ</th>
            <th rowSpan="3">የተቋቋመበት ዘመን</th>
            <th rowSpan="3">የሚያመርታቸው/የሚሰጠው አገልግሎት</th>
            <th colSpan="9">የሰራተኞች ቅጥር ሁኔታ</th>
            <th rowSpan="3" style={{ backgroundColor: '#f1f1f1' }}>Action</th>
          </tr>
          <tr>
            <th colSpan="3">ላልተወሰነ ጊዜ/ቋሚ</th>
            <th colSpan="3">ለተወሰነ ጊዜ</th>
            <th colSpan="3" >ለተወሰነ ስራ</th>
          </tr>
          <tr>
            <th>ወ</th>
            <th>ሴ</th>
            <th>ድ</th>
            <th>ወ</th>
            <th>ሴ</th>
            <th>ድ</th>
            <th>ወ</th>
            <th>ሴ</th>
            <th>ድ</th>
          </tr>
        </thead>
        {
          this.state.isFound ?
            (
              <tbody>
                <tr>
                  <th style={{
                    color: 'red',
                    fontWeight: 'bold',
                    fontStyle: 'italic'
                  }}>
                    Not Found
                  </th>
                </tr>
              </tbody>
            )
            :
            this.TableBody()
        }

      </table>
    )
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
            <div className="form-group col-sm-3">
              <select
                className="form-control"
                style={InputBorder}
                value={this.state.woreda}
                onChange={this.onChangeWoreda}

              >
                <option>ቡለን</option>
                <option>ወምበራ</option>
                <option>ድባጤ</option>
                <option>ዳንጉር</option>
              </select>
            </div>
            <div className="col-sm-3">
              <div className="form-group">

                <input
                  style={InputBorder}
                  type="text"
                  placeholder="search..."
                  className="form-control"
                // onChange={this.onChangeEndDate}
                // value={this.state.endDate}
                />
              </div>
            </div>
            <div className="col-sm-1">
              <div className="form-group">
                <button className="form-control glyphicon glyphicon-search btn btn-primary " style={{ padding: "2" }} onClick={() => this.SearchResult()}>
                  search
            </button>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-group">

                <ExcelFile filename="ሪፖርት" element={<button className="form-control glyphicon glyphicon-cloud-download btn btn-primary " >
                  ሪፖርት</button>}>
                  <ExcelSheet data={this.state.Judgment_Data} name="Judgment">
                    <ExcelColumn label="የኢንዱስትሪ መደብ" value="code" />
                    <ExcelColumn label="የአቤቱታዎች ብዛት" value="total" />
                    <ExcelColumn label="የድርጅቱ ይዞታ" value="coverage" />
                    <ExcelColumn label="አቤቱታው የቀረበው" value="byWhome" />
                    <ExcelColumn label="የአቤቱታው ምክንያት" value="reason" />
                    <ExcelColumn label="የቀረበበት ቀን" value="startDate" />
                    <ExcelColumn label="የተደረሰበት ውጤት" value="result" />
                    <ExcelColumn label="የተጠናቀቀበት ቀን" value="endDate" />
                  </ExcelSheet>
                </ExcelFile>
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
export default Vaccancy_table;
