import React from 'react'
import Cause_Accident_table from '../Components/Cause_Accident/Cause_accident_table';
import Cause_Accident_form from '../Components/Cause_Accident/Cause_accident_form';
import { Switch,Link, Route } from 'react-router-dom';

const routes=[
  {
    path:'/cause_accident',
    exact:true,
    main:()=> <Cause_Accident_table />
  },
  {
    path:'/affected_body/forms',
    main:()=> <Cause_Accident_form />
  }
]
function Cause_Accident() {
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


export default Cause_Accident;
