import React, { Component } from 'react'
// import { withHistory, Link } from 'react-router-dom'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: ''
    }
  }
  componentWillMount() {
    let currentUser = Meteor.user()
    if (currentUser) {
      this.setState({ firstname: currentUser.profile.prenom, lastname: currentUser.profile.nom })
    }
  }
  render() {
    return (
      <div className="profile">
        <br />

        <table className="tabProfile">
          <tbody>
            <tr>
              <th>Nom :</th>
              <td>{this.state.lastname}</td>
            </tr>
            <tr>
              <th>Prénom :</th>
              <td>{this.state.firstname}</td>
            </tr>
            <tr>
              <th>N°Apogee :</th>
              <td />
            </tr>
            <tr>
              <th>CNE :</th>
              <td />
            </tr>
            <tr>
              <th>CIN :</th>
              <td />
            </tr>
            <tr>
              <th>Date de naissance :</th>
              <td />
            </tr>
            <tr>
              <th>Lieu de naissance :</th>
              <td />
            </tr>
            <tr>
              <th>Nationlité :</th>
              <td />
            </tr>
            <tr>
              <th>Email :</th>
              <td />
            </tr>
            <tr>
              <th>Filiere :</th>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
