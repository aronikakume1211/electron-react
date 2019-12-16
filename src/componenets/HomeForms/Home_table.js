import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Datastore from 'nedb';
let counter = 1;
const List = props => (
  
    <tr>
        <td>{counter++}</td>
        <td>{props.data.fname + " " + props.data.mname + " " + props.data.lname}</td>
        <td>{props.data.Age}</td>
        <td>{props.data.Sex}</td>
        <td>{props.data.familyMale}</td>
        <td>{props.data.familyfemale}</td>
        <td>{props.data.familyMale+ props.data.familyfemale}</td>
        <td>{props.data.noOfWorker}</td>
        <td>{props.data.notWorkIncaseHealth}</td>
        <td>{props.data.helpLess}</td>
        <td>{props.data.income}</td>
        <td>{props.data.housing}</td>
        <td>{props.data.village}</td>
        <td>{props.data.userType}</td>
        <td>{props.data.spcificVilgName}</td>
        <td>{props.data.phone}</td>
        <td>{props.data.noOfUser}</td>
        <td>{props.data.level}</td>
        <td>
            <Link to={"/edit/" + props.data._id} style={{ marginRight: 4 }}> <span className="glyphicon glyphicon-edit"></span>Edit</Link>
            <Link to={"/delete/" + props.data._id} style={{ marginLeft: 4, color: "red" }} ><span className="glyphicon glyphicon-trash"></span>Delete</Link>
        </td>
        
    </tr>
);
export class Home_table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Home_Data: []
        }
    }
    componentDidMount() {
        const database = new Datastore('../Home_Data.db');
        database.loadDatabase((err) => {
            if (err) {
                throw err;
            } else {
                console.log("Database created");
            }
        });
        database.find({}, (err, docs) => {
            if (err) throw err;
            else {
                this.setState({
                    Home_Data: docs
                });
            }
        })
    }
    DataList = () => {
        counter = 1;
        return this.state.Home_Data.map((current, index) => {
            return <List data={current} key={index} />
        })
    }
    render() {
        return (
            <div>
                <div
                    className="table-responsive"
                    style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }}>
                    <table className="table table-striped table-bordered">
                        <caption
                            style={{
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>ቀጥታ ድጋፍ የቤተሰብ ሁኔታ </caption>
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
                                <th rowSpan="2">ጎጥ</th>
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
