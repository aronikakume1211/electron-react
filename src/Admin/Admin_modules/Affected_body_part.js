import React from 'react'
import { Switch, Link, Route } from 'react-router-dom';

import Affected_body_table from '../Components/Affected_body/Affected_body_table';
import Affected_body_form from '../Components/Affected_body/Affected_body_form';

const routes = [
  {
    path: '/affected_body',
    exact: true,
    main: () => <Affected_body_table />
  },
  {
    path: '/affected_body/forms',
    main: () => <Affected_body_form />
  }
]
function Affected_body_part() {
  return (
    <div>
      <Link
        to="/affected_body/forms" >
        <button
          className="btn btn-primary"
          style={{
            borderRadius: "20px"
          }}
        >
          +Add
        </button>
      </Link>
      <div>
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

export default Affected_body_part
