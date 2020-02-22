import React, { Component } from 'react';
import DataStore from 'nedb';
let database, globalId, globalkey, cit, keb, vilg;

export class Home_table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Home_Data: [],
            temp: '',
            isEditing: false,
            isExpand: true,
            _city: '',
            _kebele: '',
            villageSearch: '',
            fname: '',
            lname: '',
            mname: '',
            Sex: 'ወንድ',
            Age: '',
            familyMale: '',
            familyfemale: '',
            noOfWorker: '',
            notWorkIncaseHealth: '',
            helpLess: '',
            income: '',
            housing: '',
            village: '',
            userType: '',
            spcificVilgName: '',
            phone: '+251',
            noOfUser: '',
            level: '',
            city: '',
            kebele: ''

        }
    }

    onChangeCitySearch = (e) => {
        this.setState({
            _city: e.target.value
        })
    }
    onChangeKebeleSearch = (e) => {
        this.setState({
            _kebele: e.target.value
        })
    }
    onChangeVillageSearch = (e) => {
        this.setState({
            villageSearch: e.target.value
        })
    }
    onChangeCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    onChangeKebele = (e) => {
        this.setState({
            kebele: e.target.value
        })
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
    onChangeFamilyMale = (e) => {
        this.setState({
            familyMale: e.target.value,
        });
    }
    onChangeFamilyFemale = (e) => {
        this.setState({
            familyfemale: e.target.value,
        });
    }
    onChangeNoOfWorker = (e) => {
        this.setState({
            noOfWorker: e.target.value,
        });
    }
    onChangeNotWorkInCaseHealth = (e) => {
        this.setState({
            notWorkIncaseHealth: e.target.value,
        });
    }
    onChangeHelpLess = (e) => {
        this.setState({
            helpLess: e.target.value,
        });
    }
    onChangeIncome = (e) => {
        this.setState({
            income: e.target.value,
        });
    }
    onChangeHousing = (e) => {
        this.setState({
            housing: e.target.value,
        });
    }
    onChangeVillage = (e) => {
        this.setState({
            village: e.target.value,
        });
    }
    onChangeUserType = (e) => {
        this.setState({
            userType: e.target.value,
        });
    }
    onChangeSpacificVillage = (e) => {
        this.setState({
            spcificVilgName: e.target.value,
        });
    }
    onChangePhone = (e) => {
        this.setState({
            phone: e.target.value,
        });
    }
    onChangeNumberOfUser = (e) => {
        this.setState({
            noOfUser: e.target.value,
        });
    }
    onChangeLevel = (e) => {
        this.setState({
            level: e.target.value,
        });
    }
    LoadData = () => {
        database = new DataStore("../Home_Data.db");
        database.loadDatabase(err => {
            if (err) console.log(err)
        });
        database.find({})
            .sort({ fname: 1 })
            .exec((err, docs) => {
                if (err) console.log(err)
                else {
                    this.setState({
                        Home_Data: docs
                    });
                    this.setState({
                        temp: this.state.Home_Data
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
        if (this.state._city == '' && this.state._kebele == '' && this.state.villageSearch == '') {
            this.setState({
                Home_Data: this.state.temp
            })
        } else if (this.state._city !== '' && this.state._kebele !== '') {
            if (this.state.villageSearch !== '') {
                result = this.state.temp.filter(item => item.city == this.state._city)
                    .filter(item => item.kebele == this.state._kebele)
                    .filter(item => item.village == this.state.villageSearch)
                this.setState({
                    Home_Data: result
                })
            } else {
                result = this.state.temp.filter(item => item.city == this.state._city)
                    .filter(item => item.kebele == this.state._kebele)
                this.setState({
                    Home_Data: result
                })
                // alert("Hello am from city and kebel")
            }
        } else if (this.state._city == '' && this.state._kebele == '') {
            if (this.state.villageSearch !== '') {
                result = this.state.temp.filter(item => item.village == this.state.villageSearch)
                this.setState({
                    Home_Data: result
                })
                // alert("village only")
            }
        } else if (this.state._city !== '' && this.state.villageSearch !== '') {
            result = this.state.temp.filter(item => item.city == this.state._city)
                .filter(item => item.village == this.state.villageSearch)
            this.setState({
                Home_Data: result
            })
            // alert("village and city")
        } else if (this.state.villageSearch !== '' && this.state._kebele !== '') {
            result = this.state.temp.filter(item => item.kebele == this.state._kebele)
                .filter(item => item.village == this.state.villageSearch)
            this.setState({
                Home_Data: result
            })
            // alert("village and kebele")
        }
    }
    //delete items
    DeleteItem = (id) => {
        if (window.confirm("እርግጠኛ ንዎት ይጥፋ?")) {
            const items = this.state.Home_Data.filter(item => item._id !== id)
            this.setState({
                Home_Data: items
            });
            database.remove({ _id: id }, {}, err => {
                if (err) console.log(err);
            })
        }
    }
    DataList = () => {
        let counter = 1;
        return this.state.Home_Data.map((current, index) => {
            return (
                this.state.isExpand ?
                    <tr key={index}>
                        <td>{counter++}</td>
                        <td>{current.fname + " " + current.mname + " " + current.lname}</td>
                        <td>{current.Age}</td>
                        <td>{current.Sex}</td>
                        <td>{current.familyMale}</td>
                        <td>{current.familyfemale}</td>
                        <td>{parseInt(current.familyMale, 10) + parseInt(current.familyfemale, 10)}</td>
                        <td>{current.noOfWorker}</td>
                        <td>{current.notWorkIncaseHealth}</td>
                        <td>{current.helpLess}</td>
                        <td>{current.income}</td>
                        <td>{current.housing}</td>
                        <td>{current.village}</td>

                    </tr>
                    :
                    <tr key={index}>
                        <td>{counter++}</td>
                        <td>{current.fname + " " + current.mname + " " + current.lname}</td>
                        <td>{current.Age}</td>
                        <td>{current.Sex}</td>
                        <td>{current.familyMale}</td>
                        <td>{current.familyfemale}</td>
                        <td>{parseInt(current.familyMale, 10) + parseInt(current.familyfemale, 10)}</td>
                        <td>{current.noOfWorker}</td>
                        <td>{current.notWorkIncaseHealth}</td>
                        <td>{current.helpLess}</td>
                        <td>{current.income}</td>
                        <td>{current.housing}</td>
                        <td>{current.village}</td>
                        <td>{current.userType}</td>
                        <td>{current.spcificVilgName}</td>
                        <td>{current.phone}</td>
                        <td>{current.noOfUser}</td>
                        <td>{current.level}</td>
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
                    <form onSubmit={this.onSubmit} style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "7%" }}>
                        <div className="row">
                            <div className="col-sm-4" style={{}}>
                                <div className="form-group">
                                    <label htmlFor="fname">የአባ/እማ ወራ ስም</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.fname}
                                        onChange={this.onChangeFname}
                                        style={{}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mname">የአባ/እማ ወራ የአባት ስም</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.mname}
                                        onChange={this.onChangeMname}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lname">የአባ/እማ ወራ የአያት ስም</label>
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
                                            <label htmlFor="sex">የአባ/እማ ወራ ጾታ</label>
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
                                            <label htmlFor="age">የአባ/እማ ወራ እድሜ</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={this.state.Age}
                                                onChange={this.onChangeAge}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="zone">የቤተሰቡ የወንድ ብዛት</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={this.state.familyMale}
                                                onChange={this.onChangeFamilyMale}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="zone">የቤተሰቡ የሴት ብዛት</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={this.state.familyfemale}
                                                onChange={this.onChangeFamilyFemale}
                                            />
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-sm-4" style={{}}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="woreda">መስራት የሚችሉ ብዛት/ከ18-59</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={this.state.noOfWorker}
                                                onChange={this.onChangeNoOfWorker}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="kebele">መስራት የማይችሉ</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={this.state.notWorkIncaseHealth}
                                                onChange={this.onChangeNotWorkInCaseHealth}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="income">አረጋዊ/አካል ጉዳተኛ/ህመምተኛ/ጧሪና ደጋፊ የሌላቸው</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={this.state.helpLess}
                                        onChange={this.onChangeHelpLess}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tegalache">የቤተሰብ ወርሃዊ ገቢ</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={this.state.income}
                                        onChange={this.onChangeIncome}
                                    />
                                </div>

                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="zone">ቤትና የቤት ዕቃ ሁኔታ</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.housing}
                                                    onChange={this.onChangeHousing}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="zone">ከተማ</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.city}
                                                    onChange={this.onChangeCity}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="zone">ቀበሌ</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.kebele}
                                                    onChange={this.onChangeKebele}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="zone">ጎጥ</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.village}
                                                    onChange={this.onChangeVillage}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{}}>

                                <div className="form-group">
                                    <label htmlFor="zone">የተጠቃሚ አይነት</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.userType}
                                        onChange={this.onChangeUserType}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zone">ቦታውን ለመለየት ልዩ መጠሪያ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.spcificVilgName}
                                        onChange={this.onChangeSpacificVillage}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="checkup">ስልክ ቁጥር</label>
                                    <input
                                        type="number"
                                        className="form-control" id="checkup"
                                        value={this.state.phone}
                                        onChange={this.onChangePhone}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zone">የተጠቃሚ ብዛት</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={this.state.noOfUser}
                                        onChange={this.onChangeNumberOfUser}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zone">ደረጃ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.level}
                                        onChange={this.onChangeLevel}
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
        const items = this.state.Home_Data.filter(item => item._id == id)
        items.map(item => {
            this.setState({
                fname: item.fname,
                lname: item.lname,
                mname: item.mname,
                Sex: item.Sex,
                Age: item.Age,
                familyMale: item.familyMale,
                familyfemale: item.familyfemale,
                noOfWorker: item.noOfWorker,
                notWorkIncaseHealth: item.notWorkIncaseHealth,
                helpLess: item.helpLess,
                income: item.income,
                housing: item.housing,
                village: item.village,
                userType: item.userType,
                spcificVilgName: item.spcificVilgName,
                phone: item.phone,
                noOfUser: item.noOfUser,
                level: item.level,
                city: item.city,
                kebele: item.kebele
            });
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
            familyMale: this.state.familyMale,
            familyfemale: this.state.familyfemale,
            noOfWorker: this.state.noOfWorker,
            notWorkIncaseHealth: this.state.notWorkIncaseHealth,
            helpLess: this.state.helpLess,
            income: this.state.income,
            housing: this.state.housing,
            village: this.state.village,
            userType: this.state.userType,
            spcificVilgName: this.state.spcificVilgName,
            phone: this.state.phone,
            noOfUser: this.state.noOfUser,
            level: this.state.level,
            city: this.state.city,
            kebele: this.state.kebele
        }
        if (this.state.fname == '' || this.state.lname == '' ||
            this.state.mname == '' || this.state.Age == '' ||
            this.state.village == '') {
            alert("እባክዎ በትክክል ይሙሉ!")
        } else {
            if (this.state.Age < 0) {
                alert("ያስገቡት ዕድሜ ከ 0 በታች ነው! ያስተካክሉ!")
            } else {
                //update from array
                let arr = this.state.Home_Data;
                arr[globalkey] = updateData;
                this.setState({
                    Home_Data: arr,
                    temp: arr,
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
                            <div className="col-sm-1"></div>
                            <div className="col-sm-2">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state._city}
                                        placeholder="ከተማ ..."
                                        onChange={this.onChangeCitySearch}
                                    />
                                    {/* <ZoneList onChangeSelectZone={this.onChangeSelectZone} /> */}
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state._kebele}
                                                placeholder="ቀበሌ ..."
                                                onChange={this.onChangeKebeleSearch}
                                            />
                                            {/* <WoredList onChangeSelectWoreda={this.onChangeSelectWoreda} /> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.villageSearch}
                                                placeholder="ቀጠና/ሰፈር ..."
                                                onChange={this.onChangeVillageSearch}
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
                            <caption
                                style={{
                                    fontWeight: "bold",
                                    textAlign: "center"
                                }}>ቀጥታ ድጋፍ የቤተሰብ ሁኔታ </caption>
                            {this.state.isExpand ?
                                <thead>
                                    <tr>
                                        <th rowSpan="2">ተ.ቁ</th>
                                        <th rowSpan="2">የአባ/እማ ወራ ስም</th>
                                        <th rowSpan="2">ዕድሜ</th>
                                        <th rowSpan="2">ፆታ</th>
                                        <th colSpan="3" >የቤተሰብ ብዛት</th>
                                        <th rowSpan="2">መስራት የሚችሉ</th>
                                        <th rowSpan="2">በጤና ምክንያት መስራት የማይችሉ</th>
                                        <th rowSpan="2">ጧሪና ደጋፊ የሌላቸው</th>
                                        <th rowSpan="2">ወርሃዊ ገቢ</th>
                                        <th rowSpan="2">ቤትና የቤት ዕቃ ሁኔታ</th>
                                        <th rowSpan="2">ጎጥ <span className={this.state.isExpand ? "btn btn-primary glyphicon glyphicon-step-forward" : "btn btn-primary glyphicon glyphicon-step-backward"} onClick={() => this.setState({ isExpand: false })}></span></th>

                                    </tr>
                                    <tr>

                                        <th>ወ</th>
                                        <th>ሴ</th>
                                        <th>ድምር</th>

                                    </tr>
                                </thead>
                                :
                                <thead>
                                    <tr>
                                        <th rowSpan="2">ተ.ቁ</th>
                                        <th rowSpan="2">የአባ/እማ ወራ ስም</th>
                                        <th rowSpan="2">ዕድሜ</th>
                                        <th rowSpan="2">ፆታ</th>
                                        <th colSpan="3" >የቤተሰብ ብዛት</th>
                                        <th rowSpan="2">መስራት የሚችሉ ብዛት/ከ18-59</th>
                                        <th rowSpan="2">በጤና/በአካል ጉዳት ምክንያት መስራት የማይችሉ</th>
                                        <th rowSpan="2">አረጋዊ/አካል ጉዳተኛ/ህመምተኛ/ጧሪና ደጋፊ የሌላቸው</th>
                                        <th rowSpan="2">የቤተሰብ ወርሃዊ ገቢ</th>
                                        <th rowSpan="2">ቤትና የቤት ዕቃ ሁኔታ</th>
                                        <th rowSpan="2">ጎጥ <span className={this.state.isExpand ? "btn btn-primary glyphicon glyphicon-step-forward" : "btn btn-primary glyphicon glyphicon-step-backward"} onClick={() => this.setState({ isExpand: true })}></span></th>
                                        <th rowSpan="2">የተጠቃሚ አይነት</th>
                                        <th rowSpan="2">ቦታውን ለመለየት ልዩ መጠሪያ</th>
                                        <th rowSpan="2">ስልክ ቁጥር</th>
                                        <th rowSpan="2">የተጠቃሚ ብዛት</th>
                                        <th rowSpan="2">ደረጃ</th>
                                        <th rowSpan="2">Action</th>


                                    </tr>
                                    <tr>

                                        <th>ወ</th>
                                        <th>ሴ</th>
                                        <th>ድምር</th>

                                    </tr>
                                </thead>
                            }

                            <tbody>
                                {this.DataList()}
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
}

export default Home_table
