import React from 'react';
import DataStore from 'nedb';
import WoredaList from '../Forms/woredaList';
import ZoneList from '../Forms/zoneList';
let database, globalId, globalkey, keb;
let zon = 'All';
let wor = 'All'
export default class Migrant_table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Migrants_Data: [],
      temp: '',
      isEditing: false,
      fname: '',
      lname: '',
      mname: '',
      Sex: 'ወንድ',
      Age: '',
      education: '',
      region: '',
      Zone: '',
      woreda: '',
      Kebele: '',
      leaveYr: '',
      country: '',
      returnYr: '',
      currentStatus: '',
      phone: '+251',
      checkup: '',
      KebeleSearch: ''

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
  onChangeSex = (e) => {
    this.setState({
      Sex: e.target.value,
    });
  }
  onChangeAge = (e) => {
    this.setState({
      Age: e.target.value,
    });
  }
  onChangeEducation = (e) => {
    this.setState({
      education: e.target.value,
    });
  }
  onChangeRegion = (e) => {
    this.setState({
      region: e.target.value,
    });
  }
  onChangeZone = (e) => {
    this.setState({
      Zone: e.target.value,
    });
  }
  onChangeWoreda = (e) => {
    this.setState({
      woreda: e.target.value,
    });
  }
  onChangeKebele = (e) => {
    this.setState({
      Kebele: e.target.value,
    });
  }
  onChangeLeaveYr = (e) => {
    this.setState({
      leaveYr: e.target.value,
    });
  }
  onChangeCountery = (e) => {
    this.setState({
      country: e.target.value,
    });
  }
  onChangeReturnYr = (e) => {
    this.setState({
      returnYr: e.target.value,
    });
  }
  onChangeCurrentStatus = (e) => {
    this.setState({
      currentStatus: e.target.value,
    });
  }
  onChangePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  }
  onChangeCheckup = (e) => {
    this.setState({
      checkup: e.target.value,
    });
  }
  onChangeSelectZone = (e) => {
    zon = e.target.value;
    this.SearchResult();
  }
  onChangeSelectWoreda = (e) => {
    wor = e.target.value
    this.SearchResult();
  }
  onChangeKebeleSearch = (e) => {
    keb = e.target.value;
    this.setState({
      KebeleSearch: e.target.value
    })
    this.SearchResult();
  }
  LoadData = () => {
    database = new DataStore("../Migrant_data.db");
    database.loadDatabase(err => {
      if (err) console.log(err)
    });
    database.find({})
      .sort({ fname: 1 })
      .exec((err, docs) => {
        if (err) console.log(err)
        else {
          this.setState({
            Migrants_Data: docs
          });
          this.setState({
            temp: this.state.Migrants_Data
          })
        }
      })
  }
  componentDidMount() {
    this.LoadData();
  }
  //search items
  SearchResult = () => {
    let result;
    if (wor == 'All' && zon == 'All' && keb == '') {
      this.setState({
        Migrants_Data: this.state.temp
      })
    } else if (wor !== 'All' && zon !== 'All') {
      if (keb !== '') {
        result = this.state.temp.filter(item => item.Zone == zon)
          .filter(item => item.woreda == wor)
          .filter(item => item.Kebele == keb);
        this.setState({
          Migrants_Data: result
        })
        //alert("Zone and woreda and kebele")
      } else {
        result = this.state.temp.filter(item => item.Zone == zon)
          .filter(item => item.woreda == wor);
        this.setState({
          Migrants_Data: result
        })
        // alert("zone and woreda only")
      }
    } else if (wor == 'All' && zon == 'All') {
      if (keb !== '') {
        result = this.state.temp.filter(item => item.Kebele == keb);
        this.setState({
          Migrants_Data: result
        })
        // alert("Kebele only")
      }
    } else if (zon !== 'All' && keb !== '') {
      result = this.state.temp.filter(item => item.Zone == zon)
        .filter(item => item.Kebele == keb)
      this.setState({
        Migrants_Data: result
      })
      //  alert("Zone and kebele only")
    } else if (wor !== 'All' && keb !== '') {
      result = this.state.temp.filter(item => item.woreda == wor)
        .filter(item => item.Kebele == keb);
      this.setState({
        Migrants_Data: result
      })
      // alert("Woreda and Kebele")
    } else if (wor == 'All' && zon !== 'All') {
      result = this.state.temp.filter(item => item.Zone == zon);
      this.setState({
        Migrants_Data: result
      })
      // alert("Zone Only")
    } else if (wor !== 'All' || zon == 'All') {
      result = this.state.temp.filter(item => item.woreda == wor);
      this.setState({
        Migrants_Data: result
      })
      //alert("Woreda only")
    }
  }
  //delete items
  DeleteItem = (id) => {
    if (window.confirm("እርግጠኛ ንዎት ይጥፋ?")) {
      const items = this.state.Migrants_Data.filter(item => item._id !== id)
      this.setState({
        Migrants_Data: items,
        temp: items
      });
      database.remove({ _id: id }, {}, err => {
        if (err) console.log(err);
      })
    }
  }
  //return the list 
  DataList = () => {
    let counter = 1;
    return this.state.Migrants_Data.map((current, index) => {
      return (
        <tr key={index}>
          <td>{counter++}</td>
          <td>{current.fname + " " + current.mname + " " + current.lname}</td>
          <td>{current.Sex}</td>
          <td>{current.Age}</td>
          <td>{current.education}</td>
          <td>{current.Kebele}</td>
          <td>{current.leaveYr}</td>
          <td>{current.country}</td>
          <td>{current.returnYr}</td>
          <td>{current.currentStatus}</td>
          <td>{current.phone}</td>
          <td>{current.checkup}</td>
          <td>
            <button className="btn btn-primary" onClick={() => this.handleEditform(current._id, index)} style={{}} ><span className=" glyphicon glyphicon-edit"></span>Edit</button>
            <button className="btn btn-danger" onClick={() => this.DeleteItem(current._id)} style={{}}> <span className="glyphicon glyphicon-trash"></span>Delete</button>
          </td>
        </tr>
      )
    })
  }
  handleCancel = (e) => {
    this.setState({
      isEditing: false
    })
  }
  _renderEditForm = () => {
    if (this.state.isEditing) {
      return (
        <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", }}>
          <div><button onClick={this.handleCancel} className=" btn btn-danger glyphicon glyphicon-remove-circle" style={{ padding: "1%", float: "right" }}></button></div>
          <form onSubmit={this.onSubmit} style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "7%" }}>
            <div className="row">
              <div className="col-sm-3" style={{}}>
              </div>
              <div className="col-sm-3" style={{}}>
                <div className="form-group">
                  <label htmlFor="fname">ስም</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.fname}
                    onChange={this.onChangeFname}
                    style={{}}
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
                <div className="form-group">
                  <label htmlFor="sex">ጾታ</label>
                  <select className="form-control"
                    value={this.state.Sex}
                    onChange={this.onChangeSex}
                  >
                    <option>ወንድ</option>
                    <option>ሴት</option>
                    <option>ሌላ</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="age">እድሜ</label>
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.Age}
                    onChange={this.onChangeAge}

                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zone">የት/ት ደረጃ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.education}
                    onChange={this.onChangeEducation}
                  />
                </div>
                <div className="form-group">
                  <label>ዞን</label>
                  <ZoneList onChangeSelectZone={this.onChangeZone} />
                </div>
              </div>
              {/* gehsjdj */}



              {/* right */}
              <div className="col-sm-3" style={{}}>
                <div className="form-group">
                  <label>ወረዳ</label>
                  <WoredaList onChangeSelectWoreda={this.onChangeWoreda} />
                </div>
                <div className="form-group">
                  <label htmlFor="woreda">ቀበሌ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.Kebele}
                    onChange={this.onChangeKebele}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="kebele">የሄደበት/ች ዓ/ም</label>
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.leaveYr}
                    onChange={this.onChangeLeaveYr}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="income">የሄደበት/ች አገር</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.country}
                    onChange={this.onChangeCountery}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tegalache">የተመለሰበት/ች ዓ/ም</label>
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.returnYr}
                    onChange={this.onChangeReturnYr}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="checkup">አሁን ያለበት/ች ሁኔታ</label>
                  <input
                    type="text"
                    className="form-control" id="checkup"
                    value={this.state.currentStatus}
                    onChange={this.onChangeCurrentStatus}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkup">ስልክ ቁጥር</label>
                  <input
                    type="text"
                    className="form-control" id="checkup"
                    value={this.state.phone}
                    onChange={this.onChangePhone}
                  />
                </div>

              </div>
              <div className="col-sm-2" style={{}}>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3" style={{}}>

              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="checkup">ምርመራ</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    value={this.state.checkup}
                    onChange={this.onChangeCheckup}
                  >

                  </textarea>

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
    const items = this.state.Migrants_Data.filter(item => item._id == id)
    items.map(item => {
      this.setState({
        fname: item.fname,
        lname: item.lname,
        mname: item.mname,
        Sex: item.Sex,
        Age: item.Age,
        Zone: item.Zone,
        woreda: item.woreda,
        Kebele: item.Kebele,
        education: item.education,
        leaveYr: item.leaveYr,
        country: item.country,
        returnYr: item.returnYr,
        currentStatus: item.currentStatus,
        phone: item.phone,
        checkup: item.checkup
      });
    });
    this.setState({
      isEditing: true
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    const UpdateData = {
      fname: this.state.fname,
      lname: this.state.lname,
      mname: this.state.mname,
      Sex: this.state.Sex,
      Age: this.state.Age,
      Zone: this.state.Zone,
      woreda: this.state.woreda,
      Kebele: this.state.Kebele,
      education: this.state.education,
      leaveYr: this.state.leaveYr,
      country: this.state.country,
      returnYr: this.state.returnYr,
      currentStatus: this.state.currentStatus,
      phone: this.state.phone,
      checkup: this.state.checkup
    }
    const { fname, lname, mname, Age, leaveYr, returnYr } = UpdateData;
    if (fname == '' || lname == '' || mname == '' || Age == '' || leaveYr == '') {
      alert("እባክዎ በትክክል ይሙሉ!")
    } else {
      if (Age < 0) {
        alert("ያስገቡት ዕድሜ ከ 0 በታች ነው! ያስተካክሉ!")
      } else {
        if (leaveYr > returnYr) {
          alert("እባክዎ የሄደበት/ች ወይም የተመለሰበት/ች ዓ/ም ትክክል መሆንዎን ያርጋግጡ!")
        } else {
          //update from local array
          let arr = this.state.Migrants_Data;
          arr[globalkey] = UpdateData;
          this.setState({
            Migrants_Data: arr,
            temp: arr,
            isEditing: false
          })
          //update from database
          database.update({ _id: globalId }, { $set: UpdateData }, (err, res) => {
            if (err) { console.log(err) }
            else { alert("Updated!") }
          })
        }
      }
    }
  }
  render() {
    return (
      this.state.isEditing ?
        <div>
          {this._renderEditForm()}
        </div>
        :
        <div>
          <div className="table-responsive" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <div className="row" style={{ paddingTop: "3%" }}>
              <div className="col-sm-1"></div>
              <div className="col-sm-2">
                <div className="form-group">
                  <ZoneList onChangeSelectZone={this.onChangeSelectZone} />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <WoredaList onChangeSelectWoreda={this.onChangeSelectWoreda} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.KebeleSearch}
                        placeholder="ቀጠና/ቀጠና ..."
                        onChange={this.onChangeKebeleSearch}
                      />
                    </div>
                  </div>
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
                    {/* <div className="form-group">
                                        <select className="form-control"
                                            onChange={this.onChangeLimit}
                                        >
                                            <option value="10">1-10</option>
                                            <option value="50">1-50</option>
                                            <option value="100">1-100</option>
                                            <option value="all">Show all</option>
                                        </select>
                                    </div> */}
                  </div>
                  <div className="col-sm-6">

                  </div>
                </div>
              </div>
            </div>
            <table className="table table-striped table-bordered">
              <caption style={{ fontWeight: "bold", textAlign: "center" }}>ከስደት ተመላሾች መረጃ</caption>
              <thead style={{ background: "#fff" }}>
                <tr>
                  <th>ተ.ቁ</th>
                  <th>ሙሉ ስም</th>
                  <th>ጾታ</th>
                  <th>እድሜ</th>
                  <th>የት/ት ደርጃ</th>
                  <th>ቀበሌ/ቀጠና</th>
                  <th>የሄዱበት/ች ዓ/ም</th>
                  <th>የሄዱበት/ች አገር</th>
                  <th>የተመለሰበት/ች ዓ/ም</th>
                  <th>አሁን ያለበት/ች ሁኔታ</th>
                  <th>ስ.ቁጥር</th>
                  <th>ምርመራ</th>
                  <th>Action</th>
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
