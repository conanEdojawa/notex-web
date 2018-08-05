import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Demande from '../imports/pages/Demande'
import RelvNotes from '../imports/pages/RelvNotes'
import Profile from '../imports/pages/Profile'
import Login from '../imports/components/Login'
import Resultats from '../imports/pages/Resultats'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/demande" component={Demande} />
          <Route path="/relvNotes" component={RelvNotes} />
          <Route path="/result" component={Resultats} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    )
  }
}
