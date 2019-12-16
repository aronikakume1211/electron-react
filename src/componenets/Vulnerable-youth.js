import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import VulenrableYouth_Table from './VulenrableYouthForms/VulenrableYouth_table';
import VulenrableYouth_Form from './VulenrableYouthForms/VulenrableYouth_forms';

const routes = [
  {
      path: "/Vulnerable-youth",
      exact: true,
      main: () => <VulenrableYouth_Table  />,
      sidebar: () => <div>ቀጥታ ድጋፍ</div>
  },
  {
      path: "/Vulnerable-youth/Forms",
      main: () => <VulenrableYouth_Form />,
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
          <Link to="/Vulnerable-youth/Forms">
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
