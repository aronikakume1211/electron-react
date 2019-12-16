import React from 'react';
import { Link } from 'react-router-dom';
import Datastore from 'nedb';
let counter = 1;
const List = props => (

    <tr>
        <td>{counter++}</td>
        <td>{props.data.fname + " " + props.data.mname + " " + props.data.lname}</td>
        <td>{props.data.Sex}</td>
        <td>{props.data.Age}</td>
        <td>{props.data.education}</td>
        <td>{props.data.servival}</td>
        <td>{props.data.familyTuwari}</td>
        <td>{props.data.familyGrowing}</td>
        <td>{props.data.helpType}</td>
        <td>{props.data.income}</td>

        <td>
            <Link to={"/elders/edit/" + props.data._id} style={{ marginRight: 4 }}> <span className="glyphicon glyphicon-edit"></span>Edit</Link>
            <Link to={"/elders/delete/" + props.data._id} style={{ marginLeft: 4, color: "red" }} ><span className="glyphicon glyphicon-trash"></span>Delete</Link>
        </td>
    </tr>
);

export default class Mental_table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Elders_Data: []
        }
    }
    componentDidMount() {
        const database = new Datastore("../Elders_Data.db");
        database.loadDatabase((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Database Created!");

            }
        });
        database.find({}, (err, docs) => {
            if (err) {
                console.log(err);
            } else {
                this.setState({
                    Elders_Data: docs
                });
               

            }
        })
    }

    //return the list 
    DataList = () => {
        counter = 1;
        return this.state.Elders_Data.map((current, index, counter) => {
            return <List data={current} key={index} counter={counter} />
        })
    }
    render() {
        return (
            <div>
                <div className="table-responsive" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
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
