import React from 'react'
import Employee_emplr_table from '../Components/Employ_Emplr_dbt/empl_emplr_table';
import Employee_emplr_form from '../Components/Employ_Emplr_dbt/empl_emplr_form';
import { Switch, Link, Route } from 'react-router-dom';

const routes = [
  {
    path: '/employee_emplr',
    exact: true,
    main: () => <Employee_emplr_table />
  },
  {
    path: '/employee_emplr/form',
    main: () => <Employee_emplr_form />
  }
]
function Employee_Emplr_dbate() {
  return (
    <div>
      <Link
        to="/employee_emplr/form" >
        <button
          className="btn btn-primary"
          style={{
            borderRadius: "20px"
          }}>
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


export default Employee_Emplr_dbate;
