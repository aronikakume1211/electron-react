import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DataStore from 'nedb';
let counter=1;
const List=props=>(
    <tr>
        <td>{counter++}</td>
        <td>{props.data.fname + " " + props.data.mname + " " + props.data.lname}</td>
        <td>{props.data.Sex}</td>
        <td>{props.data.region}</td>
        <td>{props.data.Zone}</td>
        <td>{props.data.woreda}</td>
        <td>{props.data.kebele}</td>
        <td>{props.data.Age}</td>
        <td>{props.data.currentStatus}</td>
        <td>{props.data.familyStatus}</td>
        <td>{props.data.education}</td>
        <td>{props.data.educationStatus}</td>
        <td>{props.data.income}</td>
        <td>{props.data.healthStatus}</td>
        <td>
            <Link to={'/Street-Riders/edit/'+props.data._id }style={{ marginRight: 4 }}> <span className="glyphicon glyphicon-edit"></span>Edit</Link>
            <Link to={"/Street-Riders/delete/" + props.data._id} style={{ marginLeft: 4, color: "red" }} ><span className="glyphicon glyphicon-trash"></span>Delete</Link>
        </td>
    </tr>
)
export default class Street_Riders_table extends Component {
    constructor(props){
        super(props);
        this.state={
            Beggar_Data:[]
        }
    }
    componentDidMount(){
        const database =new DataStore('../StreetRider_Data.db');
        database.loadDatabase((err)=>{
            if(err) throw err;
        });
        database.find({}, (err, docs)=>{
            if(err) throw err;
            else{
                this.setState({
                    Beggar_Data:docs
                });
            }
        });
    }
    DataList=()=>{
        counter=1;
        return this.state.Beggar_Data.map((current, index)=>{
            return <List data={current} key={index} />
        });
    }
    render() {
        return (
            <div>
                <div className="table-responsive" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                    <table className="table table-striped table-bordered">
                        <caption style={{ fontWeight: "bold", textAlign: "center" }}>ጎዳና ተዳዳሪዎች</caption>
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
