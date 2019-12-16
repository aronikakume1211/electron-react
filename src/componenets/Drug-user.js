import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Drug_Table from './DrugForms/drug_table';
import Drug_Form from './DrugForms/drug_forms';

const routes = [
  {
      path: "/Drug-user",
      exact: true,
      main: () => <Drug_Table  />,
      sidebar: () => <div>ቀጥታ ድጋፍ</div>
  },
  {
      path: "/Drug-user/Forms",
      main: () => <Drug_Form />,
      sidebar: () => <div>ከስደት ተመላሽ</div>
  }
]
export default class Hiv_Addis extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

  }
 
  render() {
    return (
     <div>    
          <Link to="/Drug-user/Forms">
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
