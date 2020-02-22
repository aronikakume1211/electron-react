import React, { Component } from 'react';
import Datastore from 'nedb';
let database, globalId, globalkey;

export default class Mental_table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Drug_user_Data: [],
            temp: '',
            isEditing: false,
            search: '',
            fname: '',
            lname: '',
            mname: '',
            Sex: 'ወንድ',
            Age: '',
            Zone: 'መተከል',
            woreda: '',
            Kebele: '',
            Income: '',
            ExposeRate: '',
            checkup: ''
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
    onChangeLimit = (e) => {
        if (e.target.value == 'all') {
            this.showAll()
        } else {
            this.LoadData(parseInt(e.target.value, 10))
        }
    }
    LoadData = (limit) => {
        database = new Datastore("../Drug-user_data.db");
        database.loadDatabase((err) => {
            if (err) {
                console.log(err);
            }
        });
        database.find({})
            .sort({ fname: 1 })
            .limit(limit)
            .exec((err, docs) => {
                if (err) {
                    console.log(err);
                } else {
                    this.setState({
                        Drug_user_Data: docs
                    });
                    this.setState({
                        temp: this.state.Drug_user_Data
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
                        Drug_user_Data: docs
                    });
                    this.setState({
                        temp: this.state.Drug_user_Data
                    })
                }
            })
    }
    componentDidMount() {
        this.LoadData(10);
    }
    //search items
    SearchResult = () => {
        if (this.state.search == '') {
            this.setState({
                Drug_user_Data: this.state.temp
            })
        } else {
            let result = this.state.Drug_user_Data.filter(item => item.fname == this.state.search)
            if (result.length > 0) {
                this.setState({
                    Drug_user_Data: result
                })
            } else {
                alert("Not Found")
            }
        }
    }
    //delete items
    DeleteItem = (id) => {
        if (window.confirm("እርግጠኛ ንዎት ይጥፋ?")) {
            const items = this.state.Drug_user_Data.filter(item => item._id !== id)
            this.setState({
                Drug_user_Data: items
            })
            database.remove({ _id: id }, {}, err => {
                if (err) console.log(err);
            })
        }
    }
    //return the list 
    DataList = () => {
        let counter = 1;
        return this.state.Drug_user_Data.map((current, index) => {
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
                            <span className="glyphicon glyphicon-save"></span> update
                   </button>
                    </form>


                </div>
            )
        }
    }
    handleEditform = (id, key) => {
        globalId = id;
        globalkey = key;
        const items = this.state.Drug_user_Data.filter(item => item._id == id)
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
            })
        })
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
        if (this.state.fname == '' || this.state.lname == '' ||
            this.state.mname == '' || this.state.Age == '' ||
            this.state.woreda == '' || this.state.Kebele == '' ||
            this.state.Sex == '' || this.state.Zone == '' ||
            this.state.Income == '' || this.state.ExposeRate == '' ||
            this.state.checkup == '') {
            alert("እባክዎ በትክክል ይሙሉ!")
        } else {
            if (this.state.Age < 0) {
                alert("ያስገቡት ዕድሜ ከ 0 በታች ነው! ያስተካክሉ!")
            } else {
                //update from local arrray
                let arr = this.state.Drug_user_Data;
                arr[globalkey] = updateData;
                this.setState({
                    Drug_user_Data: arr,
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
                            <caption style={{ fontWeight: "bold", textAlign: "center" }}>አደንዛዥ ዕፅ ተጠቃሚ</caption>
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
