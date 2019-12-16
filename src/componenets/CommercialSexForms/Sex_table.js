import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DataStore from 'nedb';
let counter=1;
const List=props=>(
    <tr>
        <td>{counter++}</td>
        <td>{props.data.fname + " " + props.data.mname + " " + props.data.lname}</td>
        <td>{props.data.Sex}</td>
        <td>{props.data.Age}</td>
        {/* <td>{props.data.woreda}</td> */}
        <td>{props.data.birthPlace}</td>
        <td>{props.data.howManyYr}</td>
        <td>{props.data.howManyYrInCity}</td>
        <td>{props.data.workStation}</td>
        <td>{props.data.education}</td>
        <td>{props.data.reason}</td>
        <td>
            <Link to={'/commercial-sex-offenders/edit/'+props.data._id }style={{ marginRight: 4 }}> <span className="glyphicon glyphicon-edit"></span>Edit</Link>
            <Link to={"/commercial-sex-offenders/delete/" + props.data._id} style={{ marginLeft: 4, color: "red" }} ><span className="glyphicon glyphicon-trash"></span>Delete</Link>
        </td>
    </tr>
)
class Sex_Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Sex_Offenders_Data: []
        }
    }
    componentDidMount() {
        const database = new DataStore('../Sex_Data.db');
        database.loadDatabase((err) => {
            if (err) throw err;
        });
        database.find({}, (err, docs) => {
            if (err) throw err;
            else {
                this.setState({
                    Sex_Offenders_Data: docs
                });
            }
        });
    }

    DataList=()=>{
        counter=1;
        return this.state.Sex_Offenders_Data.map((current, index)=>{
            return <List data={current} key={index} />
        })
    }
    render() {
        return (
            <div>
                 <div className="table-responsive" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
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
