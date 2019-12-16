import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import StreetRider_Table from './StreetRidersForms/StreetRider_table';
import StreetRider_Form from './StreetRidersForms/StreetRider_form';

//for routing array object
const routes = [
  {
    path: "/Street-Riders",
    exact: true,
    main: () => <StreetRider_Table />
  },
  {
    path: "/Street-Riders/StreetRidersForms",
    main: () => <StreetRider_Form />
  }
]

class Street_Riders extends Component {
  render() {
    return (
      <div>
        <Link to="/Street-Riders/StreetRidersForms">
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
export default Street_Riders;
