import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Migrant_Table from './MigrantFroms/Migrant_table';
import Migrant_Form from './MigrantFroms/Migrant_form';

//for routing array object
const routes = [
  {
    path: "/migrants",
    exact: true,
    main: () => <Migrant_Table />
  },
  {
    path: "/migrants/MigrantFroms",
    main: () => <Migrant_Form />
  }
]

class Migrants extends Component {
  render() {
    return (
      <div>
        <Link to="/migrants/MigrantFroms">
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
export default Migrants;
