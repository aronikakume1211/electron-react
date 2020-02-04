import React, { Component } from 'react';
import DataStore from 'nedb'
import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

let database, globalId, globalkey;
let total = 0;
class Accidenttype_table extends Component {
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
  SearchResult=()=>{
    if(this.state.startDate !='' && this.state.endDate !=''){
      let result=this.state.Affected_body_Data.filter(item=>item.date >= this.state.startDate)
      .filter(item=>item.date <= this.state.endDate);
      this.setState({
        Affected_body_Data:result,
        startDate:'',
        endDate:''
      });
    }else{
      this.setState({
        Affected_body_Data:this.state.temp
      })
    }
  }
  TableBody = () => {
    let counter = 1;
    let tempCode = 'mebratu';
    let check = 1;
    let meltena,
      meqtel,
      meqoret,
      other,
      mewogat,
      megored,
      wuleqat,
      meseber,
      ysermezor,
      Eye_enjur,
      murder,
      deaf,
      sink,
      die = 'x';
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
      if (current.accidentType == 'መላጥና መቀጥቀጥ') {
        meltena = current.accidentType;
        meqtel= 'x'
          meqoret= 'x'
          other= 'x'
          mewogat= 'x'
          megored= 'x'
          wuleqat= 'x'
          meseber= 'x'
          ysermezor= 'x'
          Eye_enjur= 'x'
          murder= 'x'
          deaf= 'x'
          sink= 'x'
          die = 'x'
      } else if (current.accidentType == 'መቃጠል') {
        meqtel = current.accidentType;
        meltena= 'x'
        meqoret= 'x'
        other= 'x'
        mewogat= 'x'
        megored= 'x'
        wuleqat= 'x'
        meseber= 'x'
        ysermezor= 'x'
        Eye_enjur= 'x'
        murder= 'x'
        deaf= 'x'
        sink= 'x'
        die = 'x'
      } else if (current.accidentType == 'መቆረጥ') {
        meqoret = current.accidentType
        meltena= 'x'
        meqtel= 'x'
        other= 'x'
        mewogat= 'x'
        megored= 'x'
        wuleqat= 'x'
        meseber= 'x'
        ysermezor= 'x'
        Eye_enjur= 'x'
        murder= 'x'
        deaf= 'x'
        sink= 'x'
        die = 'x'
      }else if(current.accidentType=='መወጋት'){
        mewogat=current.accidentType
        meqoret = 'x'
        meltena= 'x'
        meqtel= 'x'
        other= 'x'
        megored= 'x'
        wuleqat= 'x'
        meseber= 'x'
        ysermezor= 'x'
        Eye_enjur= 'x'
        murder= 'x'
        deaf= 'x'
        sink= 'x'
        die = 'x'
      } 
      else if(current.accidentType=='መጎረድ'){
        meqoret = 'x'
        meltena= 'x'
        meqtel= 'x'
        other= 'x'
        mewogat= 'x'
        megored= current.accidentType
        wuleqat= 'x'
        meseber= 'x'
        ysermezor= 'x'
        Eye_enjur= 'x'
        murder= 'x'
        deaf= 'x'
        sink= 'x'
        die = 'x'
      } 
      else if(current.accidentType=='ውልቃት'){
        meqoret = 'x'
        meltena= 'x'
        meqtel= 'x'
        other= 'x'
        mewogat= 'x'
        megored= 'x'
        wuleqat= current.accidentType
        meseber= 'x'
        ysermezor= 'x'
        Eye_enjur= 'x'
        murder= 'x'
        deaf= 'x'
        sink= 'x'
        die = 'x'
      } 
      else if(current.accidentType=='መሰበር'){
        meqoret = 'x'
        meltena= 'x'
        meqtel= 'x'
        other= 'x'
        mewogat= 'x'
        megored= 'x'
        wuleqat= 'x'
        meseber= current.accidentType
        ysermezor= 'x'
        Eye_enjur= 'x'
        murder= 'x'
        deaf= 'x'
        sink= 'x'
        die = 'x'
      } 
      else if(current.accidentType=='የሥር መዞር'){
        meqoret = 'x'
        meltena= 'x'
        meqtel= 'x'
        other= 'x'
        mewogat= 'x'
        megored= 'x'
        wuleqat= 'x'
        meseber= 'x'
        ysermezor= current.accidentType
        Eye_enjur= 'x'
        murder= 'x'
        deaf= 'x'
        sink= 'x'
        die = 'x'
      } 
      else if(current.accidentType=='የዓይን መጎዳት'){
        meqoret = 'x'
        meltena= 'x'
        meqtel= 'x'
        other= 'x'
        mewogat= 'x'
        megored= 'x'
        wuleqat= 'x'
        meseber= 'x'
        ysermezor= 'x'
        Eye_enjur= current.accidentType
        murder= 'x'
        deaf= 'x'
        sink= 'x'
        die = 'x'
      } 
      else if(current.accidentType=='መታፈን'){
        meqoret = 'x'
        meltena= 'x'
        meqtel= 'x'
        other= 'x'
        mewogat= 'x'
        megored= 'x'
        wuleqat= 'x'
        meseber= 'x'
        ysermezor= 'x'
        Eye_enjur= 'x'
        murder= current.accidentType
        deaf= 'x'
        sink= 'x'
        die = 'x'
      } 
      else if(current.accidentType=='የመስማት ጉዳት'){
        meqoret = 'x'
        meltena= 'x'
        meqtel= 'x'
        other= 'x'
        mewogat= 'x'
        megored= 'x'
        wuleqat= 'x'
        meseber= 'x'
        ysermezor= 'x'
        Eye_enjur= 'x'
        murder= 'x'
        deaf= current.accidentType
        sink= 'x'
        die = 'x'
      } 
      else if(current.accidentType=='መስመጥ'){
        meqoret = 'x'
        meltena= 'x'
        meqtel= 'x'
        other= 'x'
        mewogat= 'x'
        megored= 'x'
        wuleqat= 'x'
        meseber= 'x'
        ysermezor= 'x'
        Eye_enjur= 'x'
        murder= 'x'
        deaf= 'x'
        sink= current.accidentType
        die = 'x'
      } 
      else if(current.accidentType=='ሞት'){
        meqoret = 'x'
        meltena= 'x'
        meqtel= 'x'
        other= 'x'
        mewogat= 'x'
        megored= 'x'
        wuleqat= 'x'
        meseber= 'x'
        ysermezor= 'x'
        Eye_enjur= 'x'
        murder= 'x'
        deaf= 'x'
        sink= 'x'
        die = current.accidentType
      } 
      else {
        other = current.accidentType;
        meltena= 'x'
        meqoret= 'x'
        meqtel= 'x'
        mewogat= 'x'
        megored= 'x';
        wuleqat= 'x';
        meseber= 'x';
        ysermezor= 'x';
        Eye_enjur= 'x';
        murder= 'x';
        deaf= 'x';
        sink= 'x';
        die = 'x'
      }
      return (
        <tr key={index}>
          <td>{++index}</td>
          <td>{check ? current.code : '""'}</td>
          <td>{meltena}</td>
          <td>{meqtel}</td>
          <td>{meqoret}</td>
          <td>{mewogat}</td>
          <td>{megored}</td>
          <td>{wuleqat}</td>
          <td>{meseber}</td>
          <td>{ysermezor}</td>
          <td>{Eye_enjur}</td>
          <td>{murder}</td>
          <td>{deaf}</td>
          <td>{sink}</td>
          <td>{die}</td>
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
          <tr>
            <th rowSpan="2">ተ.ቁ</th>
            <th rowSpan="2">የኢንዱስትሪ መደብ ቁጥር</th>
            <th colSpan="14">የደረሰው የጉዳት ዓይነት</th>
          </tr>
          <tr>
            <th>መላጥና መቀጥቀጥ</th>
            <th>መቃጠል</th>
            <th>መቆረጥ</th>
            <th>መወጋት</th>
            <th>መጎረድ</th>
            <th>ውልቃት</th>
            <th>መሰበር</th>
            <th>የሥር መዞር</th>
            <th>የዓይን መጎዳት</th>
            <th>መታፈን</th>
            <th>የመስማት ጉዳት</th>
            <th>መስመጥ</th>
            <th>ሞት</th>
            <th>ሌላ</th>
          </tr>
        </thead>
        <tbody>
          {this.TableBody()}
          <tr style={{backgroundColor:'grey',color:'#fff'}}>
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

export default Accidenttype_table;
