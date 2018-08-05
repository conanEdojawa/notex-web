import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, Redirect } from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apogee: '',
      cne: '',
      errMsg: ''
    }
  }
  signUp = () => {
    let { apogee, cne } = this.state
    this.setState({ errMsg: '' })
    let self = this // pour ne pas confondre avec this de la fonct li lta7t
    if (apogee && cne)
      Meteor.loginWithPassword(apogee, cne, function(error) {
        if (error) {
          self.setState({
            errMsg: "Numéro d'apogée ou cne incorrect"
          })
          return false
        } else {
          self.props.history.push('/profile')
          let userId = Meteor.userId()
          export let data = Meteor.users.findOne({ _id: userId })
          console.log(data.username)
        }
      })
  }
  onUserChange(e) {}
  render() {
    let { errMsg, apogee, cne } = this.state
    return (
      <div className="containerLogo">
        <h1>Login</h1>
        <div className="inputWithIcon">
          <input
            className="apogee"
            type="text"
            placeholder="APOGEE"
            onChange={e => this.setState({ apogee: e.target.value })}
            value={apogee}
          />
          <i className="fa fa-user fa-lg fa-fw" />
        </div>
        <div className="inputWithIcon">
          <input
            type="password"
            placeholder="CNE"
            className="cne"
            onChange={event => this.setState({ cne: event.target.value })}
            value={cne}
          />
          <i className="fa fa-lock fa-lg fa-fw" />
        </div>
        {errMsg && (
          <div className="errMsg">
            <i className="fa fa-exclamation-triangle" />
            {errMsg}
          </div>
        )}
        <button className="loglog" onClick={() => this.signUp()}>
          <span>login </span>
        </button>
      </div>
    )
  }
}
