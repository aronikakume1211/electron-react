import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Hiv_Table from './Forms/hiv_table';
import Hiv_Form from './Forms/hiv_forms';

const routes = [
  {
      path: "/hiv-adis-positive",
      exact: true,
      main: () => <Hiv_Table  />,
      sidebar: () => <div>ቀጥታ ድጋፍ</div>
  },
  {
      path: "/hiv-adis-positive/Forms",
      main: () => <Hiv_Form />,
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
          <Link to="/hiv-adis-positive/Forms">
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
