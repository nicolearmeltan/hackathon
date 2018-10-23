import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../ui/css/bootstrap.css'
import NavigationComponent from '../container/navigation'

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column flex-sm-row">
        <button className='navbar-toggler hidden-md-up pull-xs-right' data-target='#navbarSupportedContent' data-toggle='collapse' type='button'>
          <span className="glyphicon glyphicon-align-justify"></span>
        </button>
        <div className="justify-content-center collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav nav-pills flex-fill w-100 flex-nowrap" id="pills-tab" role="tablist">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeclassname="active"><span className="glyphicon glyphicon-home" aria-hidden="true"></span> Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-link" activeclassname="active"><span className="glyphicon glyphicon-briefcase"></span> Sick Leave</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/QOL" className="nav-link" activeclassname="active"><span className="glyphicon glyphicon-user"></span> Quality Of Life</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav flex-fill justify-content-center">
            <img src="/src/ui/img/svg-react-5.png" height={40} width={35} />
          </ul>
          <NavigationComponent />
        </div>
      </nav>
    );
  }
}

export default Navigation