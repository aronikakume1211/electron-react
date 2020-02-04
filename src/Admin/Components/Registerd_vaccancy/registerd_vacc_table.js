import React, { Component } from 'react';
import ReactExport from "react-data-export";
import DataStore from 'nedb'
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

let database, globalId, globalkey, result;
class Registerd_vacc_table extends Component {
  constructor() {
    super();
    this.state = {
      isEdit: false,
      isEachEdit: false,
      isRegisterd: false,
      
      plant: '',
      Registerd_vacc_Data: [],
      temp: '',
      Report: [],
      IndustryAssignCode: [
        'እርሻ፣አደን፣ደንና ዓሣ ',
        'ማዕድንና ድንጋይ ሥራ ',
        'ፋብሪካ ',
        'መብራት ፣ጋዝና ውሃ ',
        'ሕንፃ ሥራ ',
        'ጅምላና ችርቻሮ ንግድ ',
        'ትራንስፖርት ፣ዕቃ ማከማቻና መገናኛ ',
        'ፋይናንስ ፣መድንና የመሳሰለው ንግድ ',
        'ሰበነክ/የተለያዩ ማህበራዊ አገልግሎት ሰጭ ድርጅቶች',
        'ጠቅላላ ድምር'
      ],
      woreda: '',
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
    this.SearchResult(e.target.value)
    this.setState({
      woreda: e.target.value
    })
    console.log(this.state.woreda);
    
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
  Refresh = () => {
    this.setState({
      Registerd_vacc_Data: this.state.temp
    })
  }
  LoadData=()=>{
    database.find({}, (err, docs) => {
      this.setState({
        Registerd_vacc_Data: docs,

      });
      this.setState({
        temp: this.state.Registerd_vacc_Data
      })
      this.SearchResult(this.state.woreda)
    })
  }
  componentDidMount() {
    database = new DataStore("../Registerd_Vaccancy_Data.db");
    database.loadDatabase(err => {
      if (err) console.log(err);
      this.LoadData()
    });
  }
  SearchResult = (wo) => {
    result = this.state.Registerd_vacc_Data.filter(item => item.woreda == wo)
    
    if(result.length >0){
    result.map(item => {
      this.setState({
        ereshaTotal: item.ereshaTotal,
        ereshaCheck: item.ereshaCheck,
        minralTotal: item.minralTotal,
        minralCheck: item.minralCheck,
        plantTotal: item.plantTotal,
        plantCheck: item.plantCheck,
        electricTotal: item.electricTotal,
        electricCheck: item.electricCheck,
        buildingTotal: item.buildingTotal,
        buildingCheck: item.buildingCheck,
        marchentTotal: item.marchentTotal,
        marchentCheck: item.marchentCheck,
        transportTotal: item.transportTotal,
        transportCheck: item.transportCheck,
        financeTotal: item.financeTotal,
        financeCheck: item.financeCheck,
        otherTotal: item.otherTotal,
        otherCheck: item.otherCheck
      })
    })
  }else{
    this.setState({
      woreda: 'እባክዎ መጀመሪያ ይመዝግቡ',
      ereshaTotal: '00',
      ereshaCheck: 'እባክዎ መጀመሪያ ይመዝግቡ',
      minralTotal: '00',
      minralCheck: 'እባክዎ መጀመሪያ ይመዝግቡ',
      plantTotal: '00',
      plantCheck: 'እባክዎ መጀመሪያ ይመዝግቡ',
      electricTotal: '00',
      electricCheck: 'እባክዎ መጀመሪያ ይመዝግቡ',
      buildingTotal: '00',
      buildingCheck: 'እባክዎ መጀመሪያ ይመዝግቡ',
      marchentTotal: '00',
      marchentCheck: 'እባክዎ መጀመሪያ ይመዝግቡ',
      transportTotal: '00',
      transportCheck: 'እባክዎ መጀመሪያ ይመዝግቡ',
      financeTotal: '00',
      financeCheck: 'እባክዎ መጀመሪያ ይመዝግቡ',
      otherTotal: '00',
      otherCheck: 'እባክዎ መጀመሪያ ይመዝግቡ',
  })
}
    this.Refresh();

  }
  editEach = (key) => {
    this.setState({
      isEachEdit: true
    })
  }
  editEachSubmit = (key) => {
    const updateEach={
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
    database.update({woreda:this.state.woreda}, {$set: updateEach},(err,res)=>{
      if(err) console.log(err)
      else{
        console.log("Done");
        this.LoadData()
      }
    })
    this.setState({
      isEachEdit: false
    })
    console.log(this.state.woreda)
  }
  DeleteItem=(wored)=>{
    if(window.confirm("እርግጠኛ ንዎት ይጥፋ?")){
      const items=this.state.Registerd_vacc_Data.filter(item=>item.woreda!== this.state.woreda);
      this.setState({
        Registerd_vacc_Data:items,
        temp:items
      });
      database.remove({woreda:this.state.woreda}, {}, (err)=>{
        if(err) console.log(err);
        this.SearchResult(this.state.woreda)
      })
    }
  }
  TableBody = () => {
    return (
      <tbody>
        <tr>
          <td>{1}</td>
          <td>{this.state.IndustryAssignCode[0]}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.ereshaTotal} onChange={this.onChangeErshaTotal} /> : this.state.ereshaTotal}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.ereshaCheck} onChange={this.onChangeErshaCheck} /> :this.state.ereshaCheck}</td>
          
        </tr>
        <tr>
          <td>{2}</td>
          <td>{this.state.IndustryAssignCode[1]}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.minralTotal} onChange={this.onChangeMinralTotal} />:this.state.minralTotal}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.minralCheck} onChange={this.onChangeMinralCheck} /> :this.state.minralCheck}</td>
          
        </tr>
        <tr>
          <td>{3}</td>
          <td>{this.state.IndustryAssignCode[2]}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.plantTotal} onChange={this.onChangePlantTotal} />:this.state.plantTotal}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.plantCheck} onChange={this.onChangePlantCheck} />:this.state.plantCheck}</td>
          
        </tr>
        <tr>
          <td>{4}</td>
          <td>{this.state.IndustryAssignCode[3]}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.electricTotal} onChange={this.onChangeElectricTotal} />:this.state.electricTotal}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.electricCheck} onChange={this.onChangeelectricCheck} />:this.state.electricCheck}</td>
         
        </tr>
        <tr>
          <td>{5}</td>
          <td>{this.state.IndustryAssignCode[4]}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.buildingTotal} onChange={this.onChangeBuildingTotal} />:this.state.buildingTotal}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.buildingCheck} onChange={this.onChangeBuildingCheck} />:this.state.buildingCheck}</td>

        </tr>
        <tr>
          <td>{6}</td>
          <td>{this.state.IndustryAssignCode[5]}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.marchentTotal} onChange={this.onChangeMarchentTotal} />:this.state.marchentTotal}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.marchentCheck} onChange={this.onChangeMarchentCheck} />:this.state.marchentCheck}</td>
         
        </tr>
        <tr>
          <td>{7}</td>
          <td>{this.state.IndustryAssignCode[6]}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.transportTotal} onChange={this.onChangeTransportTotal} />:this.state.transportTotal}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.transportCheck} onChange={this.onChangeTransportCheck} />:this.state.transportCheck}</td>
         
        </tr>
        <tr>
          <td>{8}</td>
          <td>{this.state.IndustryAssignCode[7]}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.financeTotal} onChange={this.onChangeFinanceTotal} />:this.state.financeTotal}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.financeCheck} onChange={this.onChangeFinanceCheck} />:this.state.financeCheck}</td>
          
        </tr>
        <tr>
          <td>{9}</td>
          <td>{this.state.IndustryAssignCode[8]}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.otherTotal} onChange={this.onChangeOtherTotal} />:this.state.otherTotal}</td>
          <td>{this.state.isEachEdit ? <input type="text" value={this.state.otherCheck} onChange={this.onChangeOtherCheck} />:this.state.otherCheck}</td>
          
        </tr>
        <tr style={{
          backgroundColor:'blue',
          color:"#fff",
          fontWeight:"bold"
        }}>
          <td>{10}</td>
          <td>{this.state.IndustryAssignCode[9]}</td>
          <td>{1349}</td>
          <td>
          <button onClick={() => this.state.isEachEdit ? this.editEachSubmit(1) : this.editEach(1,)} value="edit" className={this.state.isEachEdit ? "btn btn-success col-sm-4 glyphicon glyphicon-save" : "btn btn-primary col-sm-4 glyphicon glyphicon-edit"} style={{}}  value="Button" />
          <button onClick={()=>this.DeleteItem(1)} className="col-sm-4 btn btn-danger" style={{marginLeft:"6px"}}> <span className="glyphicon glyphicon-remove-circle"></span></button>
          </td>
        </tr>

      </tbody>
    )
  }
  Header = () => {
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>የኢንዱስትሪ መደባት መለያ ኮድ</th>
            <th>የኢንዱስትሪ መደባት መለያ ኮድ መግለጫ</th>
            <th>ብዛት</th>
            <th>ምርምራ</th>
          </tr>
        </thead>
        {this.TableBody()}
      </table>
    )
  }
  render() {
    return (
      this.state.isEdit ?
        <div>
          <h1>Edit Form</h1>
        </div>
        :
        <div className="table-responsive">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="row">
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
                  <label className="col-sm-9" style={{ fontWeight: "bold", }}>  {this.state.woreda} ወረዳ ተመዘገቡ የሥራ ቦታዎች /ድርጀቶች/ በኢንዱስትሪ መደባት መረጃ ማጠቃለያ ቅጽ</label>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-group">
                <ExcelFile filename="ተመዘገቡ የሥራ ቦታዎች መረጃ " element={<button className="form-control glyphicon glyphicon-cloud-download btn btn-primary " >
                  ሪፖርት</button>}>
                  <ExcelSheet data={result} name="ተመዘገቡ የሥራ ቦታዎች ">
                    <ExcelColumn label="የኢንዱስትሪ መደባት መለያ ኮድ" value="code" />
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
export default Registerd_vacc_table;
