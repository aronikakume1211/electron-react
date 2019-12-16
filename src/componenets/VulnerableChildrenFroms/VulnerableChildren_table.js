import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataStore from 'nedb';
let counter = 1;
const List = props => (
    <tr>
        <td>{counter++}</td>
        <td>{props.data.fname + " " + props.data.mname + " " + props.data.lname}</td>
        <td>{props.data.Sex}</td>
        <td>{props.data.Age}</td>
        <td>{props.data.woreda}</td>
        <td>{props.data.kebele}</td>
        <td>{props.data.village}</td>
        <td>{props.data.familyStatus}</td>
        <td>{props.data.helper}</td>
        <td>{props.data.educationStatus}</td>
        <td>{props.data.no_Children}</td>
        <td>{props.data.checkup}</td>
        <td>
            <Link to={'/Vulnerable-children/edit/' + props.data._id} style={{ marginRight: 4 }}> <span className="glyphicon glyphicon-edit"></span>Edit</Link>
            <Link to={"/Vulnerable-children/delete/" + props.data._id} style={{ marginLeft: 4, color: "red" }} ><span className="glyphicon glyphicon-trash"></span>Delete</Link>
        </td>
    </tr>
)
export default class beggar_table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Beggar_Data: []
        }
    }
    componentDidMount() {
        const database = new DataStore('../Vulnerable_children_Data.db');
        database.loadDatabase((err) => {
            if (err) throw err;
        });
        database.find({}, (err, docs) => {
            if (err) throw err;
            else {
                this.setState({
                    Beggar_Data: docs
                });
            }
        });
    }
    DataList = () => {
        counter = 1;
        return this.state.Beggar_Data.map((current, index) => {
            return <List data={current} key={index} />
        });
    }
    render() {
        return (
            <div>
                <div className="table-responsive" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
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
