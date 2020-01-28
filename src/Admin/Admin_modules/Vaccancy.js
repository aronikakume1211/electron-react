import React from 'react'
import Vaccancy_table from '../Components/Vaccancy/Vaccancy_table';
import Vaccancy_form from '../Components/Vaccancy/Vaccancy_form';
import { Switch,Link, Route } from 'react-router-dom';

const routes=[
  {
    path:'/vaccancy',
    exact:true,
    main:()=> <Vaccancy_table />
  },
  {
    path:'/vaccancy/form',
    main:()=> <Vaccancy_form />
  }
]
function Vaccancy() {
  return (
    <div>
      <Link
      to="/vaccancy/form" >
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
export default Vaccancy;
