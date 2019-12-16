import React, { Component } from 'react';
import {Switch, Route , Link} from 'react-router-dom';
import Sex_Table from './CommercialSexForms/Sex_table';
import Sex_Form from './CommercialSexForms/sex_forms';

const routes=[
  {
    path:"/commercial-sex-offenders",
    exact:true,
    main:()=><Sex_Table />
  },
  {
    path:"/commercial-sex-offenders/CommercialSexForms",
    main:()=><Sex_Form />
  }
]

class SexOffenders extends Component {
  render() {
    return (
      <div>
        <Link to="/commercial-sex-offenders/CommercialSexForms">
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
    );
  }
}

export default SexOffenders;
