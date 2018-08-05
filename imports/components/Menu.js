import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Logout from './Logout'
import Jesuis from './Jesuis'
export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <nav>
        <ul id="navbar">
          <li>
            <Link to="/archive" title="">
              Archive{' '}
            </Link>

            <ul>
              <li>
                <div className="title">
                  <Link to="" title="">
                    L1
                  </Link>{' '}
                </div>

                <div className="submenu">
                  <div className="s">
                    <Link to="" title="">
                      › Année 1
                    </Link>
                  </div>

                  <div className="s">
                    <Link to="" title="">
                      › Année 2
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="title">
                  <Link to="" title="">
                    L2
                  </Link>{' '}
                </div>

                <div className="submenu">
                  <div className="s">
                    <Link to="" title="">
                      › Année 1
                    </Link>
                  </div>

                  <div className="s">
                    <Link to="" title="">
                      › Année 2
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="title">
                  <Link to="" title="">
                    L3
                  </Link>{' '}
                </div>
              </li>
              <li>
                <div className="title">
                  <Link to="" title="">
                    M1
                  </Link>{' '}
                </div>
              </li>
            </ul>
          </li>
          <li>
            <Link to="result" title="">
              Resultats{' '}
            </Link>

            <ul>
              <li>
                <div className="title">
                  <Link to="" target="_blank" title="">
                    Ordinaire
                  </Link>{' '}
                </div>
              </li>
              <li>
                <div className="title">
                  <Link to="" title="">
                    Rattrapage
                  </Link>{' '}
                </div>
              </li>
            </ul>
          </li>
          <li>
            <Link to="relvNotes" title="">
              Relevé de notes{' '}
            </Link>

            <ul>
              <li>
                <div className="title">
                  <Link to="" title="">
                    S1
                  </Link>{' '}
                </div>
              </li>
              <li>
                <div className="title">
                  <Link to="" title="">
                    S2
                  </Link>{' '}
                </div>
              </li>
              <li>
                <div className="title">
                  <Link to="" title="">
                    S3
                  </Link>{' '}
                </div>
              </li>
              <li>
                <div className="title">
                  <Link to="" title="">
                    S4
                  </Link>{' '}
                </div>
              </li>
              <li>
                <div className="title">
                  <Link to="" title="">
                    S5
                  </Link>{' '}
                </div>
              </li>
              <li>
                <div className="title">
                  <Link to="" title="">
                    S6
                  </Link>{' '}
                </div>
              </li>
              <li>
                <div className="title">
                  <Link to="" title="">
                    ...
                  </Link>{' '}
                </div>
              </li>
            </ul>
          </li>

          <li>
            <Link to="demande" title="">
              Demande{' '}
            </Link>

            <ul>
              <li>
                <div className="title">
                  <Link to="" title="">
                    Conservation de note TP
                  </Link>{' '}
                </div>
              </li>
              <li>
                <div className="title">
                  <Link to="" title="">
                    Consultation d'une copie d'examen
                  </Link>{' '}
                </div>
              </li>
              <li>
                <div className="title">
                  <Link to="" title="">
                    Modules supplémentaires
                  </Link>{' '}
                </div>
              </li>

              <li>
                <div className="title">
                  <Link to="" title="">
                    ...
                  </Link>{' '}
                </div>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/en/Linkdministration-contact" title="">
              Contacter scolarité
            </Link>
          </li>
          <li>
            <Link to="" title="">
              <Jesuis />{' '}
            </Link>

            <ul>
              <li>
                <div className="title">
                  <Link to="" title="">
                    <Logout />
                  </Link>
                </div>
              </li>
              <li>
                <div className="title">
                  <Link to="/profile" title="">
                    <i className="fa fa-user-circle-o" /> Profile{' '}
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}
