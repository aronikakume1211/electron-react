import React from 'react'
import Accident_type_table from '../Components/Accident_type/Accident_type_table';
import Accident_type_form from '../Components/Accident_type/Accident_type_form';
import { Switch,Link, Route } from 'react-router-dom';

const routes=[
  {
    path:'/accident_type',
    exact:true,
    main:()=> <Accident_type_table />
  },
  {
    path:'/accident_type/form',
    main:()=> <Accident_type_form />
  }
]
function Accident_Type() {
  return (
    <div>
      <Link
      to="/accident_type/form" >
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

export default Accident_Type
