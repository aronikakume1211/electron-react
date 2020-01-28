import React from 'react'
import Register_Vaccancy_table from '../Components/Registerd_vaccancy/registerd_vacc_table';
import Register_Vaccancy_form from '../Components/Registerd_vaccancy/registerd_vacc_form';
import { Switch,Link, Route } from 'react-router-dom';

const routes=[
  {
    path:'/registerd_vaccancy',
    exact:true,
    main:()=> <Register_Vaccancy_table />
  },
  {
    path:'/registerd_vaccancy/form',
    main:()=> <Register_Vaccancy_form />
  }
]
function Registerd_Vaccancy() {
  return (
    <div>
      <Link
      to="/registerd_vaccancy/form" >
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
export default Registerd_Vaccancy;
