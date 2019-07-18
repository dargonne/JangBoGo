import * as React from 'react'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom' 


import Header from 'components/header/Header'; 
import UserMenu from 'containers/usermenu/UserMenu'; 

import Landing from 'views/Landing'; 

import './Root.scss'; 

const Root = () => {
  return (
    <Router>
      <div className="root-container">
        <div className="wrapper-header">
          <Header />
        </div>
        <Switch>
          <Route path="/" exact component={Landing} /> 
        </Switch>
      </div>
      <div className="wrapper-usermenu">
        <UserMenu />
      </div>
    </Router>
  )
}

export default Root 