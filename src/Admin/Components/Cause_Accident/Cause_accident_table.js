import React, { Component } from 'react';
import DataStore from 'nedb'
import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

let database, globalId, globalkey;
let total = 0;
class Cause_Accident_table extends Component {
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
    // database.find({}).sort({"code": 1}, (err, docs)=> {
    //   this.setState({
    //     Affected_body_Data: docs
    //   });
    //   this.setState({
    //     temp: this.state.Affected_body_Data
    //   })
    // });

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
    let tempCode = 'mebratu';
    let check = 1;
    let machine,
      electric,
      handTool,
      fire,
      acid,
      slid,
      mewudeq,
      fentari,
      collaps,
      shekem,
      hiegher,
      movmnt,
      animal,
      emplyFault,
      other = 'x';
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
      if (current.AccidentReason == 'ማሽን') {
        machine = current.AccidentReason;
        electric = 'x';
        handTool = 'x';
        fire = 'x';
        acid = 'x';
        slid = 'x';
        mewudeq = 'x';
        fentari = 'x';
        collaps = 'x';
        shekem = 'x';
        hiegher = 'x';
        movmnt = 'x';
        animal = 'x';
        emplyFault = 'x';
        other = 'x';
      }
      else if (current.AccidentReason == 'ኤለክትሪክ') { 
        machine = 'x';
        electric = current.AccidentReason;
        handTool = 'x';
        fire = 'x';
        acid = 'x';
        slid = 'x';
        mewudeq = 'x';
        fentari = 'x';
        collaps = 'x';
        shekem = 'x';
        hiegher = 'x';
        movmnt = 'x';
        animal = 'x';
        emplyFault = 'x';
        other = 'x';
      }
      else if (current.AccidentReason == 'የእጅ መሳርያ') { 
        machine = 'x';
        electric = 'x';
        handTool = current.AccidentReason;
        fire = 'x';
        acid = 'x';
        slid = 'x';
        mewudeq = 'x';
        fentari = 'x';
        collaps = 'x';
        shekem = 'x';
        hiegher = 'x';
        movmnt = 'x';
        animal = 'x';
        emplyFault = 'x';
        other = 'x';
      }
      else if (current.AccidentReason == 'እሳትና ፍንዳታ') { 
        machine ='x';
        electric = 'x';
        handTool = 'x';
        fire = current.AccidentReason;
        acid = 'x';
        slid = 'x';
        mewudeq = 'x';
        fentari = 'x';
        collaps = 'x';
        shekem = 'x';
        hiegher = 'x';
        movmnt = 'x';
        animal = 'x';
        emplyFault = 'x';
        other = 'x';
      }
      else if (current.AccidentReason == 'አሲድና ፍል ነገር') {
        machine = 'x';
        electric = 'x';
        handTool = 'x';
        fire = 'x';
        acid = current.AccidentReason;
        slid = 'x';
        mewudeq = 'x';
        fentari = 'x';
        collaps = 'x';
        shekem = 'x';
        hiegher = 'x';
        movmnt = 'x';
        animal = 'x';
        emplyFault = 'x';
        other = 'x';
       }
      else if (current.AccidentReason == 'መውደቅ ማንዳለጥ') { 
        machine = 'x';
        electric = 'x';
        handTool = 'x';
        fire = 'x';
        acid = 'x';
        slid = 'x';
        mewudeq = current.AccidentReason;
        fentari = 'x';
        collaps = 'x';
        shekem = 'x';
        hiegher = 'x';
        movmnt = 'x';
        animal = 'x';
        emplyFault = 'x';
        other = 'x';
      }
      else if (current.AccidentReason == 'ናዳ') { 
        machine = 'x';
        electric = 'x';
        handTool = 'x';
        fire = 'x';
        acid = 'x';
        slid = current.AccidentReason;
        mewudeq = 'x';
        fentari = 'x';
        collaps = 'x';
        shekem = 'x';
        hiegher = 'x';
        movmnt = 'x';
        animal = 'x';
        emplyFault = 'x';
        other = 'x';
      }
      else if (current.AccidentReason == 'ፍንጣሪ') { 
        machine = 'x';
        electric = 'x';
        handTool = 'x';
        fire = 'x';
        acid = 'x';
        slid = 'x';
        mewudeq = 'x';
        fentari = current.AccidentReason;
        collaps = 'x';
        shekem = 'x';
        hiegher = 'x';
        movmnt = 'x';
        animal = 'x';
        emplyFault = 'x';
        other = 'x';
      }
      else if (current.AccidentReason == 'ግጭትና መደናቀፍ') { 
        machine = 'x';
        electric = 'x';
        handTool = 'x';
        fire = 'x';
        acid = 'x';
        slid = 'x';
        mewudeq = 'x';
        fentari = 'x';
        collaps = current.AccidentReason;
        shekem = 'x';
        hiegher = 'x';
        movmnt = 'x';
        animal = 'x';
        emplyFault = 'x';
        other = 'x';
      }
      else if (current.AccidentReason == 'አያያዝና ሸክም') { 
        machine = 'x';
        electric = 'x';
        handTool = 'x';
        fire = 'x';
        acid = 'x';
        slid = 'x';
        mewudeq = 'x';
        fentari = 'x';
        collaps = 'x';
        shekem = current.AccidentReason;
        hiegher = 'x';
        movmnt = 'x';
        animal = 'x';
        emplyFault = 'x';
        other = 'x';
      }
      else if (current.AccidentReason == 'ከከፍ ወዳቂ ነገሮች') { 
        machine = 'x';
        electric = 'x';
        handTool = 'x';
        fire = 'x';
        acid = 'x';
        slid = 'x';
        mewudeq = 'x';
        fentari = 'x';
        collaps = 'x';
        shekem = 'x';
        hiegher = current.AccidentReason;
        movmnt = 'x';
        animal = 'x';
        emplyFault = 'x';
        other = 'x';
      }
      else if (current.AccidentReason == 'መጓጓዣና ማጓጓዣ') {
        machine = 'x';
        electric = 'x';
        handTool = 'x';
        fire = 'x';
        acid = 'x';
        slid = 'x';
        mewudeq = 'x';
        fentari = 'x';
        collaps = 'x';
        shekem = 'x';
        hiegher = 'x';
        movmnt = current.AccidentReason;
        animal = 'x';
        emplyFault = 'x';
        other = 'x';
       }
      else if (current.AccidentReason == 'እንስሳት') { 
        machine = 'x';
        electric = 'x';
        handTool = 'x';
        fire = 'x';
        acid = 'x';
        slid = 'x';
        mewudeq = 'x';
        fentari = 'x';
        collaps = 'x';
        shekem = 'x';
        hiegher = 'x';
        movmnt = 'x';
        animal = current.AccidentReason;
        emplyFault = 'x';
        other = 'x';
      }
      else if (current.AccidentReason == 'የሠራተኛ ስህተት') { 
        machine = 'x';
        electric = 'x';
        handTool = 'x';
        fire = 'x';
        acid = 'x';
        slid = 'x';
        mewudeq = 'x';
        fentari = 'x';
        collaps = 'x';
        shekem = 'x';
        hiegher = 'x';
        movmnt = 'x';
        animal = 'x';
        emplyFault = current.AccidentReason;
        other = 'x';
      }
      else {
        machine = 'x';
        electric = 'x';
        handTool = 'x';
        fire = 'x';
        acid = 'x';
        slid = 'x';
        mewudeq = 'x';
        fentari = 'x';
        collaps = 'x';
        shekem = 'x';
        hiegher = 'x';
        movmnt = 'x';
        animal = 'x';
        emplyFault = 'x';
        other = current.AccidentReason;
      }

      return (
        <tr key={index}>
          <td>{++index}</td>
          <td>{check ? current.code : '""'}</td>
          <td>{machine}</td>
          <td>{electric}</td>
          <td>{handTool}</td>
          <td>{fire}</td>
          <td>{acid}</td>
          <td>{mewudeq}</td>
          <td>{slid}</td>
          <td>{fentari}</td>
          <td>{collaps}</td>
          <td>{shekem}</td>
          <td>{hiegher}</td>
          <td>{movmnt}</td>
          <td>{animal}</td>
          <td>{emplyFault}</td>
          <td>{other}</td>
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
          <tr >
            <th rowSpan="2">ተ.ቁ</th>
            <th rowSpan="2">የኢንዱስትሪ መደብ ቁጥር</th>
            <th colSpan="15" style={{ alignItems: 'center', }}>የደረሰው ዓደጋ ምክንያት </th>
          </tr>
          <tr>
            <th>ማሽን</th>
            <th>ኤለክትሪክ</th>
            <th>የእጅ መሳርያ</th>
            <th>እሳትና ፍንዳታ</th>
            <th>አሲድና ፍል ነገር</th>
            <th>መውደቅ ማንዳለጥ</th>
            <th>ናዳ</th>
            <th>ፍንጣሪ</th>
            <th>ግጭትና መደናቀፍ</th>
            <th>አያያዝና ሸክም</th>
            <th>ከከፍ ወዳቂ ነገሮች</th>
            <th>መጓጓዣና ማጓጓዣ</th>
            <th>እንስሳት</th>
            <th>የሠራተኛ ስህተት</th>
            <th>ሌላ</th>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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

export default Cause_Accident_table;
