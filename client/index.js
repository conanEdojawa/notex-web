import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Route, Link, Switch } from 'react-router-dom'

import Header from '../imports/components/Header'
import Menu from '../imports/components/Menu'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {Meteor.user() != null ? (
          <span>
            <Menu />
          </span>
        ) : (
          <p />
        )}
        <Main />
      </div>
    )
  }
}

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('afficheApp')
  )
})
