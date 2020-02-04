import React from 'react'
import Employee_age_gap_table from '../Components/Employee_age_gap/employ_age_table';
import Employee_age_gap_form from '../Components/Employee_age_gap/employ_age_form';
import { Switch,Link, Route } from 'react-router-dom';

const routes=[
  {
    path:'/employee_age_gap',
    exact:true,
    main:()=> <Employee_age_gap_table/>
  },
  {
    path:'/affected_body/forms',
    main:()=> <Employee_age_gap_form />
  }
]
function Employee_age_region() {
  return (
    <div>
      <Link
      to="/affected_body/forms" >
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
            routes.map((route, index)=>(
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

export default Employee_age_region;
