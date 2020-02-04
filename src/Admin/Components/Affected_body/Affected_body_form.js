import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DataStore from 'nedb'
let erro = true
class Affected_body_form extends Component {
  constructor() {
    super();
    this.state = {
      headLela: false,
      code: '',
      head: 'ጆሮ',
      underPrt: '',
      upperPrt: '',
      c: '',
      other: '',
      unspecified: '',
      age: '',
      date: '',
      accidentType: 'መላጥና መቀጥቀጥ',
      AccidentReason: 'ማሽን',
      acciTypLela:false,
      acciResLela:false
    }
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
    }else{
      this.setState({
        head: e.target.value,
        headLela:false
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
    if(e.target.value == 'ሌላ'){
      this.setState({
        acciTypLela:true,
      })
    }else{
      this.setState({
        accidentType: e.target.value,
        acciTypLela:false,
      })
    }
  }
  onChangeAccidentReason = (e) => {
    if(e.target.value=='ሌላ'){
      this.setState({
      acciResLela: true
    })
    }else{
    this.setState({
      AccidentReason: e.target.value,
      acciResLela:false
    })
  }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const inputValue = {
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
    const database = new DataStore("../Affected_Body_Data.db");
    database.loadDatabase(err => {
      if (err) console.log(err)
      else console.log("Created!")
    });
    if (this.state.code == '' || this.state.age == '' ||
      this.state.date == '') {
      alert("እባክዎ በትክክል ይሙሉ!")
    } else {
      database.insert(inputValue, (err, res) => {
        if (err) console.log(err)
        else {
          alert("Registered!");
          console.log(inputValue);
          
          this.setState({
            code: '',
            head: 'ጆሮ',
            underPrt: '',
            upperPrt: '',
            c: '',
            other: '',
            unspecified: '',
            age: '',
            date: '',
            accidentType: 'መላጥና መቀጥቀጥ',
            AccidentReason: 'ማሽን'
          })
        }
      })
    }
  }
  onChangeHeadLela = (e) => {
    this.setState({
      head: e.target.value,
    })
  }
  onChangeAcciTypLela=(e)=>{
    this.setState({
      accidentType:e.target.value
    })
  }
  onChangeAcciResLela=(e)=>{
    this.setState({
      AccidentReason:e.target.value
    })
  }
  render() {
    return (
      <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "10%" }}>
        <form onSubmit={this.onSubmit}>
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
            <div className="col-sm-9" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "4%" }}>
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

              <Link to="/affected_body"
            type="button"
            className="btn btn-primary"
            style={{
              borderRadius: "20px",
              margin: "10px"
            }}
          >
            <span className="glyphicon glyphicon-step-backward"></span>back
          </Link>
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
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Affected_body_form;
