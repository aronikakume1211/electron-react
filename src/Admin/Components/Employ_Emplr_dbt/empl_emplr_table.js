import React, { Component } from 'react';
import DataStore from 'nedb'
import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

let database, globalId, globalkey,forCaption;
class Employ_Emplr_dbt_table extends Component {
  constructor() {
    super();
    this.state = {
      startDate: '',
      endDate: '',
      isDetail: false,
      isHide:false,
      isEdit:false,
      Epmlr_Debate_data: [],
      temp: '',
      detailTemp:''
    }
  }
  onChangeEndDate = (e) => {
    this.setState({
      endDate: e.target.value
    })
    this.setState({
      Epmlr_Debate_data: this.state.temp
    })
  }
  onChangeStartDate = (e) => {
    this.setState({
      startDate: e.target.value
    })
    this.setState({
      Epmlr_Debate_data: this.state.temp
    })
  }
  LoadData = () => {
    database = new DataStore("../Emplyr_Debt_Data.db")
    database.loadDatabase(err => {
      if (err) console.log(err);
    });
    database.find({})
      .sort({ code: 1 })
      .exec((err, docs) => {
        this.setState({
          Epmlr_Debate_data: docs
        });
        this.setState({
          temp: this.state.Epmlr_Debate_data
        })
      })
  }
  componentDidMount() {
    this.LoadData()
  }

  handleEditform=(id, key)=>{
    globalId=id;
    globalkey=key;
    alert(id)
    this.setState({
      isEdit:true,
      isDetail:false
    })
  }
  _renderEditForm=()=>{
    if(this.state.isEdit){
      return (
        <div>
          <h1>Hello from Edit form</h1>
        </div>
      )
    }
  }
  handleMore = (dropDown, index) => {
    let result=this.state.Epmlr_Debate_data.filter(item=>item.dropDown == dropDown);
    if(result.length>0){
    this.setState({
      isDetail: true,
      detailTemp:result,
    })
  }
  }
  DeleteItem = (id) => {
    if (window.confirm("እርግጠኛ ንዎት ይጥፋ?")) {
      //delete from detail array
      const items = this.state.detailTemp.filter(item => item._id !== id);
      //delete from searched array
      const itemsFromMain = this.state.Epmlr_Debate_data.filter(item => item._id !== id);
      //delete from temp array
      const itemsFromTemp = this.state.temp.filter(item => item._id !== id);
      this.setState({
        detailTemp: items,
        Epmlr_Debate_data:itemsFromMain,
        temp:itemsFromTemp
      });
      database.remove({ _id: id }, {}, err => {
        if (err) console.log(err);
      })
    }
  }
  _tableBody=()=>{
    return this.state.detailTemp.map((current, index)=>{
      return (
        <tr key={index} >
          <td>{++index}</td>
          <td>{current.code}</td>
          <td onPointerEnter={()=>this.setState({isHide:true})} onPointerLeave={()=> this.setState({isHide:false})}>{this.state.isHide? "Mebratu":current.dropDown }</td>
          <td>{current.federal}</td>
          <td>{current.region}</td>
          <td>{current.zone}</td>
          <td>{current.woreda}</td>
          <td>
            <button className="btn btn-primary" onClick={() => this.handleEditform(current._id, index)} style={{}} ><span className=" glyphicon glyphicon-edit"></span>Edit</button>
            <button className="btn btn-danger" onClick={() => this.DeleteItem(current._id)} style={{}}> <span className="glyphicon glyphicon-trash"></span>Delete</button>
          </td>
        </tr>
      )
    })
  }
  _moreHeader = () => {
    return (
      <table className="table table-striped table-bordered" >
        <thead>
          <tr>
            <th rowSpan="2">ተ.ቁ</th>
            <th rowSpan="2">የኢንዱስትሪ መደብ</th>
            <th rowSpan="2">የስራ ክርክሮች ሰሚ አካላት ስም ዝርዝር</th>
            <th colSpan="4">በየወረዳው ያሉ የስራ ክርክሮች ሰሚ አካላት ብዛት</th>
            <th rowSpan="2">Action</th>
          </tr>
          <tr>
            <th>በፌደራል ያሉ</th>
            <th>በክልል ያሉ</th>
            <th>በዞን ያሉ</th>
            <th>በወረዳ ያሉ</th>
          </tr>
        </thead>
        <tbody>
          {this._tableBody()}
        </tbody>
      </table>
    )
  }
  handleCancel = () => {
    this.setState({
      isDetail: false
    })
  }
  RenderMore = () => {
    if (this.state.isDetail) {
      console.log(this.state.Epmlr_Debate_data);
      return (
        <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
          <div><button onClick={this.handleCancel} className=" btn btn-danger glyphicon glyphicon-remove-circle" style={{ padding: "1%", float: "right" }}></button></div>
          <div style={{ padding: "5%" }}>
            {this._moreHeader()}
          </div>
        </div>
      )
    }
  }
  SearchResult = () => {
    if (this.state.startDate != '' && this.state.endDate != '') {
      let result = this.state.Epmlr_Debate_data.filter(item => item.date >= this.state.startDate)
        .filter(item => item.date <= this.state.endDate);
      this.setState({
        Epmlr_Debate_data: result,
        detailTemp:result,
      })
    } else {
      this.setState({
        Epmlr_Debate_data: this.state.temp
      })
    }
  }
  TableBody = () => {
    let assTotal = 0;
    let assFederal = 0;
    let assRegion = 0;
    let assZone = 0;
    let assWoreda = 0;
    let fedTotal = 0
    let fedFederal = 0
    let fedRegion = 0
    let fedZone = 0
    let fedWoreda = 0
    let eldrTotal = 0;
    let eldrFederal = 0;
    let eldrRegion = 0;
    let eldrWoreda = 0;
    let eldrZone = 0;
    let bordTotal = 0;
    let bordFederal = 0;
    let bordRegion = 0;
    let bordZone = 0;
    let bordWoreda = 0;
    let othrTotal = 0;
    let othrFederal = 0;
    let othrRegion = 0;
    let othrZone = 0;
    let othrWoreda = 0;
    console.log(this.state.Epmlr_Debate_data);
    this.state.Epmlr_Debate_data.map((current, index) => {
      if (current.dropDown == 'አስማሚ') {
        assFederal = assFederal + parseInt(current.federal, 10);
        assRegion = assRegion + parseInt(current.region, 10);
        assZone = assZone + parseInt(current.zone, 10);
        assWoreda = assWoreda + parseInt(current.woreda, 10);
        assTotal = assFederal + assRegion + assZone + assWoreda;
      } else if (current.dropDown == 'ለመደበኛ ፍ/ቤቶች የቀረቡ የስራ ክርክሮች ሰሚ ችሎቶች') {
        fedFederal = fedFederal + parseInt(current.federal, 10);
        fedRegion = fedRegion + parseInt(current.region, 10);
        fedZone = fedZone + parseInt(current.zone, 10);
        fedWoreda = fedWoreda + parseInt(current.woreda, 10);
        fedTotal = fedFederal + fedRegion + fedZone + fedWoreda;
      } else if (current.dropDown == 'የገላጋይ ሽምግልና አካላት') {
        eldrFederal = eldrFederal + parseInt(current.federal, 10);
        eldrRegion = eldrRegion + parseInt(current.region, 10);
        eldrZone = eldrZone + parseInt(current.zone, 10);
        eldrWoreda = eldrWoreda + parseInt(current.woreda, 10);
        eldrTotal = eldrFederal + eldrRegion + eldrZone + eldrWoreda;
      } else if (current.dropDown == 'ለአሰሪና ሠራተኛ ጉዳይ ወሳኝ ቦርድ') {
        bordFederal = bordFederal + parseInt(current.federal, 10);
        bordRegion = bordRegion + parseInt(current.region, 10);
        bordZone = bordZone + parseInt(current.zone, 10);
        bordWoreda = bordWoreda + parseInt(current.woreda, 10);
        bordTotal = bordFederal + bordRegion + bordZone + bordWoreda;
      } else if (current.dropDown == 'ሌሎች') {
        othrFederal = othrFederal + parseInt(current.federal, 10);
        othrRegion = othrRegion + parseInt(current.region, 10);
        othrZone = othrZone + parseInt(current.zone, 10);
        othrWoreda = othrWoreda + parseInt(current.woreda, 10);
        othrTotal = othrFederal + othrRegion + othrZone + othrWoreda;
      }
    });
    return (
      <tbody>
        <tr>
          <td>1</td>
          <td>አስማሚ</td>
          <td>{assTotal}</td>
          <td>{assFederal}</td>
          <td>{assRegion}</td>
          <td>{assZone}</td>
          <td>{assWoreda}</td>
          <td>
            <label type='link' onClick={() => this.handleMore('አስማሚ', 1)} style={{ color: 'blue' }} >More...</label>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>የገላጋይ ሽምግልና አካላት</td>
          <td>{eldrTotal}</td>
          <td>{eldrFederal}</td>
          <td>{eldrRegion}</td>
          <td>{eldrZone}</td>
          <td>{eldrWoreda}</td>
          <td>
            <label type='link' onClick={() => this.handleMore('የገላጋይ ሽምግልና አካላት', 2)} style={{ color: 'blue' }} >More...</label>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>ለአሰሪና ሠራተኛ ጉዳይ ወሳኝ ቦርድ</td>
          <td>{bordTotal}</td>
          <td>{bordFederal}</td>
          <td>{bordRegion}</td>
          <td>{bordZone}</td>
          <td>{bordWoreda}</td>
          <td>
            <label type='link' onClick={() => this.handleMore('ለአሰሪና ሠራተኛ ጉዳይ ወሳኝ ቦርድ', 3)} style={{ color: 'blue' }} >More...</label>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>ለመደበኛ ፍ/ቤቶች የቀረቡ የስራ ክርክሮች ሰሚ ችሎቶች</td>
          <td>{fedTotal}</td>
          <td>{fedFederal}</td>
          <td>{fedRegion}</td>
          <td>{fedZone}</td>
          <td>{fedWoreda}</td>
          <td>
            <label type='link' onClick={() => this.handleMore('ለመደበኛ ፍ/ቤቶች የቀረቡ የስራ ክርክሮች ሰሚ ችሎቶች', 4)} style={{ color: 'blue' }} >More...</label>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>ሌሎች</td>
          <td>{othrTotal}</td>
          <td>{othrFederal}</td>
          <td>{othrRegion}</td>
          <td>{othrZone}</td>
          <td>{othrWoreda}</td>
          <td>
            <label type='link' onClick={() => this.handleMore('ሌሎች', 5)} style={{ color: 'blue' }} >More...</label>
          </td>
        </tr>
        <tr style={{ fontWeight: 'bold', fontSize: '24px' }}>
          <td></td>
          <td>ድምር</td>
          <td>{othrTotal + fedTotal + bordTotal + eldrTotal + assTotal}</td>
          <td>{othrFederal + fedFederal + bordFederal + eldrFederal + assFederal}</td>
          <td>{othrRegion + fedRegion + bordRegion + eldrRegion + assRegion}</td>
          <td>{othrZone + fedZone + bordZone + eldrZone + assZone}</td>
          <td>{othrWoreda + fedWoreda + bordWoreda + eldrWoreda + assWoreda}</td>
          <td></td>
        </tr>

      </tbody>
    )
  }

  Header = () => {
    return (
      <table className="table table-striped table-bordered">
        <caption style={{ fontWeight: "bold", textAlign: "center" }}>ለአሰሪና ሠራተኛ የስራ ክርክሮች ብዛት በኢንዱስትሪ መደብ ሪፖርት ማቅረቢያ ቅፅ</caption>
        <thead>
          <tr>
            <th rowSpan="2">ተ.ቁ</th>
            <th rowSpan="2">የስራ ክርክሮች ሰሚ አካላት ስም ዝርዝር</th>
            <th rowSpan="2">ጠቅላላ ብዛት</th>
            <th colSpan="4">በየወረዳው ያሉ የስራ ክርክሮች ሰሚ አካላት ብዛት</th>
            <th rowSpan="2">Action</th>
          </tr>
          <tr>
            <th>በፌደራል ያሉ</th>
            <th>በክልል ያሉ</th>
            <th>በዞን ያሉ</th>
            <th>በወረዳ ያሉ</th>
          </tr>
        </thead>
        {this.TableBody()}
      </table>
    )
  }
  render() {
    return (
      this.state.isDetail ?
        <div>
          {this.RenderMore()}
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
                  <ExcelSheet data={""} name="Judgment">
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

export default Employ_Emplr_dbt_table;
