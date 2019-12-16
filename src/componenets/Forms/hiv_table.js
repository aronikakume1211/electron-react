import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Datastore from 'nedb';
let counter=1;
const List = props => (

  <tr>
    <td>{counter++}</td>
    <td>{props.data.fname + " " + props.data.mname + " " + props.data.lname}</td>
    <td>{props.data.Sex}</td>
    <td>{props.data.Age}</td>
    <td>{props.data.Zone}</td>
    <td>{props.data.woreda}</td>
    <td>{props.data.Kebele}</td>
    <td>{props.data.Income}</td>
    <td>{props.data.ExposeRate}</td>
    <td>{props.data.checkup}</td>

    <td>
      <Link to={"/hiv-adis-positive/edit/" + props.data._id} style={{ marginRight: 4 }}> <span className="glyphicon glyphicon-edit"></span>Edit</Link>
      <Link  to={"/hiv-adis-positive/delete/"+ props.data._id}  style={{ marginLeft: 4, color:"red" }} ><span className="glyphicon glyphicon-trash"></span>Delete</Link>
    </td>
  </tr>
);

export default class Hiv_Addis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Hiv_Adis_Data: []
    }
  }
  componentDidMount() {
    const database = new Datastore("../Hiv_Adis_data.db");
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
          Hiv_Adis_Data: docs
        });
        console.log(this.state.Hiv_Adis_Data);

      }
    })
  }

  //return the list 
  DataList = () => {
    counter=1;
    return this.state.Hiv_Adis_Data.map((current, index, counter) => {
      return <List data={current} key={index} counter={counter} />
    })
  }
  render() {
    return (
      <div>
        <div className="table-responsive" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
          <table className="table table-striped table-bordered">
            <caption style={{ fontWeight: "bold", textAlign: "center" }}>HIV/AIDS በደማቻው ያሉ ወገኖች የመረጃ መሰብሰቢያ ቅፅ</caption>
            <thead>
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
