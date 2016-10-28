import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { CounterButton, GithubButton } from 'components';
// import config from '../../config';
// import Helmet from 'react-helmet';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
          <Navbar.Collapse eventKey={0}>
            <Nav navbar>
              <LinkContainer to="/widgets">
                <NavItem eventKey={2} className="btn btn-danger" onClick={this.handleToggleKitten}>Widgets</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem eventKey={4} className="btn btn-success" onClick={this.handleToggleKitten}>About Us</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
      </div>
    );
  }
}
