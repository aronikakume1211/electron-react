import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Beggar_Table from './TheBeggareForms/beggar_table';
import Beggar_Form from './TheBeggareForms/beggar_form';

//for routing array object
const routes = [
  {
    path: "/The-beggers",
    exact: true,
    main: () => <Beggar_Table />
  },
  {
    path: "/The-beggers/TheBeggareFroms",
    main: () => <Beggar_Form />
  }
]

class The_beggar extends Component {
  render() {
    return (
      <div>
        <Link to="/The-beggers/TheBeggareFroms">
          <button
            type="button"
            className="btn btn-primary"
            style={{
              borderRadius: "20px"
            }}>
            +Add
           </button>
        </Link>
        <div >

          <Switch>
            {
              routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))
            }
          </Switch>
        </div>
      </div>
    )
  }
}
export default The_beggar;
