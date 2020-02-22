import React, { Component } from 'react';
import DataStore from 'nedb';
import RegionList from '../Forms/RegionList';
import WoredaList from '../Forms/woredaList';
import ZoneList from '../Forms/zoneList';
let database, globalId, globalkey, keb;
let zon = 'All';
let wor = 'All'

export default class beggar_table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Beggar_Data: [],
            temp: '',
            isEditing: false,
            fname: '',
            lname: '',
            mname: '',
            Sex: 'ወንድ',
            Age: '',
            region: '',
            Zone: '',
            woreda: '',
            kebele: '',
            currentStatus: '',
            familyStatus: '',
            education: '',
            educationStatus: '',
            income: '',
            healthStatus: '',
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
            kebele: e.target.value,
        });
    }
    onChangeCurrentStatus = (e) => {
        this.setState({
            currentStatus: e.target.value,
        });
    }
    onChangeFamilyStatus = (e) => {
        this.setState({
            familyStatus: e.target.value,
        });
    }
    onChangeEducation = (e) => {
        this.setState({
            education: e.target.value,
        });


    }
    onChangeEducationStatus = (e) => {
        this.setState({
            educationStatus: e.target.value,
        });
    }
    onChangeHealth = (e) => {
        this.setState({
            healthStatus: e.target.value,
        });
    }
    onChangeIncome = (e) => {
        this.setState({
            income: e.target.value,
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
        database = new DataStore("../Beggar_Data.db");
        database.loadDatabase(err => {
            if (err) console.log(err)
        });
        database.find({})
            .sort({ fname: 1 })
            .exec((err, docs) => {
                if (err) console.log(err)
                else {
                    this.setState({
                        Beggar_Data: docs
                    });
                    this.setState({
                        temp: this.state.Beggar_Data
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
        if (wor === 'All' && zon === 'All' && keb === '') {
            this.setState({
                Beggar_Data: this.state.temp
            })
        } else if (wor !== 'All' && zon !== 'All') {
            if (this.state.KebeleSearch !== '') {
                result = this.state.temp.filter(item => item.Zone === zon)
                    .filter(item => item.woreda === wor)
                    .filter(item => item.kebele === keb);
                this.setState({
                    Beggar_Data: result
                })
                //alert("Zone and woreda and kebele")
            } else {
                result = this.state.temp.filter(item => item.Zone === zon)
                    .filter(item => item.woreda === wor);
                this.setState({
                    Beggar_Data: result
                })
                // alert("zone and woreda only")
            }
        } else if (wor === 'All' && zon === 'All') {
            if (keb !== '') {
                result = this.state.temp.filter(item => item.kebele === keb);
                this.setState({
                    Beggar_Data: result
                })
                // alert("Kebele only")
            }
        } else if (zon !== 'All' && keb !== '') {
            result = this.state.temp.filter(item => item.Zone === zon)
                .filter(item => item.kebele == keb)
            this.setState({
                Beggar_Data: result
            })
            //  alert("Zone and kebele only")
        } else if (wor !== 'All' && keb !== '') {
            result = this.state.temp.filter(item => item.woreda === wor)
                .filter(item => item.kebele === keb);
            this.setState({
                Beggar_Data: result
            })
            // alert("Woreda and Kebele")
        } else if (wor === 'All' && zon !== 'All') {
            result = this.state.temp.filter(item => item.Zone == zon);
            this.setState({
                Beggar_Data: result
            })
            // alert("Zone Only")
        } else if (wor !== 'All' || zon === 'All') {
            result = this.state.temp.filter(item => item.woreda === wor);
            this.setState({
                Beggar_Data: result
            })
            //alert("Woreda only")
        }
    }
    //delete items
    DeleteItem = (id) => {
        if (window.confirm("እርግጠኛ ንዎት ይጥፋ?")) {
            const items = this.state.Beggar_Data.filter(item => item._id !== id)
            this.setState({
                Beggar_Data: items,
                temp:items
            });
            database.remove({ _id: id }, {}, err => {
                if (err) console.log(err);
            })
        }
    }
    DataList = () => {
        let counter = 1;
        return this.state.Beggar_Data.map((current, index) => {
            return (
                <tr key={index}>
                    <td>{counter++}</td>
                    <td>{current.fname + " " + current.mname + " " + current.lname}</td>
                    <td>{current.Sex}</td>
                    <td>{current.region}</td>
                    <td>{current.Zone}</td>
                    <td>{current.woreda}</td>
                    <td>{current.kebele}</td>
                    <td>{current.Age}</td>
                    <td>{current.currentStatus}</td>
                    <td>{current.familyStatus}</td>
                    <td>{current.education}</td>
                    <td>{current.educationStatus}</td>
                    <td>{current.income}</td>
                    <td>{current.healthStatus}</td>
                    <td>
                        <button className="btn btn-primary" onClick={() => this.handleEditform(current._id, index)} style={{}} ><span className=" glyphicon glyphicon-edit"></span>Edit</button>
                        <button className="btn btn-danger" onClick={() => this.DeleteItem(current._id)} style={{}}> <span className="glyphicon glyphicon-trash"></span>Delete</button>
                    </td>
                </tr>
            )
        });
    }
    handleCancel=(e)=>{
        this.setState({
            isEditing:false
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
                                    <label htmlFor="akal">የመጣበት አካባቢ</label>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="sex">ከልል</label>
                                            <RegionList value={this.state.region} onChangeRegion={this.onChangeRegion} />
                                     
                                            {/* <select className="form-control"
                                                value={this.state.region}
                                                onChange={this.onChangeRegion}
                                            >
                                                <option>ቤኒሻንጉል ጉሙዝ</option>
                                                <option>ሴት</option>
                                                <option>ሌላ</option>
                                            </select> */}
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="age">ዞን</label>
                                            <ZoneList onChangeSelectZone={this.onChangeZone} />
                                        {/* <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.Zone}
                                                onChange={this.onChangeZone}
                                            /> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="sex">ወረዳ</label>
                                            <WoredaList onChangeSelectWoreda={this.onChangeWoreda} />
                                        {/* <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.woreda}
                                                onChange={this.onChangeWoreda}
                                            /> */}
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="age">ቀበሌ</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.kebele}
                                                onChange={this.onChangeKebele}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="sex">የመገኛ ሁኔታ</label>
                                            <select className="form-control"
                                                value={this.state.currentStatus}
                                                onChange={this.onChangeCurrentStatus}
                                            >
                                                <option>ጎዳና ላይ</option>
                                                <option>ተመላላሽ</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="age">የት/ት ሁኔታ</label>
                                            <select className="form-control"
                                                value={this.state.educationStatus}
                                                onChange={this.onChangeEducationStatus}
                                            >
                                                <option>በመማር ላይ</option>
                                                <option>ያቋረጠ</option>
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
                                    <label htmlFor="income">የት/ት ደረጃ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.education}
                                        onChange={this.onChangeEducation} />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="sex">የገቢ ምንጭ</label>
                                            <select className="form-control"
                                                value={this.state.income}
                                                onChange={this.onChangeIncome}
                                            >
                                                <option>ልመና</option>
                                                <option>ትናንሽ ንግዶች</option>
                                                <option>ሰው ቤት ተመላላሽ</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="age">የጤና ሁኔታ</label>
                                            <select className="form-control"
                                                value={this.state.healthStatus}
                                                onChange={this.onChangeHealth}
                                            >
                                                <option>ጤነኛ</option>
                                                <option>ታማሚ</option>
                                            </select>
                                        </div>
                                    </div>


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
    onSubmit = (e) => {
        e.preventDefault();
        const UpdateData = {
            fname: this.state.fname,
            lname: this.state.lname,
            mname: this.state.mname,
            Sex: this.state.Sex,
            Age: this.state.Age,
            region: this.state.region,
            Zone: this.state.Zone,
            woreda: this.state.woreda,
            kebele: this.state.kebele,
            currentStatus: this.state.currentStatus,
            familyStatus: this.state.familyStatus,
            education: this.state.education,
            educationStatus: this.state.educationStatus,
            income: this.state.income,
            healthStatus: this.state.healthStatus
        };
        const { fname, lname, mname, Age } = UpdateData;
        if (fname === '' || lname === '' || mname === '' || Age === '') {
            alert("እባክዎ በትክክል ይሙሉ!")
        } else {
            if (Age < 0) {
                alert("ያስገቡት ዕድሜ ከ 0 በታች ነው! ያስተካክሉ!")
            } else {
                //update from local array
                let arr = this.state.Beggar_Data;
                arr[globalkey] = UpdateData;
                this.setState({
                    Beggar_Data: arr,
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
    handleEditform = (id, key) => {
        globalId = id;
        globalkey = key;
        const items = this.state.Beggar_Data.filter(item => item._id === id)
        this.setState({
            isEditing: true
        })
       return items.map(item => {
            this.setState({
                fname: item.fname,
                lname: item.lname,
                mname: item.mname,
                Sex: item.Sex,
                Age: item.Age,
                region: item.region,
                Zone: item.Zone,
                woreda: item.woreda,
                kebele: item.kebele,
                currentStatus: item.currentStatus,
                familyStatus: item.familyStatus,
                education: item.education,
                educationStatus: item.educationStatus,
                income: item.income,
                healthStatus: item.healthStatus
            });
        });
       
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
                            <caption style={{ fontWeight: "bold", textAlign: "center" }}>ለምኖ አዳሪዎች</caption>
                            <thead style={{ background: "#fff" }}>
                                <tr>
                                    <th rowSpan="2">ተ.ቁ</th>
                                    <th rowSpan="2">ሙሉ ስም</th>
                                    <th rowSpan="2">ጾታ</th>
                                    <th colSpan="4">የመጣበት አካባቢ</th>
                                    <th rowSpan="2">እድሜ</th>
                                    <th rowSpan="2">የመገኛ ሁኔታ</th>
                                    <th rowSpan="2">የቤተሰብ ሁኔታ</th>
                                    <th rowSpan="2">የት/ት ደረጃ</th>
                                    <th rowSpan="2">የት/ት ሁኔታ</th>
                                    <th rowSpan="2">የገቢ ምንጭ</th>
                                    <th rowSpan="2">የጤና ሁኔታ</th>
                                    <th rowSpan="2">Action</th>
                                </tr>
                                <tr>
                                    <th>ክልል</th>
                                    <th>ዞን</th>
                                    <th>ወረዳ</th>
                                    <th>ቀበሌ</th>
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
