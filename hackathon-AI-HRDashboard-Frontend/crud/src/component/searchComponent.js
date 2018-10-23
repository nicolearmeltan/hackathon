import React, { Component } from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap'

class SearchComponent extends Component {
  popoverFocus() {
    <Popover id="popover-trigger-click" className="bg-dark" title="Popover click">
      <p>Hello</p>
    </Popover>
  };
  render() {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <form className="p-2">
            <div className="form-group">
              <div className="input-group">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </li>
    )
  }
}

export default SearchComponent