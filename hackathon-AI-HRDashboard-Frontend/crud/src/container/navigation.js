import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleClient } from '../action/navigationAction';
import { withRouter } from 'react-router-dom'
import Modal from 'react-responsive-modal';
import Register from '../component/Register';
import Login from '../component/Login'
import SearchComponent from '../component/searchComponent'


const mapStateToProps = (state, ownProps) => {
  return {
    open: state.navigation.toggle,
    name: state.navigation.name
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleClient: (isOpen, name) => dispatch(toggleClient(isOpen, name))
  }
}

class NavigationComponent extends Component {
  constructor() {
    super()
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onOpenModal = this.onCloseModal.bind(this);
  }

  onOpenModal(isOpen, name) {
    this.props.toggleClient(isOpen, name)
  };

  onCloseModal(isOpen, name) {
    this.props.toggleClient(isOpen, name)
  };

  render() {
    return (
      <ul className="navbar-nav nav-pills flex-fill w-100 justify-content-end" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(isOpen, name) => this.onOpenModal(true, 'register')}><span className="glyphicon glyphicon-file"></span> Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(isOpen, name) => this.onOpenModal(true, 'login')}><span className="glyphicon glyphicon-log-in"></span> Login</a>
        </li>
        <Modal open={this.props.open} onClose={(isOpen, name) => this.onCloseModal(false, this.props.name)} center>
          <br />
          {this.props.name == 'login' ? <Login /> : <Register />}
        </Modal>
        <SearchComponent />
      </ul>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationComponent))