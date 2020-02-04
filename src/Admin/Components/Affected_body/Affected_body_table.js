import React, { Component } from 'react';
import DataStore from 'nedb'
import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

let database, globalId, globalkey;
let total = 0;
class Affected_body_table extends Component {
  constructor() {
    super();
    this.state = {
      startDate: '',
      endDate: '',
      isEditing: false,
      Affected_body_Data: [],
      temp: '',
      headLela: false,
      code: '',
      head: '',
      underPrt: '',
      upperPrt: '',
      c: '',
      other: '',
      unspecified: '',
      age: '',
      date: '',
      accidentType: '',
      AccidentReason: '',
      acciTypLela: false,
      acciResLela: false
    }
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
  onChangeCode = (e) => {
    this.setState({
      code: e.target.value
    })
  }
  onChangeHead = (e) => {
    if (e.target.value == 'ሌላ') {
      this.setState({
        headLela: true
      })
    } else {
      this.setState({
        head: e.target.value,
        headLela: false
      })
    }
  }
  onChangeUnderPrt = (e) => {
    this.setState({
      underPrt: e.target.value
    })
  }
  onChangeUpperPrt = (e) => {
    this.setState({
      upperPrt: e.target.value
    })
  }
  onChangeC = (e) => {
    this.setState({
      c: e.target.value
    })
  }
  onChangeOther = (e) => {
    this.setState({
      other: e.target.value
    })
  }
  onChangeUnspecified = (e) => {
    this.setState({
      unspecified: e.target.value
    })
  }
  onChangeAge = (e) => {
    this.setState({
      age: e.target.value
    })
  }
  onChangeDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }
  onChangeAccidentType = (e) => {
    if (e.target.value == 'ሌላ') {
      this.setState({
        acciTypLela: true,
      })
    } else {
      this.setState({
        accidentType: e.target.value,
        acciTypLela: false,
      })
    }
  }
  onChangeAccidentReason = (e) => {
    if (e.target.value == 'ሌላ') {
      this.setState({
        acciResLela: true
      })
    } else {
      this.setState({
        AccidentReason: e.target.value,
        acciResLela: false
      })
    }
  }
  onChangeHeadLela = (e) => {
    this.setState({
      head: e.target.value,
    })
  }
  onChangeAcciTypLela = (e) => {
    this.setState({
      accidentType: e.target.value
    })
  }
  onChangeAcciResLela = (e) => {
    this.setState({
      AccidentReason: e.target.value
    })
  }

  handleCancel = () => {
    this.setState({
      isEditing: false
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    const dataToUpdate = {
      code: this.state.code,
      head: this.state.head,
      underPrt: this.state.underPrt,
      upperPrt: this.state.upperPrt,
      c: this.state.c,
      other: this.state.other,
      unspecified: this.state.unspecified,
      age: this.state.age,
      date: this.state.date,
      accidentType: this.state.accidentType,
      AccidentReason: this.state.AccidentReason
    }
    database.update({ _id: globalId }, { $set: dataToUpdate }, (err, res) => {
      if (err) console.log(err)
      else alert("Updated!")
    });
    let arr = this.state.Affected_body_Data;
    arr[globalId] = dataToUpdate;
    this.setState({
      Affected_body_Data: arr,
      isEditing: false
    })
  }
  handleEditform = (id, key) => {
    globalId = id;
    globalkey = key;
    const items = this.state.Affected_body_Data.filter(item => item._id == id);
    items.map(item => {
      this.setState({
        code: item.code,
        head: item.head,
        underPrt: item.underPrt,
        upperPrt: item.upperPrt,
        c: item.c,
        other: item.other,
        unspecified: item.unspecified,
        age: item.age,
        date: item.date,
        accidentType: item.accidentType,
        AccidentReason: item.AccidentReason
      })
    });
    this.setState({
      isEditing: true
    })
  }
  renderEditForm = () => {
    if (this.state.isEditing) {
      return (
        <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", }}>
          <div><button onClick={this.handleCancel} className=" btn btn-danger glyphicon glyphicon-remove-circle" style={{ padding: "1%", float: "right" }}></button></div>
          <form onSubmit={this.onSubmit} style={{ padding: "5%" }}>
            <div className='row'>
              <div className="col-sm-3">
                <div className="form-group">
                  <label>የኢንዱስትሪ መደብ ቁጥር</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.code}
                    onChange={this.onChangeCode}
                  />
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
                <div className="form-group">
                  <label>እድሜ</label>
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.age}
                    onChange={this.onChangeAge}
                  />
                </div>
              </div>
              <div className="col-sm-9" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "3%" }}>
                <label>የተጎዳው የሰውነት ክፍል</label>
                <hr />
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>ጭንቅላት</label>
                      <select
                        className="form-control"
                        value={this.state.head}
                        onChange={this.onChangeHead}>
                        <option>ዓይን</option>
                        <option>ጆሮ</option>
                        <option >ሌላ</option>
                      </select>
                      {this.state.headLela ?
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ሌላ"
                            onChange={this.onChangeHeadLela}
                          />
                        </div>
                        : <h2></h2>}
                    </div>
                    <div className="form-group">
                      <label>የታችኛው የሰውነት ክፍል</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.underPrt}
                        onChange={this.onChangeUnderPrt}
                      />
                    </div>
                    <div className="form-group">
                      <label>የላይኛው የሰውነት ክፍል</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.upperPrt}
                        onChange={this.onChangeUpperPrt}
                      />
                    </div>
                    <div className="form-group">
                      <label>C</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.c}
                        onChange={this.onChangeC}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>ሌላ</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.other}
                        onChange={this.onChangeOther}
                      />
                    </div>
                    <div className="form-group">
                      <label>ያልተገለፀ</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.unspecified}
                        onChange={this.onChangeUnspecified}
                      />
                    </div>
                    <div className="form-group">
                      <label>የጉዳት ዓይነት</label>
                      <select
                        className="form-control"
                        value={this.state.accidentType}
                        onChange={this.onChangeAccidentType}
                      >
                        <option>መላጥና መቀጥቀጥ</option>
                        <option>መቃጠል</option>
                        <option>መቆረጥ</option>
                        <option>መወጋት</option>
                        <option>መጎረድ</option>
                        <option>ውልቃት</option>
                        <option>መሰበር</option>
                        <option>የሥር መዞር</option>
                        <option>የዓይን መጎዳት</option>
                        <option>መታፈን</option>
                        <option>የመስማት ጉዳት</option>
                        <option>መስመጥ</option>
                        <option>ሞት</option>
                        <option>ሌላ</option>
                      </select>
                      {this.state.acciTypLela ?
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ሌላ"
                            onChange={this.onChangeAcciTypLela}
                          />
                        </div>
                        : <h2></h2>}
                    </div>
                    <div className="form-group">
                      <label>የደረሰው ዓደጋ ምክንያት </label>
                      <select
                        className="form-control"
                        value={this.state.AccidentReason}
                        onChange={this.onChangeAccidentReason}
                      >
                        <option>ማሽን</option>
                        <option>ኤለክትሪክ</option>
                        <option>የእጅ መሳርያ</option>
                        <option>እሳትና ፍንዳታ</option>
                        <option>አሲድና ፍል ነገር</option>
                        <option>መውደቅ ማንዳለጥ</option>
                        <option>ናዳ</option>
                        <option>ፍንጣሪ</option>
                        <option>ግጭትና መደናቀፍ</option>
                        <option>አያያዝና ሸክም</option>
                        <option>ከከፍ ወዳቂ ነገሮች</option>
                        <option>መጓጓዣና ማጓጓዣ</option>
                        <option>እንስሳት</option>
                        <option>የሠራተኛ ስህተት</option>
                        <option>ሌላ</option>
                      </select>
                      {this.state.acciResLela ?
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ሌላ"
                            onChange={this.onChangeAcciResLela}
                          />
                        </div>
                        : <h2></h2>}
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
                  <span className="glyphicon glyphicon-save"></span> Update
        </button>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }
  LoadData = () => {
    database = new DataStore("../Affected_Body_Data.db");
    database.loadDatabase(err => {
      if (err) console.log(err)
    });
    database.find({})
      .sort({ code: 1 })
      .exec((err, docs) => {
        this.setState({
          Affected_body_Data: docs
        });
        this.setState({
          temp: this.state.Affected_body_Data
        })
      });

  }
  componentDidMount() {
    this.LoadData();
  }
  DeleteItem = (id) => {
    if (window.confirm("እርግጠኛ ንዎት ይጥፋ?")) {
      const items = this.state.Affected_body_Data.filter(item => item._id !== id);
      this.setState({
        Affected_body_Data: items
      });
      database.remove({ _id: id }, {}, err => {
        if (err) console.log(err);
      })
    }
  }
  SearchResult = () => {
    if (this.state.startDate != '' && this.state.endDate != '') {
      let result = this.state.Affected_body_Data.filter(item => item.date >= this.state.startDate)
        .filter(item => item.date <= this.state.endDate);
      this.setState({
        Affected_body_Data: result,
        startDate: '',
        endDate: ''
      });
    } else {
      this.setState({
        Affected_body_Data: this.state.temp
      })
    }
  }
  TableBody = () => {
    let counter = 1;
    let tempCode = 'mebratu';
    let check = 1;
    return this.state.Affected_body_Data.map((current, index) => {
      total = index;
      if (current.code == tempCode) {
        check = 0;
        counter++;
        total++;
      } else {
        check = 1;
        counter = 1;
        tempCode = current.code;
        total++;

      }
      return (
        <tr key={index}>
          <td>{++index}</td>
          <td>{check ? current.code : '""'}</td>
          <td>{current.head}</td>
          <td>{current.underPrt}</td>
          <td>{current.upperPrt}</td>
          <td>{current.c}</td>
          <td>{current.other}</td>
          <td>{current.unspecified}</td>
          <td></td>
          <td>
            <button className="btn btn-primary" onClick={() => this.handleEditform(current._id, index)} style={{}} ><span className=" glyphicon glyphicon-edit"></span>Edit</button>
            <button className="btn btn-danger" onClick={() => this.DeleteItem(current._id)} style={{}}> <span className="glyphicon glyphicon-trash"></span>Delete</button>
          </td>
        </tr>
      )
    })
  }
  Header = () => {
    return (
      <table className="table table-striped table-bordered">
        <caption style={{ fontWeight: "bold", textAlign: "center" }}>የተጎዳው የሰውነት ክፍል በኢንዱስትሪ መደብ</caption>
        <thead>
          <tr>
            <th rowSpan="2">ተ.ቁ</th>
            <th rowSpan="2">የኢንዱስትሪ መደብ</th>
            <th colSpan="6">የተጎዳው የሰውነት ክፍል</th>
            <th rowSpan="2">ድምር</th>
            <th style={{ color: "blue" }} rowSpan="2">Action</th>
          </tr>
          <tr>
            <th>ጭንቅላት</th>
            <th>የታችኛው የሰውነት ክፍል</th>
            <th>የላይኛው የሰውነት ክፍል</th>
            <th>C</th>
            <th>ሌላ</th>
            <th>ያልተገለፀ</th>
          </tr>
        </thead>
        <tbody>
          {this.TableBody()}
        </tbody>
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
                <button className="form-control glyphicon glyphicon-search btn btn-primary " style={{ padding: "2" }} onClick={() => this.SearchResult()}>
                  search
            </button>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-group">
                <label htmlFor="fname">*</label>
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
export default Affected_body_table;
