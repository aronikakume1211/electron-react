import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Datastore from 'nedb';
let counter = 1;
const List = props => (

  <tr>
    <td>{counter++}</td>
    <td>{props.data.fname + " " + props.data.mname + " " + props.data.lname}</td>
    <td>{props.data.Sex}</td>
    <td>{props.data.Age}</td>
    <td>{props.data.akalGudat}</td>
    <td>{props.data.underAss}</td>
    <td>{props.data.accident}</td>
    <td>{props.data.help}</td>
    <td>{props.data.whereHelp}</td>
    <td>{props.data.income}</td>

    <td>
      <Link to={"/akalGudat/edit/" + props.data._id} style={{ marginRight: 4 }}> <span className="glyphicon glyphicon-edit"></span>Edit</Link>
      <Link to={"/akalGudat/delete/" + props.data._id} style={{ marginLeft: 4, color: "red" }} ><span className="glyphicon glyphicon-trash"></span>Delete</Link>
    </td>
  </tr>
);

export default class Hiv_Addis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Akal_Gudat_Data: []
    }
  }
  componentDidMount() {
    const database = new Datastore("../Akal_Gudat_Data.db");
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
          Akal_Gudat_Data: docs
        });
        console.log(this.state.Akal_Gudat_Data);

      }
    })
  }

  //return the list 
  DataList = () => {
    counter = 1;
    return this.state.Akal_Gudat_Data.map((current, index, counter) => {
      return <List data={current} key={index} counter={counter} />
    })
  }
  render() {
    return (
      <div>
        <div className="table-responsive" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
          <table className="table table-striped table-bordered">
            <caption style={{ fontWeight: "bold", textAlign: "center" }}>የአካል ጉዳተኞች የመገኛ ሁኔታ የመረጃ መሰብሰቢያ ቅፅ</caption>
            <thead>
              <tr>
                <th rowSpan="2">ተ.ቁ</th>
                <th rowSpan="2">ሙሉ ስም</th>
                <th rowSpan="2">ጾታ</th>
                <th rowSpan="2">እድሜ</th>
                <th colSpan="2">የአካል ጉዳት ሁኔታ</th>
                <th rowSpan="2">የጉዳት መንሰኤ</th>
                <th rowSpan="2">ያገኙት ድጋፍ ካለ</th>
                <th rowSpan="2">ድጋፉን ከማን አገኙ</th>
                <th rowSpan="2">የወር ገቢ</th>
                <th rowSpan="2">Action</th>
              </tr>
              <tr>
                <th >አካል ጉዳት</th>
                <th >ከወገብ በታች</th>
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
