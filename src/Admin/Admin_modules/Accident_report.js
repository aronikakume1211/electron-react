import React from 'react'
import AccidentReportTable from '../Components/Accident_report/Accident_report_table'
import AccidentReportRorm from '../Components/Accident_report/Accident_report_form'
import { Switch, Route, Link } from 'react-router-dom'
const routes = [
  {
    path: '/accident_report',
    exact: true,
    main: () => <AccidentReportTable />
  },
  {
    path: '/accident_report/report_form',
    main: () => <AccidentReportRorm />
  }
]
function Accident_report() {
  return (
    <div>
      <Link
        to="/accident_report/report_form" >
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

export default Accident_report

