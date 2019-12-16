import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AkalGudat_table from './AkalGudatForms/AkalGudat_table';
import AkalGudat_Form from "./AkalGudatForms/AkalGudat_form";

import Hiv_Table from './Forms/hiv_table';
import Hiv_Form from './Forms/hiv_forms';

const routes = [
  {
      path: "/akalGudat",
      exact: true,
      main: () => <AkalGudat_table />,
      sidebar: () => <div>ቀጥታ ድጋፍ</div>
  },
  {
      path: "/akalGudat/AkalGudatForms",
      main: () => <AkalGudat_Form />,
      sidebar: () => <div>ከስደት ተመላሽ</div>
  }
]
export default class AkalGudat extends React.Component {
  render() {
    return (
      <div>    
      <Link to="/akalGudat/AkalGudatForms">
        <button
          type="button"
          className="btn btn-primary"
          style={{
            borderRadius: "20px"
          }}
          //onClick={this.OnclickingEent}
          
        >
          + Add
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
