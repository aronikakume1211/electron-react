import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Home_Table from './HomeForms/Home_table';
import Home_Form from './HomeForms/Home_form';

//for routing array object
const routes = [
  {
    path: "/home/Home",
    exact: true,
    main: () => <Home_Table />
  },
  {
    path: "/forms",
    exact: true,
    main: () => <Home_Form />
  }
]
class Home extends Component {
  render() {
    return (
      <div>
        <Link
          to="/forms">
          <button
            type="button"
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
export default Home;