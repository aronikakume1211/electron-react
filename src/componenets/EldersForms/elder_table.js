import React, { Component } from 'react';
import DataStore from 'nedb';
import WoredList from '../Forms/woredaList'
let database, globalId, globalkey, wor;

export default class Mental_table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Elders_Data: [],
            temp: '',
            tempWoreda: [],
            isEditing: false,
            woredaSearch: 'ቡለን',
            kebeleSearch: '',
            villageSearch: '',
            fname: '',
            lname: '',
            mname: '',
            Sex: '',
            Age: '',
            woreda: '',
            kebele: '',
            village: '',
            education: '',
            servival: '',
            familyTuwari: 'አለ',
            familyGrowing: 'የለም',
            helpType: 'ገንዘብ',
            income: '',
        }
    }
    onChangeworedaSearch = (e) => {
        this.setState({
            woredaSearch: e.target.value
        });
    }
    onChangeKebeleSearch = (e) => {
        this.setState({
            kebeleSearch: e.target.value
        })
    }
    onChangeVillageSearch = (e) => {
        this.setState({
            villageSearch: e.target.value
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
    onChangeVillage = (e) => {
        this.setState({
            village: e.target.value,
        });
    }
    onChangeFamilyTuwari = (e) => {
        this.setState({
            familyTuwari: e.target.value,
        });
    }
    onChangeFamilyGrowing = (e) => {
        this.setState({
            familyGrowing: e.target.value,
        });


    }
    onChangeEducation = (e) => {
        this.setState({
            education: e.target.value,
        });
    }
    onChangeServival = (e) => {
        this.setState({
            servival: e.target.value,
        });
    }
    onChangeHelpType = (e) => {
        this.setState({
            helpType: e.target.value,
        });
    }
    onChangeIncome = (e) => {
        this.setState({
            income: e.target.value,
        });
    }
    onChangeLimit = (e) => {
        if (e.target.value == 'all') {
            this.showAll()
        }
    }
    onChangeSelectWoreda = (e) => {
        console.log(e.target.value);
        wor = e.target.value;
        if (e.target.value == 'All') {
            this.setState({
                Elders_Data: this.state.temp
            })
        }
    }
    LoadData = (limit) => {
        database = new DataStore('../Elders_Data.db');
        database.loadDatabase((err) => {
            if (err) {
                console.log(err);
            }
        });
        database.find({})
            .sort({ fname: 1 })
            .exec((err, docs) => {
                if (err) {
                    console.log(err);
                } else {
                    this.setState({
                        Elders_Data: docs
                    });
                    this.setState({
                        temp: this.state.Elders_Data
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
                        Elders_Data: docs
                    });
                    this.setState({
                        temp: this.state.Elders_Data
                    })
                }
            })
    }

    componentDidMount() {
        this.LoadData()
    }
    //search items
    SearchResult = () => {

        if (this.state.kebeleSearch == '' || this.state.villageSearch == '') {
            this.setState({
                Elders_Data: this.state.temp,
                kebeleSearch: '',
                villageSearch: ''
            })
        } else {
            let result = this.state.temp.filter(item => item.woreda == wor)
                .filter(item => item.kebele == this.state.kebeleSearch)
                .filter(item => item.village == this.state.villageSearch)
            if (result.length > 0) {
                this.setState({
                    Elders_Data: result,
                    kebeleSearch: '',
                    villageSearch: ''
                })

                console.log(this.state.Elders_Data);
                console.log(result);

            } else {
                alert("Not Found")
            }
        }
    }
    //delete items
    DeleteItem = (id) => {
        if (window.confirm("እርግጠኛ ንዎት ይጥፋ?")) {
            const items = this.state.Elders_Data.filter(item => item._id !== id)
            this.setState({
                Elders_Data: items
            });
            database.remove({ _id: id }, {}, err => {
                if (err) console.log(err);
            })
        }
    }
    //return the list 
    DataList = () => {
        let counter = 1;
        return this.state.Elders_Data.map((current, index) => {
            return (
                <tr key={index}>
                    <td>{counter++}</td>
                    <td>{current.fname + " " + current.mname + " " + current.lname}</td>
                    <td>{current.Sex}</td>
                    <td>{current.Age}</td>
                    <td>{current.education}</td>
                    <td>{current.servival}</td>
                    <td>{current.familyTuwari}</td>
                    <td>{current.familyGrowing}</td>
                    <td>{current.helpType}</td>
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
                                    <label htmlFor="lname">መተዳደሪያ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.servival}
                                        onChange={this.onChangeServival}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="akal">የቤተሰብ ሁኔታ</label>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="sex">ጧሪ</label>
                                            <select className="form-control"
                                                value={this.state.familyTuwari}
                                                onChange={this.onChangeFamilyTuwari}
                                            >
                                                <option>አለ</option>
                                                <option>የለም</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="age">የሚያሳድጓቸው ህፅናት</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.familyGrowing}
                                                onChange={this.onChangeFamilyGrowing}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="sex">የሚያስፈልጋቸው የድጋፍ ዓይነት</label>
                                            <select className="form-control"
                                                value={this.state.helpType}
                                                onChange={this.onChangeHelpType}
                                            >
                                                <option>ገንዘብ</option>
                                                <option>የቁሳቁስ</option>
                                                <option>የአልባሳት</option>
                                                <option>የመጠለያ</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="age">የወር ገቢ</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.income}
                                                onChange={this.onChangeIncome}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="income">የት/ት ደረጃ</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.education}
                                            onChange={this.onChangeEducation} />
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
    handleEditform = (id, key) => {
        globalId = id;
        globalkey = key;
        const items = this.state.Elders_Data.filter(item => item._id == id)
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
                servival: item.servival,
                familyTuwari: item.familyTuwari,
                familyGrowing: item.familyGrowing,
                education: item.education,
                helpType: item.helpType,
                income: item.income,
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
            kebele: this.state.kebele,
            village: this.state.village,
            servival: this.state.servival,
            familyTuwari: this.state.familyTuwari,
            familyGrowing: this.state.familyGrowing,
            education: this.state.education,
            helpType: this.state.helpType,
            income: this.state.income,
        }
        if (this.state.fname == '' || this.state.lname == '' ||
            this.state.mname == '' || this.state.Age == '' ||
            this.state.woreda == '' || this.state.Kebele == '' ||
            this.state.village == '' || this.state.servival == '' ||
            this.state.education == '' ||
            this.state.income == '') {
            alert("እባክዎ በትክክል ይሙሉ!")
        } else {
            if (this.state.Age < 0 || this.state.income < 0) {
                alert("ያስገቡት ዕድሜ ከ 0 በታች ነው! ያስተካክሉ!")
            } else {
                //update from local array
                let arr = this.state.Elders_Data;
                arr[globalkey] = updateData;
                this.setState({
                    Elders_Data: arr,
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
                                    <WoredList onChangeSelectWoreda={this.onChangeSelectWoreda} />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.kebeleSearch}
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
                                                value={this.state.villageSearch}
                                                placeholder="ሰፈር ..."
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
                                    <div className="col-sm-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-bordered">
                            <caption style={{ fontWeight: "bold", textAlign: "center" }}>አረጋዊያን የመገኛ ሁኔታ</caption>
                            <thead style={{ background: "#fff" }}>
                                <tr>
                                    <th rowSpan="2">ተ.ቁ</th>
                                    <th rowSpan="2">ሙሉ ስም</th>
                                    <th rowSpan="2">ጾታ</th>
                                    <th rowSpan="2">እድሜ</th>
                                    <th rowSpan="2">የት/ት ደረጃ</th>
                                    <th rowSpan="2">መተዳደሪያ</th>
                                    <th colSpan="2">የቤተሰብ ሁኔታ</th>
                                    <th rowSpan="2">የሚያስፈልጋቸው ድጋፍ አይነት</th>
                                    <th rowSpan="2">የወር ገቢ</th>
                                    <th rowSpan="2">Action</th>
                                </tr>
                                <tr>
                                    <th>ጧሪ</th>
                                    <th>የሚያሳድጓቸው ህፃናት</th>
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
