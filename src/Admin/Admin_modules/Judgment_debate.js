import React from 'react'
import { Switch,Link, Route } from 'react-router-dom';
import Judgment_dbt_table from '../Components/Judgment_debat/judgment_dbt_table';
import Judgment_dbt_form from '../Components/Judgment_debat/judgment_dbt_form';

const routes=[
  {
    path:'/user',
    exact:true,
    main:()=> <Judgment_dbt_table />
  },
  {
    path:'/user/form',
    main:()=> <Judgment_dbt_form />
  }
]
function Judgment_debate() {
  return (
    <div>
      <Link
      to="/user/form" >
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


export default Judgment_debate;
