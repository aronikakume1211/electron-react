import React, { Component } from 'react';
import DataStore from 'nedb'
import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

let database,globalId, globalkey;
class Accident_report_table extends Component {
  constructor(){
    super();
    this.state={
      isEdit:false,
      startDate: '',
      endDate: '',
      Accident_Report_Data:[],
      temp:'',
      orgName: '',
      code: '',
      maleEmployee: '',
      femaleEmployee: '',
      malePermitedDeath: '',
      femalePermitedDeath: '',
      maleNotPermitedDeath:'',
      femaleNotPermitedDeath:'',
      maleDeath: '',
      femaleDeath: '',
      totalPermited: '',
      date:'',
      moneyExpanditur: '',
      acciReasonExpan: ''
    }
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
  onChangeOrgName = (e) => {
    this.setState({
      orgName: e.target.value
    })
  }
  onChangeCode = (e) => {
    this.setState({
      code: e.target.value
    })
  }
  onChangeMaleEmployee = (e) => {
    this.setState({
      maleEmployee: e.target.value
    })
  }
  onChangeFemaleEmployee = (e) => {
    this.setState({
      femaleEmployee: e.target.value
    })
  }
  onChangeMalePermited = (e) => {
    this.setState({
      malePermitedDeath: e.target.value
    })
  }
  onChangeFemalePermited = (e) => {
    this.setState({
      femalePermitedDeath: e.target.value
    })
  }
  onChangeNotMalePermited = (e) => {
    this.setState({
      maleNotPermitedDeath: e.target.value
    })
  }
  onChangeNotFemalePermited = (e) => {
    this.setState({
      femaleNotPermitedDeath: e.target.value
    })
  }
  onChangeMaleDeath = (e) => {
    this.setState({
      maleDeath: e.target.value
    })
  }
  onChangeFemaleDeath = (e) => {
    this.setState({
      femaleDeath: e.target.value
    })
  }
  onChangeTotalPermi = (e) => {
    this.setState({
      totalPermited: e.target.value
    })
  }
  onChangeDate=(e)=>{
    this.setState({
      date:e.target.value
    })
  }
  onChangeMoneyExpan = (e) => {
    this.setState({
      moneyExpanditur: e.target.value
    })
  }
  onChangeAccidExpen = (e) => {
    this.setState({
      acciReasonExpan: e.target.value
    })
  }
  componentDidMount (){
    database = new DataStore("../Accident_Report_Data.db");
    database.loadDatabase(err => {
      if (err) throw err;
    });
    database.find({}, (err, docs) => {
      this.setState({
        Accident_Report_Data: docs
      });
      this.setState({
        temp: this.state.Accident_Report_Data
      })

    })
  }
  //delete items
  DeleteItem = (id) => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      const items = this.state.Accident_Report_Data.filter(item => item._id !== id)
      this.setState({
        Accident_Report_Data:items
      })
      database.remove({ _id: id }, {}, (err) => {
        if (err) console.log(err);
      })
    }
  }
  handleCancel=()=>{
    this.setState({
      isEdit:false
    })
  }
  onUpdate=(e)=>{
    e.preventDefault();
    const valueToupdate={
      orgName: this.state.orgName,
      code: this.state.code,
      maleEmployee: this.state.maleEmployee,
      femaleEmployee: this.state.femaleEmployee,
      malePermitedDeath: this.state.malePermitedDeath,
      femalePermitedDeath: this.state.femalePermitedDeath,
      maleNotPermitedDeath:this.state.maleNotPermitedDeath,
      femaleNotPermitedDeath:this.state.femaleNotPermitedDeath,
      maleDeath: this.state.maleDeath,
      femaleDeath: this.state.femaleDeath,
      totalPermited: this.state.totalPermited,
      date:this.state.date,
      moneyExpanditur: this.state.moneyExpanditur,
      acciReasonExpan: this.state.acciReasonExpan
    }
    database.update({_id:globalId}, {$set:valueToupdate},err=>alert("Updated"));
    let tempo=this.state.Accident_Report_Data;
    tempo[globalkey]=valueToupdate;
    this.setState({
      Accident_Report_Data:tempo,
      isEdit:false
    })
  }
  _renderEditForm=()=>{
    if(this.state.isEdit){
      return (
        <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
       <div><button onClick={this.handleCancel} className=" btn btn-danger glyphicon glyphicon-remove-circle" style={{padding:"1%", float:"right"}}></button></div>
        <form onSubmit={this.onUpdate} style={{padding: "7%"}}>
          <div className="row">

            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="fname">የድርጅቱ ስም</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.orgName}
                  onChange={this.onChangeOrgName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fname">የኢንዱስትሪ መደብ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.code}
                  onChange={this.onChangeCode}
                />
              </div>
              <div className="row">
                <div className="col-sm-6 form-group">
                  <label htmlFor="fname">የወንድ ሰራተኛ ብዛት </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.maleEmployee}
                    onChange={this.onChangeMaleEmployee}
                  />
                </div>
                <div className="col-sm-6 form-group">
                  <label htmlFor="fname">የሴት ሰራተኛ ብዛት </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.femaleEmployee}
                    onChange={this.onChangeFemaleEmployee}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="fname">ሞት ያላደረሱ አደጋዎች </label>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="fname">በፈቃድ </label>
                      <div className="row">
                        <div className="col-sm-6 form-group">
                        <label htmlFor="fname">ወንድ</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.malePermitedDeath}
                            onChange={this.onChangeMalePermited}
                          />
                        </div>
                        <div className="col-sm-6 form-group">
                        <label htmlFor="fname">ሴት</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.femalePermitedDeath}
                            onChange={this.onChangeFemalePermited}
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="fname">ያለፍቃድ</label>
                      <div className="row">
                        <div className="col-sm-6 form-group">
                        <label htmlFor="fname">ወንድ</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.maleNotPermitedDeath}
                            onChange={this.onChangeNotMalePermited}
                          />
                        </div>
                        <div className="col-sm-6 form-group">
                        <label htmlFor="fname">ሴት</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.femaleNotPermitedDeath}
                            onChange={this.onChangeNotFemalePermited}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 form-group">
                  <label htmlFor="fname">የወንድ ሞት አደጋዎች</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.maleDeath}
                    onChange={this.onChangeMaleDeath}
                  />
                </div>
                <div className="col-sm-6 form-group">
                  <label htmlFor="fname">የሴት ሞት አደጋዎች</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.femaleDeath}
                    onChange={this.onChangeFemaleDeath}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-5">
                    <div className="form-group">
                    <label htmlFor="fname">የፈቃድ ቀን ብዛት</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.totalPermited}
                      onChange={this.onChangeTotalPermi}
                    />
                  </div>
                </div>
                <div className="col-sm-7">
                    <div className="form-group">
                    <label htmlFor="fname">ቀን</label>
                    <input
                      type="date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.onChangeDate}
                    />
                  </div>
                </div>
              </div>



              <div className="form-group">
                <label htmlFor="fname">የባከነ ገንዘብ በደመወዝ ሲሰላ</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.moneyExpanditur}
                  onChange={this.onChangeMoneyExpan}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fname">በስራ ላይ አደጋ ምክንያት የወጣ ገንዘብ (በብር) </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.acciReasonExpan}
                  onChange={this.onChangeAccidExpen}
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
            onClick={this.onUpdate}
          >
            <span className="glyphicon glyphicon-save"></span> Update
        </button>
        </form>
      </div>
      )
    }
  }
  handleEditform=(id, key)=>{
    globalId=id;
    globalkey=key;
    const items=this.state.Accident_Report_Data.filter(item=>item._id == id);
    items.map(item=>{
      this.setState({
        orgName: item.orgName,
        code: item.code,
        maleEmployee: item.maleEmployee,
        femaleEmployee: item.femaleEmployee,
        malePermitedDeath: item.malePermitedDeath,
        femalePermitedDeath: item.femalePermitedDeath,
        maleNotPermitedDeath:item.maleNotPermitedDeath,
        femaleNotPermitedDeath: item.femaleNotPermitedDeath,
        maleDeath: item.maleDeath,
        femaleDeath: item.femaleDeath,
        totalPermited: item.totalPermited,
        date:item.date,
        moneyExpanditur: item.moneyExpanditur,
        acciReasonExpan: item.acciReasonExpan,
        isEdit:true
      })
    })
  }
  TableBody=()=>{
    let counter=1;
    return this.state.Accident_Report_Data.map((current, i)=>{
      return (
        <tr key={i}>
      <td>{counter}</td>
      <td>{current.orgName}</td>
      <td>{current.code}</td>
      <td>{current.maleEmployee}</td>
      <td>{current.femaleEmployee}</td>
      <td>{current.malePermitedDeath}</td>
      <td>{current.femalePermitedDeath}</td>
      <td>{current.maleNotPermitedDeath}</td>
      <td>{current.femaleNotPermitedDeath}</td>
      <td>{current.maleDeath}</td>
      <td>{current.femaleDeath}</td>
      <td>{current.totalPermited}</td>
      <td>{current.moneyExpanditur}</td>
      <td>{current.acciReasonExpan}</td>
      <td>
          <button className="btn btn-primary" onClick={() => this.handleEditform(current._id, i)} style={{  }} ><span className=" glyphicon glyphicon-trash"></span>Edit</button>
          <button className="btn btn-danger" onClick={() => this.DeleteItem(current._id)} style={{  }}> <span className="glyphicon glyphicon-edit"></span>Delete</button>
      </td>
        </tr>
      )
    })
  }
  header=()=>{
    return (
      this.state.value ?
      <div>
        {this._renderEditForm()}
      </div>
      :
      <table className="table table-striped table-bordered">
      <caption style={{ fontWeight: "bold", textAlign: "center" }}>በሥራ ላይ አደጋ ማጠቃለያ ሪፖርት</caption>
      <thead>
        <tr>
          <th rowSpan="3">ተ.ቁ</th>
          <th rowSpan="3">የድርጅቱ ስም</th>
          <th rowSpan="3">የኢንዱስትሪ መደብ</th>
          <th colSpan="2" rowSpan="2">የሰራተኛ ብዛት </th>
          <th colSpan="4">ሞት ያላደረሱ አደጋዎች </th>
          <th colSpan="2" rowSpan="2">የሞት አደጋዎች</th>
          <th rowSpan="3">የፈቃድ ቀን ብዛት</th>
          <th rowSpan="3">የባከነ ገንዘብ በደመወዝ ሲሰላ</th>
          <th rowSpan="3">አደጋ ምክንያት የወጣ ገንዘብ</th>
          <th rowSpan="3" style={{ color: "blue" }}>Action</th>
        </tr>
        <tr>
          <th colSpan="2">በፈቃድ</th>
          <th colSpan="2">ያለፍቃድ</th>
        </tr>
        <tr>
          <th>ወ</th>
          <th>ሴ</th>
          <th>ወ</th>
          <th>ሴ</th>
          <th>ወ</th>
          <th>ሴ</th>
          <th>ወ</th>
          <th>ሴ</th>
        </tr>
      </thead>
      <tbody>
        {this.TableBody()}
      </tbody>
    </table>
    )
  }
   //search items
  SearchResult = () => {
    if (this.state.startDate != '' && this.state.endDate !== '') {
      let result = this.state.Accident_Report_Data.filter(item => item.date >= this.state.startDate)
        .filter(items => items.date <= this.state.endDate)
      this.setState({
        Accident_Report_Data: result
      })
    } else {
      this.setState({
        Accident_Report_Data: this.state.temp
      })
    }
  }
  render() {
    return (
      this.state.isEdit ?
      <div>
        {this._renderEditForm()}
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
                <ExcelFile filename="በሥራ ላይ አደጋ ማጠቃለያ ሪፖርት" element={<button className="form-control glyphicon glyphicon-cloud-download btn btn-primary " >
                  ሪፖርት</button>}>
                  <ExcelSheet data={this.state.Accident_Report_Data} name="በሥራ ላይ አደጋ ማጠቃለያ ሪፖርት">
                    <ExcelColumn label="የድርጅቱ ስም" value="orgName" />
                    <ExcelColumn label="የኢንዱስትሪ መደብ" value="code" />
                    <ExcelColumn label="የወንድ ሰራተኛ ብዛት" value="maleEmployee" />
                    <ExcelColumn label="የሴት ሰራተኛ ብዛት" value="femaleEmployee" />
                    <ExcelColumn label="ሞት ያላደረሱ አደጋዎች በፈቃድ ወንድ" value="malePermitedDeath" />
                    <ExcelColumn label="ሞት ያላደረሱ አደጋዎች  በፈቃድ ሴት" value="femalePermitedDeath" />
                    <ExcelColumn label="ሞት ያላደረሱ አደጋዎች ያለፍቃድ ወንድ" value="maleNotPermitedDeath" />
                    <ExcelColumn label="ሞት ያላደረሱ አደጋዎች  ያለፍቃድ ሴት" value="femaleNotPermitedDeath" />
                    <ExcelColumn label="የወንድ ሞት አደጋዎች" value="maleDeath" />
                    <ExcelColumn label="የሴት ሞት አደጋዎች" value="femaleDeath" />
                    <ExcelColumn label="የፈቃድ ቀን ብዛት" value="totalPermited" />
                    <ExcelColumn label="ቀን" value="date" />
                    <ExcelColumn label="የባከነ ገንዘብ በደመወዝ ሲሰላ" value="moneyExpanditur" />
                    <ExcelColumn label="በስራ ላይ አደጋ ምክንያት የወጣ ገንዘብ (በብር)" value="acciReasonExpan" />
                   
                  </ExcelSheet>
                  
                </ExcelFile>
              </div>
            </div>
          </div>
          {this.header()}
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
export default Accident_report_table;
