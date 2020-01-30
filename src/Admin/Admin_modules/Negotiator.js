import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Negotiator_table from '../Components/Negotioator/Negotioator_table';
import Negotiator_form from '../Components/Negotioator/Negotioator_form';

const routes = [
    {
        path: '/judge',
        exact: true,
        main: () => <Negotiator_table />
    },
    {
        path: '/judge/nego_forms',
        main: () => <Negotiator_form />
    }
]
class Negotiator extends Component {
    render() {
        return (
            <div>
                <Link
                    to="/judge/nego_forms" >
                    <button
                        className="btn btn-primary"
                        style={{
                            borderRadius: "20px"
                        }}
                    >
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
                                 children={ <route.main />}
                                />
                            ))
                        }
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Negotiator;
