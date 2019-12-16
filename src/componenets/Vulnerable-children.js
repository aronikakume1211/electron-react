import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import VulnerableChildren_Table from './VulnerableChildrenFroms/VulnerableChildren_table';
import VulnerableChildren_Form from './VulnerableChildrenFroms/VulnerableChildren_form';

//for routing array object
const routes = [
  {
    path: "/Vulnerable-children",
    exact: true,
    main: () => <VulnerableChildren_Table />
  },
  {
    path: "/Vulnerable-children/VulnerableChildrenFroms",
    main: () => <VulnerableChildren_Form />
  }
]

class VulnerableChildren extends Component {
  render() {
    return (
      <div>
        <Link to="/Vulnerable-children/VulnerableChildrenFroms">
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
export default VulnerableChildren;
