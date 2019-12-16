import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Elder_Table from './EldersForms/elder_table';
import Elder_Form from './EldersForms/elder_form';

const routes = [
  {
      path: "/elders",
      exact: true,
      main: () => <Elder_Table  />,
      sidebar: () => <div>ቀጥታ ድጋፍ</div>
  },
  {
      path: "/elders/Forms",
      main: () => <Elder_Form />,
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
          <Link to="/elders/Forms">
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
