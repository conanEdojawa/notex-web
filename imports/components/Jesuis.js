import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'

export default class Jesuis extends Component {
  render() {
    let currentUser = Meteor.user()
    if (currentUser)
      return (
        <div className="jesuis">
          <i className="fa fa-angle-down" /> {currentUser.profile.prenom} {currentUser.profile.nom}
        </div>
      )

    return <div>1111</div>
  }
}
