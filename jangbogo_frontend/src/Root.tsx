import * as React from 'react'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom' 


import Header from 'components/header/Header'; 
import UserMenu from 'containers/usermenu/UserMenu'; 
import Login from 'views/Login'; 
import Signup from 'views/Signup'; 
import OAuth from 'views/OAuth'; 
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
          <Route path="/login" component={Login} /> 
          <Route path="/signup" component={Signup} /> 
          <Route path="/oauth" component={OAuth} /> 
        </Switch>
      </div>
      <div className="wrapper-usermenu">
        <UserMenu />
      </div>
    </Router>
  )
}

export default Root 