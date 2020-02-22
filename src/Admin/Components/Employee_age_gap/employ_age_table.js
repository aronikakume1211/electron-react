import React, { Component } from 'react';
import DataStore from 'nedb'
import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

let database, globalId, globalkey;
let total, under14 = 0;
let abovetot = 1;
class Employee_age_gap extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      Affected_body_Data: [],
      temp: '',
      tempAge: 0,
      startDate: '',
      endDate: '',
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
    console.log(this.state.Affected_body_Data);

    let tempCode = 'mebratu';
    let check = 1;
    let underforty = '---';
    let fortyToeighty = '---';
    let  nintyTotwnfour = '---';
    let towenyfivetotoennine = '---';
    let thirtytotrhtyfor = '---';
    let trtyfiftitrynin = '---';
    let fortytofortyfor = '---';
    let fortfiftofortynine = '---';
    let fiftytofifityfife = '---';
    let ubovefiftyfife = '---';
      
    return this.state.Affected_body_Data.map((current, index) => {
      total = index;
      if (current.code === tempCode) {
        check = 0;
        counter++;
        total++;
      } else {
        check = 1;
        counter = 1;
        tempCode = current.code;
        total++;

      }
      if (current.age < 14) {
        underforty = current.age;
        fortyToeighty = '--';
        nintyTotwnfour = '--';
        towenyfivetotoennine = '--';
        thirtytotrhtyfor = '--';
        trtyfiftitrynin = '--';
        fortytofortyfor = '--';
        fortfiftofortynine = '--';
        fiftytofifityfife = '--';
        ubovefiftyfife = '--';
      }
      else if (current.age >= 14 && current.age <= 18) {
        underforty = '---';
        fortyToeighty = current.age
        nintyTotwnfour = '---';
        towenyfivetotoennine = '---';
        thirtytotrhtyfor = '---';
        trtyfiftitrynin = '--';
        fortytofortyfor = '---';
        fortfiftofortynine = '---';
        fiftytofifityfife = '---';
        ubovefiftyfife = '---';

      }
      else if (current.age >= 19 && current.age <= 24) {
        underforty = '---';
        fortyToeighty = '---';
        nintyTotwnfour = current.age
        towenyfivetotoennine = '---';
        thirtytotrhtyfor = '---';
        trtyfiftitrynin = '--';
        fortytofortyfor = '---';
        fortfiftofortynine = '---';
        fiftytofifityfife = '---';
        ubovefiftyfife = '---';
      }
      else if (current.age >= 25 && current.age <= 29) {
        underforty = '---';
        fortyToeighty = '---';
        nintyTotwnfour = '---';
        towenyfivetotoennine = current.age;
        thirtytotrhtyfor = '---';
        trtyfiftitrynin = '--';
        fortytofortyfor = '---';
        fortfiftofortynine = '---';
        fiftytofifityfife = '---';
        ubovefiftyfife = '---';
      }
      else if (current.age >= 30 && current.age <= 34) {
        underforty = '---';
        fortyToeighty = '---';
        nintyTotwnfour = '---';
        towenyfivetotoennine = '---';
        thirtytotrhtyfor = current.age;
        trtyfiftitrynin = '---';
        fortytofortyfor = '---';
        fortfiftofortynine = '---';
        fiftytofifityfife = '---';
        ubovefiftyfife = '---';
        abovetot++;
      }
      else if (current.age >= 35 && current.age <= 39) {
        underforty = '---';
        fortyToeighty = '---';
        nintyTotwnfour = '---';
        towenyfivetotoennine = '---';
        thirtytotrhtyfor = '---';
        trtyfiftitrynin = current.age;
        fortytofortyfor = '---';
        fortfiftofortynine = '---';
        fiftytofifityfife = '---';
        ubovefiftyfife = '---';
      }
      else if (current.age >= 40 && current.age <= 44) {
        underforty = '---';
        fortyToeighty = '---';
        nintyTotwnfour = '---';
        towenyfivetotoennine = '---';
        thirtytotrhtyfor = '---';
        trtyfiftitrynin = '---';
        fortytofortyfor = current.age;
        fortfiftofortynine = '---';
        fiftytofifityfife = '---';
        ubovefiftyfife = '---';
      }
      else if (current.age >= 45 && current.age <= 49) {
        underforty = '---';
        fortyToeighty = '---';
        nintyTotwnfour = '---';
        towenyfivetotoennine = '---';
        thirtytotrhtyfor = '---';
        trtyfiftitrynin = '---';
        fortytofortyfor = '---';
        fortfiftofortynine = current.age;
        fiftytofifityfife = '---';
        ubovefiftyfife = '---';
      }
      else if (current.age >= 50 && current.age <= 55) {
        underforty = '---';
        fortyToeighty = '---';
        nintyTotwnfour = '---';
        towenyfivetotoennine = '---';
        thirtytotrhtyfor = '---';
        trtyfiftitrynin = '---';
        fortytofortyfor = '---';
        fortfiftofortynine = '---';
        fiftytofifityfife = current.age;
        ubovefiftyfife = '---';

      }
      else if (current.age > 55) {
        underforty = '---';
        fortyToeighty = '---';
        nintyTotwnfour = '---';
        towenyfivetotoennine = '---';
        thirtytotrhtyfor = '---';
        trtyfiftitrynin = '--';
        fortytofortyfor = '---';
        fortfiftofortynine = '---';
        fiftytofifityfife = '---';
        ubovefiftyfife = current.age
       console.log(total++);
       
      }
      return (
        <tr key={index}>
          <td>{++index}</td>
          <td>{check ? current.code : '""'}</td>
          <td>{underforty}</td>
          <td>{fortyToeighty}</td>
          <td>{nintyTotwnfour}</td>
          <td>{towenyfivetotoennine}</td>
          <td>{thirtytotrhtyfor}</td>
          <td>{trtyfiftitrynin}</td>
          <td>{fortytofortyfor}</td>
          <td>{fortfiftofortynine}</td>
          <td>{fiftytofifityfife}</td>
          <td>{ubovefiftyfife}</td>
        </tr>
      )
    }
    )
  }
  Header = () => {
    return (
      <table className="table table-striped table-bordered">
        <caption style={{ fontWeight: "bold", textAlign: "center" }}>የደረሰው ጉዳት ዓይነት በኢንዱስትሪ መደብ</caption>
        <thead>
          <tr>
            <th rowSpan="2">ተ.ቁ</th>
            <th rowSpan="2">የኢንዱስትሪ መደብ ቁጥር</th>
            <th colSpan="10">አደጋ  የደረሰባቸው ሠራተኞች ብዛት በእድሜ</th>
          </tr>
          <tr>
            <th>ከ14 በታች</th>
            <th>14-18</th>
            <th>19-24</th>
            <th>25-29</th>
            <th>30-34</th>
            <th>35-39</th>
            <th>40-44</th>
            <th>45-49</th>
            <th>50-55</th>
            <th>ከ55 በላይ</th>
          </tr>
        </thead>
        <tbody>
          {this.TableBody()}
          <tr style={{ backgroundColor: 'grey', color: '#fff' }}>
            <td></td>
            <td>ድምር</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{}</td>
            <td>{}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    )
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

export default Employee_age_gap;
