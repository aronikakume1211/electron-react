import logo from './logo.svg';
import './App.css';
import Db from './db';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Datastore from 'nedb';
import React, { Component } from 'react';
import SideBar from './Route/sidebar-router';
import Login from './Route/Login'
import Admin from './Admin/Adminpage'
import NavBar from './NavBar';
const List = props => (
  <tr>
    <td>{props.data.name}</td>
    <td>{props.data.sex}</td>
    <td><button onClick={clickHandler(props.data._id)}>Edit</button></td>
  </tr>
);
const clickHandler = (id) => {
  console.log(id);

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: []
    }

  }
  componentDidMount() {
    const d = 89;
    const database = new Datastore("../Hiv_Adis_data.db");
    database.loadDatabase((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Database created sucessfuly");

      }
    });



    database.find({}, (err, docs) => {
      if (err) throw err;
      else {
        console.log(docs);
        // this.state.Data=docs;
        //console.log("Doc"+this.state.Data);

        this.insertData(docs);

      }
    })
  }
  insertData = (props) => {
    console.log(props);
    this.setState({
      Data: props
    })
    console.log(this.state.Data);

    //console.log(props);

  }

  TabelList = () => {
    return this.state.Data.map((current, i) => {
      return <List data={current} key={i} />
    })
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route  path="/home/Home" component={SideBar} />
            <Route  path="/user" component={Admin} />
          </Switch>
        </div>
      </Router>
      // <div>
      //   {/* <SideBar /> */}
      //   <Login />
      // </div>
    )
  }
}

export default App;

