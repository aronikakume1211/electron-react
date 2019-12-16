import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mental_Table from './MentalForms/mental_table';
import Mental_Form from './MentalForms/mental_forms';

const routes = [
  {
      path: "/mental-disorder",
      exact: true,
      main: () => <Mental_Table  />,
      sidebar: () => <div>ቀጥታ ድጋፍ</div>
  },
  {
      path: "/mental-disorder/Forms",
      main: () => <Mental_Form />,
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
          <Link to="/mental-disorder/Forms">
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
