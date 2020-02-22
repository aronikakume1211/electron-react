import React, { Component } from 'react';
import DataStore from 'nedb';
import WoredaList from '../Forms/woredaList';
let database, globalId, globalkey;
let vilg = '';
let wor = 'All'
let keb = ''

export default class Vulnerable_children extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Vulnerable_children_Data: [],
            temp: '',
            isEditing: false,
            fname: '',
            lname: '',
            mname: '',
            Sex: 'ወንድ',
            Age: '',
            woreda: '',
            kebele: '',
            village: '',
            helper: 'ዘመድ',
            familyStatus: 'አባት ብቻ ያለው/ት',
            educationStatus: 'በመማር ላይ ያለ/ች',
            no_Children: '',
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
    onChangeVillage = (e) => {
        this.setState({
            village: e.target.value,
        });
    }
    onChangeWoreda = (e) => {
        this.setState({
            woreda: e.target.value,
        });
    }
    onChangeKebele = (e) => {
        this.setState({
            kebele: e.target.value,
        });
    }
    onChangeFamilyStatus = (e) => {
        this.setState({
            familyStatus: e.target.value,
        });
    }
    onChangeCheckup = (e) => {
        this.setState({
            checkup: e.target.value,
        });


    }
    onChangeEducationStatus = (e) => {
        this.setState({
            educationStatus: e.target.value,
        });
    }
    onChangeHelper = (e) => {
        this.setState({
            helper: e.target.value,
        });
    }
    onChangeNumberOfChildren = (e) => {
        this.setState({
            no_Children: e.target.value,
        });
    }
    onChangeSelectVillage = (e) => {
        vilg = e.target.value;
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
        database = new DataStore("../Vulnerable_children_Data.db");
        database.loadDatabase(err => {
            if (err) console.log(err)
        });
        database.find({})
            .sort({ fname: 1 })
            .exec((err, docs) => {
                if (err) console.log(err)
                else {
                    this.setState({
                        Vulnerable_children_Data: docs
                    });
                    this.setState({
                        temp: this.state.Vulnerable_children_Data
                    })
                }
            })
    }
    componentDidMount() {
        this.LoadData()
    }
    //search items
    SearchResult = () => {
        let result;
        if (wor == 'All' && vilg == '' && keb == '') {
            this.setState({
                Vulnerable_children_Data: this.state.temp
            })
        } else if (wor !== 'All' && keb !== '') {
            if (vilg !== '') {
                result = this.state.temp.filter(item => item.woreda == wor)
                    .filter(item => item.kebele == keb)
                    .filter(item => item.village == vilg);
                this.setState({
                    Vulnerable_children_Data: result
                })
                //alert("Zone and woreda and kebele")
            } else {
                result = this.state.temp.filter(item => item.woreda == wor)
                    .filter(item => item.kebele == keb);
                this.setState({
                    Vulnerable_children_Data: result
                })
                // alert("zone and woreda only")
            }
        } else if (wor == 'All' && keb == '') {
            if (vilg !== '') {
                result = this.state.temp.filter(item => item.village == vilg);
                this.setState({
                    Vulnerable_children_Data: result
                })
                // alert("Village only")
            }
        } else if (wor !== 'All' && vilg !== '') {
            result = this.state.temp.filter(item => item.woreda == wor)
                .filter(item => item.village == vilg)
            this.setState({
                Vulnerable_children_Data: result
            })
            //  alert("woreda and village only")
        } else if (keb !== '' && vilg !== '') {
            result = this.state.temp.filter(item => item.kebele == keb)
                .filter(item => item.village == vilg);
            this.setState({
                Vulnerable_children_Data: result
            })
            // alert("kebel  and village")
        } else if (keb == '' && wor !== 'All') {
            result = this.state.temp.filter(item => item.woreda == wor);
            this.setState({
                Vulnerable_children_Data: result
            })
            // alert("Zone Only")
        } else if (keb !== '' || wor == 'All') {
            result = this.state.temp.filter(item => item.kebele == keb);
            this.setState({
                Vulnerable_children_Data: result
            })
            //alert("Woreda only")
        }
    }
    //delete items
    DeleteItem = (id) => {
        if (window.confirm("እርግጠኛ ንዎት ይጥፋ?")) {
            const items = this.state.Vulnerable_children_Data.filter(item => item._id !== id)
            this.setState({
                Vulnerable_children_Data: items,
                temp: items
            });
            database.remove({ _id: id }, {}, err => {
                if (err) console.log(err);
            })
        }
    }
    DataList = () => {
        let counter = 1;
        return this.state.Vulnerable_children_Data.map((current, index) => {
            return (
                <tr key={index}>
                    <td>{counter++}</td>
                    <td>{current.fname + " " + current.mname + " " + current.lname}</td>
                    <td>{current.Sex}</td>
                    <td>{current.Age}</td>
                    <td>{current.woreda}</td>
                    <td>{current.kebele}</td>
                    <td>{current.village}</td>
                    <td>{current.familyStatus}</td>
                    <td>{current.helper}</td>
                    <td>{current.educationStatus}</td>
                    <td>{current.no_Children}</td>
                    <td>{current.checkup}</td>
                    <td>
                        <button className="btn btn-primary" onClick={() => this.handleEditform(current._id, index)} style={{}} ><span className=" glyphicon glyphicon-edit"></span>Edit</button>
                        <button className="btn btn-danger" onClick={() => this.DeleteItem(current._id)} style={{}}> <span className="glyphicon glyphicon-trash"></span>Delete</button>
                    </td>
                </tr>
            )
        });
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
                                    <label htmlFor="akal">ያለበት አካባቢ</label>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label htmlFor="age">ወረዳ</label>
                                            <WoredaList onChangeSelectWoreda={this.onChangeWoreda} />
                                            {/* <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.woreda}
                                                onChange={this.onChangeWoreda}
                                            /> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="sex">ቀበሌ</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.kebele}
                                                onChange={this.onChangeKebele}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="age">ሰፈር</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.village}
                                                onChange={this.onChangeVillage}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="sex">ድጋፍ ያደረገ ያለ</label>
                                            <select className="form-control"
                                                value={this.state.helper}
                                                onChange={this.onChangeHelper}
                                            >
                                                <option>ዘመድ</option>
                                                <option>ማ/ሰብ</option>
                                                <option>ድርጅት</option>
                                                <option>መንግስት</option>
                                                <option>ደጋፊ የለውም/ትም</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="age">የት/ት ሁኔታ</label>
                                            <select className="form-control"
                                                value={this.state.educationStatus}
                                                onChange={this.onChangeEducationStatus}
                                            >
                                                <option>በመማር ላይ ያለ/ች</option>
                                                <option>ያቋረጠ/ች</option>
                                                <option>ያልጀመረ/ች</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="mname">የቤተሰብ ሁኔታ</label>
                                        <select className="form-control"
                                            value={this.state.familyStatus}
                                            onChange={this.onChangeFamilyStatus}
                                        >
                                            <option>አባት ብቻ ያለው/ት</option>
                                            <option>እናት ብቻ ያለው/ት</option>
                                            <option>ሁለቱም የሉም</option>
                                        </select>
                                    </div>
                                </div>

                            </div>


                            <div className="col-sm-4" style={{}}>
                                <div className="form-group">
                                    <label htmlFor="income">በቤተሰቡ ውስጥ ያሉ ህፃናት ብዛት</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={this.state.no_Children}
                                        onChange={this.onChangeNumberOfChildren} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="income">ምርመራ</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={this.state.checkup}
                                        onChange={this.onChangeCheckup}
                                        placeholder="ምርመራ..."
                                    />
                                </div>

                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{
                            borderRadius: "20px",
                            margin: "10px",
                        }} onClick={this.onSubmit}>
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
        const items = this.state.Vulnerable_children_Data.filter(item => item._id == id)
        items.map(item => {
            this.setState({
                fname: item.fname,
                lname: item.lname,
                mname: item.mname,
                Sex: item.Sex,
                Age: item.Age,
                woreda: item.woreda,
                kebele: item.kebele,
                village: item.village,
                familyStatus: item.familyStatus,
                educationStatus: item.educationStatus,
                no_Children: item.no_Children,
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
            woreda: this.state.woreda,
            kebele: this.state.kebele,
            village: this.state.village,
            familyStatus: this.state.familyStatus,
            educationStatus: this.state.educationStatus,
            no_Children: this.state.no_Children,
            checkup: this.state.checkup
        }
        const { fname, lname, mname, Age, no_Children } = UpdateData;
        if (fname == '' || lname == '' || mname == '' || Age == '' || no_Children == '') {
            alert("እባክዎ በትክክል ይሙሉ!")
        } else {
            if (Age < 0 || no_Children < 0) {
                alert("ያስገቡት ዕድሜ እና ህፃናት ብዛት ከ 0 በታች ነው! ያስተካክሉ!")
            } else {
                //update from local array
                let arr = this.state.Vulnerable_children_Data;
                arr[globalkey] = UpdateData;
                this.setState({
                    Vulnerable_children_Data: arr,
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
                                    <WoredaList onChangeSelectWoreda={this.onChangeSelectWoreda} />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.KebeleSearch}
                                                placeholder="ቀጠና ..."
                                                onChange={this.onChangeKebeleSearch}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={vilg}
                                                placeholder="ሰፈር ..."
                                                onChange={this.onChangeSelectVillage}
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
                            <caption style={{ fontWeight: "bold", textAlign: "center" }}>ተጋላጭ ህፃናት</caption>
                            <thead style={{ background: "#fff" }}>
                                <tr>
                                    <th rowSpan="2">ተ.ቁ</th>
                                    <th rowSpan="2">ሙሉ ስም</th>
                                    <th rowSpan="2">ጾታ</th>
                                    <th rowSpan="2">እድሜ</th>
                                    <th colSpan="3">ያሉበት አካባቢ</th>
                                    <th rowSpan="2">የቤተሰብ ሁኔታ</th>
                                    <th rowSpan="2">ድጋፍ እያደረገ አካል</th>
                                    <th rowSpan="2">የት/ት ሁኔታ</th>
                                    <th rowSpan="2">በቤተሰብ ህፃናት ብዛት</th>
                                    <th rowSpan="2">ምርመራ</th>
                                    <th rowSpan="2">Action</th>
                                </tr>
                                <tr>
                                    <th>ወረዳ</th>
                                    <th>ቀበሌ</th>
                                    <th>ሰፈር</th>
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
