import React, { Component } from 'react';
import DataStore from 'nedb';
import ZoneList from '../Forms/zoneList';
import WoredaList from '../Forms/woredaList';
let database, globalId, globalkey, keb;
let zon = 'All';
let wor = 'All'

export default class Mental_table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Vulnerable_youth_Data: [],
            temp: '',
            isEditing: false,
            fname: '',
            lname: '',
            mname: '',
            Sex: '',
            Age: '',
            Zone: '',
            woreda: '',
            Kebele: '',
            Income: '',
            ExposeRate: '',
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
    onChangeIncome = (e) => {
        this.setState({
            Income: e.target.value,
        });
    }
    onChangeExposerate = (e) => {
        this.setState({
            ExposeRate: e.target.value,
        });
    }
    onChangeCheckup = (e) => {
        this.setState({
            checkup: e.target.value,
        });
    }
    onChangeSex = (e) => {
        this.setState({
            Sex: e.target.value,
        });
    }
    onChangeSelectZone = (e) => {
        zon = e.target.value
    }
    onChangeSelectWoreda = (e) => {
        wor = e.target.value
    }
    onChangeKebeleSearch = (e) => {
        keb = e.target.value;
        this.setState({
            KebeleSearch: e.target.value
        })
        this.SearchResult();
    }
    LoadData = () => {
        database = new DataStore("../Vulnerable-youth.db");
        database.loadDatabase(err => {
            if (err) console.log(err)
        });
        database.find({})
            .sort({ fname: 1 })
            .exec((err, docs) => {
                if (err) console.log(err)
                else {
                    this.setState({
                        Vulnerable_youth_Data: docs
                    });
                    this.setState({
                        temp: this.state.Vulnerable_youth_Data
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
                Vulnerable_youth_Data: this.state.temp
            })
        } else if (wor !== 'All' && zon !== 'All') {
            if (this.state.KebeleSearch !== '') {
                result = this.state.temp.filter(item => item.Zone == zon)
                    .filter(item => item.woreda == wor)
                    .filter(item => item.Kebele == keb);
                this.setState({
                    Vulnerable_youth_Data: result
                })
                //alert("Zone and woreda and kebele")
            } else {
                result = this.state.temp.filter(item => item.Zone == zon)
                    .filter(item => item.woreda == wor);
                this.setState({
                    Vulnerable_youth_Data: result
                })
                // alert("zone and woreda only")
            }
        } else if (wor == 'All' && zon == 'All') {
            if (keb !== '') {
                result = this.state.temp.filter(item => item.Kebele == keb);
                this.setState({
                    Vulnerable_youth_Data: result
                })
                // alert("Kebele only")
            }
        } else if (zon !== 'All' && keb !== '') {
            result = this.state.temp.filter(item => item.Zone == zon)
                .filter(item => item.Kebele == keb)
            this.setState({
                Vulnerable_youth_Data: result
            })
            //  alert("Zone and kebele only")
        } else if (wor !== 'All' && keb !== '') {
            result = this.state.temp.filter(item => item.woreda == wor)
                .filter(item => item.Kebele == keb);
            this.setState({
                Vulnerable_youth_Data: result
            })
            // alert("Woreda and Kebele")
        } else if (wor == 'All' && zon !== 'All') {
            result = this.state.temp.filter(item => item.Zone == zon);
            this.setState({
                Vulnerable_youth_Data: result
            })
            // alert("Zone Only")
        } else if (wor !== 'All' || zon == 'All') {
            result = this.state.temp.filter(item => item.woreda == wor);
            this.setState({
                Vulnerable_youth_Data: result
            })
            //alert("Woreda only")
        }
    }
    //delete items
    DeleteItem = (id) => {
        if (window.confirm("እርግጠኛ ንዎት ይጥፋ?")) {
            const items = this.state.Vulnerable_youth_Data.filter(item => item._id !== id)
            this.setState({
                Vulnerable_youth_Data: items
            });
            database.remove({ _id: id }, {}, err => {
                if (err) console.log(err);
            })
        }
    }
    //return the list 
    DataList = () => {
        let counter = 1;
        return this.state.Vulnerable_youth_Data.map((current, index) => {
            return (
                <tr key={index}>
                    <td>{counter++}</td>
                    <td>{current.fname + " " + current.mname + " " + current.lname}</td>
                    <td>{current.Sex}</td>
                    <td>{current.Age}</td>
                    <td>{current.Zone}</td>
                    <td>{current.woreda}</td>
                    <td>{current.Kebele}</td>
                    <td>{current.Income}</td>
                    <td>{current.ExposeRate}</td>
                    <td>{current.checkup}</td>
                    <td>
                        <button className="btn btn-primary" onClick={() => this.handleEditform(current._id, index)} style={{}} ><span className=" glyphicon glyphicon-edit"></span>Edit</button>
                        <button className="btn btn-danger" onClick={() => this.DeleteItem(current._id)} style={{}}> <span className="glyphicon glyphicon-trash"></span>Delete</button>
                    </td>
                </tr>
            )
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
                            <div className="col-sm-4" style={{}}>
                                <div className="form-group">
                                    <label htmlFor="age">ዕድሜ</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={this.state.Age}
                                        onChange={this.onChangeAge}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zone">ዞን</label>
                                    <select className="form-control"
                                        value={this.state.Zone}
                                        onChange={this.onChangeZone}
                                    >
                                        <option>መተከል</option>
                                        <option>አሶሳ</option>
                                        <option>ካማሺ</option>
                                    </select>

                                </div>
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
                            </div>

                            {/* right */}
                            <div className="col-sm-4" style={{}}>
                                <div className="form-group">
                                    <label htmlFor="income">የገቢ ምንጭ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.Income}
                                        onChange={this.onChangeIncome}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tegalache">የተገላጭነት አይነት</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.ExposeRate}
                                        onChange={this.onChangeExposerate}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="checkup">ምርመራ</label>
                                    <input
                                        type="text"
                                        className="form-control" id="checkup"
                                        value={this.state.checkup}
                                        onChange={this.onChangeCheckup}
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
        const items = this.state.Vulnerable_youth_Data.filter(item => item._id == id)
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
                Income: item.Income,
                ExposeRate: item.ExposeRate,
                checkup: item.checkup
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
            Zone: this.state.Zone,
            woreda: this.state.woreda,
            Kebele: this.state.Kebele,
            Income: this.state.Income,
            ExposeRate: this.state.ExposeRate,
            checkup: this.state.checkup
        }
        const { fname, lname, mname, Sex, Age, Zone, woreda, Kebele, Income, ExposeRate, checkup } = updateData;
        if (fname == '' || lname == '' || mname == '' ||
            Sex == '' || Income == '' || ExposeRate == '' ||
            checkup == '') {
            alert("እባክዎ በትክክል ይሙሉ!")
        } else {
            if (Age < 0) {
                alert("ያስገቡት ዕድሜ ከ 0 በታች ነው! ያስተካክሉ!")
            } else {
                //update from local array
                let arr = this.state.Vulnerable_youth_Data;
                arr[globalkey] = updateData;
                this.setState({
                    Vulnerable_youth_Data: arr,
                    temp: arr,
                    isEditing: false
                })
                //update from database
                database.update({ _id: globalId }, { $set: updateData }, (err, res) => {
                    if (err){ console.log(err)}
                    else {alert("Updated!")}
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
                            <caption style={{ fontWeight: "bold", textAlign: "center" }}>ተጋላጭ የሆኑ ወጣቶች</caption>
                            <thead style={{ background: "#fff" }}>
                                <tr>
                                    <th>ተ.ቁ</th>
                                    <th>ሙሉ ስም</th>
                                    <th>ጾታ</th>
                                    <th>እድሜ</th>
                                    <th>ዞን</th>
                                    <th>ወረዳ</th>
                                    <th>ቀበሌ/ቀጠና</th>
                                    <th>የገቢ ምንጭ</th>
                                    <th>የተጋላጭነት አይነት</th>
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
