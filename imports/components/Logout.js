import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

export default class Logout extends Component {
  logout = () => {
    Meteor.logout(function() {})
  }
  render() {
    return (
      <div className="logout">
        <i className="fa fa-sign-out" />
        <input type="button" value="Log-out" onClick={this.logout} />
      </div>
    )
  }
}
