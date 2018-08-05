import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

// App component - represents the whole app

export default class Hearder extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>APPLICATION / GESTION DE NOTES / ETABLISSEMENT SUPERIEUR </h1>
        </header>
      </div>
    )
  }
}
