import React, { Component } from 'react';
import DataStore from 'nedb';
let database, globalId, globalkey;

class Sex_Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Sex_Offenders_Data: [],
            temp: '',
            isEditing: false,
            search: '',
            fname: '',
            lname: '',
            mname: '',
            Sex: 'ወንድ',
            Age: '',
            woreda: '',
            Kebele: '',
            birthPlace: '',
            howManyYr: '',
            howManyYrInCity: '',
            workStation: '',
            education: '',
            reason: ''
        }
    }
    onChangeSearch = (e) => {
        this.setState({
            search: e.target.value
        });
        if (this.state.search == '') {
            this.LoadData();
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
    onChangeBirthPlace = (e) => {
        this.setState({
            birthPlace: e.target.value,
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
    onChangeHowManyYear = (e) => {
        this.setState({
            howManyYr: e.target.value,
        });
    }
    onChangeHowManyYearInCity = (e) => {
        this.setState({
            howManyYrInCity: e.target.value,
        });
    }
    onChangeWorkStation = (e) => {
        this.setState({
            workStation: e.target.value,
        });
    }
    onChangeEducation = (e) => {
        this.setState({
            education: e.target.value,
        });
    }
    onChangeReason = (e) => {
        this.setState({
            reason: e.target.value,
        });
    }
    onChangeLimit = (e) => {
        this.setState({
            limit: parseInt(e.target.value, 10)
        })
        if (e.target.value == 'all') {
            this.showAll()
        } else {
            this.LoadData(parseInt(e.target.value, 10))
        }
    }
    LoadData = (limit) => {
        database = new DataStore('../Sex_Data.db');
        database.loadDatabase((err) => {
            if (err) throw err
        });
        database.find({})
            .sort({ fname: 1 })
            .limit(limit)
            .exec((err, docs) => {
                if (err) {
                    console.log(err);
                } else {
                    this.setState({
                        Sex_Offenders_Data: docs
                    });
                    this.setState({
                        temp: this.state.Sex_Offenders_Data
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
                        Sex_Offenders_Data: docs
                    });
                    this.setState({
                        temp: this.state.Sex_Offenders_Data
                    })
                }
            })
    }
    componentDidMount() {
        this.LoadData(10)
    }
    //search items
    SearchResult = () => {
        if (this.state.search == '') {
            this.setState({
                Sex_Offenders_Data: this.state.temp
            })
        } else {
            let result = this.state.Sex_Offenders_Data.filter(item => item.fname == this.state.search)
            if (result.length > 0) {
                this.setState({
                    Sex_Offenders_Data: result
                })
            } else {
                alert("Not Found")
            }
        }
    }
    //delete items
    DeleteItem = (id) => {
        if (window.confirm("እርግጠኛ ንዎት ይጥፋ?")) {
            const items = this.state.Sex_Offenders_Data.filter(item => item._id !== id)
            this.setState({
                Sex_Offenders_Data: items
            });
            database.remove({ _id: id }, {}, err => {
                if (err) console.log(err);
            })
        }
    }
    DataList = () => {
        let counter = 1;
        return this.state.Sex_Offenders_Data.map((current, index) => {
            return (
                <tr key={index}>
                    <td>{counter++}</td>
                    <td>{current.fname + " " + current.mname + " " + current.lname}</td>
                    <td>{current.Sex}</td>
                    <td>{current.Age}</td>
                    <td>{current.birthPlace}</td>
                    <td>{current.howManyYr}</td>
                    <td>{current.howManyYrInCity}</td>
                    <td>{current.workStation}</td>
                    <td>{current.education}</td>
                    <td>{current.reason}</td>
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
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-6">
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
                                        <div className="col-sm-6">
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
                                    <label htmlFor="woreda">ወረዳ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.woreda}
                                        onChange={this.onChangeWoreda}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="kebele">ቀበሌ/ቀጠና</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.Kebele}
                                        onChange={this.onChangeKebele}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">የትውልድ ቦታ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.birthPlace}
                                        onChange={this.onChangeBirthPlace}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">በስራው የቆይታ ጊዜ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.howManyYr}
                                        onChange={this.onChangeHowManyYear}
                                    />
                                </div>
                            </div>

                            {/* right */}
                            <div className="col-sm-4" style={{}}>
                                <div className="form-group">
                                    <label htmlFor="age">በከተማው የቆይታ ጊዜ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.howManyYrInCity}
                                        onChange={this.onChangeHowManyYearInCity}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">የሚሰሩበት ቦታ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.workStation}
                                        onChange={this.onChangeWorkStation}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="income">የት/ት ደረጃ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.education}
                                        onChange={this.onChangeEducation}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tegalache">ወደ ስራ የገቡበት ምክንያት</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.reason}
                                        onChange={this.onChangeReason}
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
                            onClick={this.onSubmit}
                        >
                            <span className="glyphicon glyphicon-save"></span> Save
                   </button>
                    </form>
                </div>
            )
        }
    }
    handleEditform = (id, key) => {
        globalId = id;
        globalkey = key;
        const items = this.state.Sex_Offenders_Data.filter(item => item._id == id)
        items.map(item => {
            this.setState({
                fname: item.fname,
                lname: item.lname,
                mname: item.mname,
                Sex: item.Sex,
                Age: item.Age,
                woreda: item.woreda,
                Kebele: item.Kebele,
                birthPlace: item.birthPlace,
                howManyYr: item.howManyYr,
                howManyYrInCity: item.howManyYrInCity,
                workStation: item.workStation,
                education: item.education,
                reason: item.reason
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
            woreda: this.state.woreda,
            Kebele: this.state.Kebele,
            birthPlace: this.state.birthPlace,
            howManyYr: this.state.howManyYr,
            howManyYrInCity: this.state.howManyYrInCity,
            workStation: this.state.workStation,
            education: this.state.education,
            reason: this.state.reason
        }
        if (this.state.fname == '' || this.state.lname == '' ||
            this.state.mname == '' || this.state.Age == '' ||
            this.state.woreda == '' || this.state.Kebele == '' ||
            this.state.birthPlace == '' || this.state.howManyYr == '' ||
            this.state.howManyYrInCity == '' || this.state.workStation == '' ||
            this.state.education == '' || this.state.reason == '') {
            alert("እባክዎ በትክክል ይሙሉ!")
        } else {
            if (this.state.Age < 0) {
                alert("ያስገቡት ዕድሜ ከ 0 በታች ነው! ያስተካክሉ!")
            } else {
                //update from local array
                let arr = this.state.Sex_Offenders_Data;
                arr[globalkey] = updateData;
                this.setState({
                    Sex_Offenders_Data: arr,
                    isEditing: false
                })
                //update from database
                database.update({ _id: globalId }, { $set: updateData }, (err, res) => {
                    if (err) console.log(err)
                    else alert("Updated!")
                })
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
                            <caption style={{ fontWeight: "bold", textAlign: "center" }}>ንግድዊ ወሲብ ተዳዳሪዎች</caption>
                            <thead style={{ background: "#fff" }}>
                                <tr>
                                    <th>ተ.ቁ</th>
                                    <th>ሙሉ ስም</th>
                                    <th>ጾታ</th>
                                    <th>እድሜ</th>
                                    <th>የትውልድ ቦታ</th>
                                    <th>በስራው የቆይታ ጊዜ</th>
                                    <th>በከተማው የቆይታ ጊዜ</th>
                                    <th>የሚሰሩበት ቦታ</th>
                                    <th>የት/ት ደረጃ</th>
                                    <th>ወደ ስራው የገቡበት ምክንያት</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.DataList()}
                            </tbody>
                        </table>
                    </div>
                </div>
        );
    }
}

export default Sex_Table;
