import React from 'react';
import Datastore from 'nedb';

let database, globalId, globalkey;
export default class Hiv_Addis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Akal_Gudat_Data: [],
      temp: '',
      isEditing: false,
      limit: 10,
      search: '',
      fname: '',
      lname: '',
      mname: '',
      Sex: 'ወንድ',
      Age: '',
      akalGudat: 'ማየት የተሳነው/ች',
      underAss: 'አንድ እግር የሌለው/ት',
      accident: 'በተፈጥሮ',
      help: '',
      whereHelp: '',
      income: ''
    }
  }
  onChangeSearch = (e) => {
    this.setState({
      search: e.target.value
    });
    if(this.state.search==''){
      this.LoadeData();
    }
  }
  onChangeFname = (e) => {
    this.setState({
      fname: e.target.value,
    });
  }
  onChangeMname = (e) => {
    this.setState({
      mname: e.target.value,
    });
  }
  onChangeLname = (e) => {
    this.setState({
      lname: e.target.value,
    });
  }
  onChangeAge = (e) => {
    this.setState({
      Age: e.target.value,
    });
  }
  onChangeSex = (e) => {
    this.setState({
      Sex: e.target.value,
    });
  }
  onChangeAkalgudat = (e) => {
    this.setState({
      akalGudat: e.target.value,
    });
  }
  onChangeUnderAss = (e) => {
    this.setState({
      underAss: e.target.value,
    });
  }
  onChangeAccident = (e) => {
    this.setState({
      accident: e.target.value,
    });
  }
  onChangeHelp = (e) => {
    this.setState({
      help: e.target.value,
    });
  }
  onChangeWhereHelp = (e) => {
    this.setState({
      whereHelp: e.target.value,
    });
  }
  onChangeIncome = (e) => {
    this.setState({
      income: e.target.value,
    });
  }
  LoadeData = (limit) => {
    database.find({})
      .sort({ fname: 1 })
      .limit(limit)
      .exec((err, docs) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({
            Akal_Gudat_Data: docs
          });
          this.setState({
            temp: this.state.Akal_Gudat_Data
          })
        }
      })
  }
  showAll = () => {
    database.find({})
      .sort({ fname: 1 })
      .exec((err, docs) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({
            Akal_Gudat_Data: docs
          });
          this.setState({
            temp: this.state.Akal_Gudat_Data
          })
        }
      })
  }
  componentDidMount() {
    database = new Datastore("../Akal_Gudat_Data.db");
    database.loadDatabase((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Database Created!");
        this.LoadeData(10);
      }
    });
  }

  SearchResult = () => {
    if (this.state.search == '') {
      this.setState({
        Akal_Gudat_Data: this.state.temp
      })
    } else {
      let result = this.state.Akal_Gudat_Data.filter(item => item.fname == this.state.search)
      if (result.length > 0) {
        this.setState({
          Akal_Gudat_Data: result
        })
      } else {
        alert("Not Found!")
      }
    }
  }
  //delete items
  DeleteItem = (id) => {
    if (window.confirm("እርግጠኛ ንዎት ይጥፋ?")) {
      const items = this.state.Akal_Gudat_Data.filter(item => item._id !== id)
      this.setState({
        Akal_Gudat_Data: items
      });
      database.remove({ _id: id }, {}, err => {
        if (err) console.log(err);
      })
    }
  }
  //return the list 
  DataList = () => {
    let counter = 1;
    return this.state.Akal_Gudat_Data.map((current, index) => {
      return (
        <tr>
          <td>{counter++}</td>
          <td>{current.fname + " " + current.mname + " " + current.lname}</td>
          <td>{current.Sex}</td>
          <td>{current.Age}</td>
          <td>{current.akalGudat}</td>
          <td>{current.underAss}</td>
          <td>{current.accident}</td>
          <td>{current.help}</td>
          <td>{current.whereHelp}</td>
          <td>{current.income}</td>

          <td>
            <button className="btn btn-primary" onClick={() => this.handleEditform(current._id, index)} style={{}} ><span className=" glyphicon glyphicon-edit"></span>Edit</button>
            <button className="btn btn-danger" onClick={() => this.DeleteItem(current._id)} style={{}}> <span className="glyphicon glyphicon-trash"></span>Delete</button>
          </td>
        </tr>
      )
    })
  }
  handleCancel = () => {
    this.setState({
      isEditing: false
    })
  }
  _renderEditForm = () => {
    if (this.state.isEditing) {
      return (
        <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", }}>
          <div><button onClick={this.handleCancel} className=" btn btn-danger glyphicon glyphicon-remove-circle" style={{ padding: "1%", float: "right" }}></button></div>
          <form onSubmit={this.onSubmit} style={{ padding: "7%" }}>
            <div className="row">
              <div className="col-sm-4" style={{}}>
                <div className="form-group">
                  <label htmlFor="fname">ስም</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.fname}
                    onChange={this.onChangeFname}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mname">የአባት ስም</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.mname}
                    onChange={this.onChangeMname}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">የአያት ስም</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.lname}
                    onChange={this.onChangeLname}
                  />
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="sex">ፆታ</label>
                      <select className="form-control"
                        value={this.state.Sex}
                        onChange={this.onChangeSex}
                      >
                        <option>ወንድ</option>
                        <option>ሴት</option>
                        <option>ሌላ</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="age">ዕድሜ</label>
                      <input
                        type="number"
                        className="form-control"
                        value={this.state.Age}
                        onChange={this.onChangeAge}
                      />
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-sm-4" style={{}}>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="sex">የአካል ጉዳት ሁኔታ</label>
                      <select className="form-control"
                        value={this.state.akalgudat}
                        onChange={this.onChangeAkalgudat}
                      >
                        <option>ማየት የተሳነው/ች</option>
                        <option>መስማት የተሳነው/ች</option>
                        <option>ምናገር የተሳነው/ች</option>
                        <option>ማየትና መስማት የተሳነው/ች</option>
                        <option> ሌላ</option>
                        <option>የአእምሮ</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="age">ከወገብ በታች</label>
                      <select className="form-control"
                        value={this.state.underAss}
                        onChange={this.onChangeUnderAss}
                      >
                        <option> አንድ እግር የሌለው/ት</option>
                        <option> ሁለቱም እግር የሌለው/ት</option>
                        <option>የመንቀሳቀስ ችግር ያለበት/ት</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="lname">የጉዳት መንሰኤ</label>
                      <select className="form-control"
                        value={this.state.accident}
                        onChange={this.onChangeAccident}
                      >
                        <option>በተፈጥሮ</option>
                        <option>በአደጋ ምክንያት</option>
                        <option>በህመም ምክንያት</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="checkup">የወር ገቢ</label>
                      <input
                        type="number"
                        className="form-control"
                        id="checkup"
                        value={this.state.income}
                        onChange={this.onChangeIncome} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="income">ያገኙት ድጋፈ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.help}
                    onChange={this.onChangeHelp} />
                </div>
                <div className="form-group">
                  <label htmlFor="tegalache">ድጋፉን ከማን አገኘ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.whereHelp}
                    onChange={this.onChangeWhereHelp} />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{
              borderRadius: "20px",
              margin: "10px",
            }} onClick={this.onSubmit}>
              <span className="glyphicon glyphicon-save"></span> Update
                   </button>
          </form>
        </div>
      )
    }
  }
  handleEditform = (id, key) => {
    globalId = id;
    globalkey = key;
    const items = this.state.Akal_Gudat_Data.filter(item => item._id == id)
    items.map(item => {
      this.setState({
        fname: item.fname,
        lname: item.lname,
        mname: item.mname,
        Sex: item.Sex,
        Age: item.Age,
        akalGudat: item.akalGudat,
        underAss: item.underAss,
        accident: item.accident,
        help: item.help,
        whereHelp: item.whereHelp,
        income: item.income
      })
    });
    this.setState({
      isEditing: true
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    const updateData = {
      fname: this.state.fname,
      lname: this.state.lname,
      mname: this.state.mname,
      Sex: this.state.Sex,
      Age: this.state.Age,
      akalGudat: this.state.akalGudat,
      underAss: this.state.underAss,
      accident: this.state.accident,
      help: this.state.help,
      whereHelp: this.state.whereHelp,
      income: this.state.income
    }
    if (this.state.fname == '' || this.state.lname == '' ||
      this.state.mname == '' || this.state.Age == '' ||
      this.state.help == '' || this.state.whereHelp == '' ||
      this.state.income == '') {
      alert("እባክዎ በትክክል ይሙሉ!")
    } else {
      if (this.state.income < 0 || this.state.Age < 0) {
        alert("ያስገቡት የወር ገቢ እና ዕድሜ ከ 0 በታች ነው! ያስተካክሉ!")
      } else {
        //update from local array
        let arr = this.state.Akal_Gudat_Data;
        arr[globalkey] = updateData;
        this.setState({
          Akal_Gudat_Data: arr,
          isEditing: false
        })
        // update from database
        database.update({ _id: globalId }, { $set: updateData }, (err, res) => {
          if (err) console.log(err)
          else alert("Updated!")
        })
      }
    }
  }
  onChangeLimit=(e)=>{
    this.setState({
      limit:parseInt(e.target.value,10)
    })
    if(e.target.value =='all'){
      this.showAll()
    }else {
      this.LoadeData(parseInt(e.target.value,10))
    }
  }
  
  render() {
    return (
      this.state.isEditing ?
        <div>
          {this._renderEditForm()}
        </div>
        :
        <div >
          <div className="table-responsive" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <div className="row" style={{ paddingTop: "3%" }}>
              <div className="col-sm-2"></div>
              <div className="col-sm-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.search}
                    placeholder="search by name.."
                    onChange={this.onChangeSearch}
                  />
                </div>
              </div>
              <div className="col-sm-2">
                <div className="form-group">
                  <button className="form-control glyphicon glyphicon-search btn btn-primary " style={{ padding: "2" }} onClick={() => this.SearchResult()}>
                    search
                 </button>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <select className="form-control"
                        onChange={this.onChangeLimit}
                      >
                        <option value="10">1-10</option>
                        <option value="50">1-50</option>
                        <option value="100">1-100</option>
                        <option value="all">Show all</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <table className="table table-striped table-bordered">
              <caption style={{ fontWeight: "bold", textAlign: "center" }}>የአካል ጉዳተኞች የመገኛ ሁኔታ የመረጃ መሰብሰቢያ ቅፅ</caption>
              <thead>
                <tr>
                  <th rowSpan="2">ተ.ቁ</th>
                  <th rowSpan="2">ሙሉ ስም</th>
                  <th rowSpan="2">ጾታ</th>
                  <th rowSpan="2">እድሜ</th>
                  <th colSpan="2">የአካል ጉዳት ሁኔታ</th>
                  <th rowSpan="2">የጉዳት መንሰኤ</th>
                  <th rowSpan="2">ያገኙት ድጋፍ ካለ</th>
                  <th rowSpan="2">ድጋፉን ከማን አገኙ</th>
                  <th rowSpan="2">የወር ገቢ</th>
                  <th rowSpan="2">Action</th>
                </tr>
                <tr>
                  <th >አካል ጉዳት</th>
                  <th >ከወገብ በታች</th>
                </tr>
              </thead>
              <tbody>
                {this.DataList()}
              </tbody>
            </table>
          </div>
        </div>
    )
  }
}
