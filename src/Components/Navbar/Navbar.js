import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import * as ReactBootstrap from 'react-bootstrap'
const Navbar = () => {
    return(
      <div className="container">
        <ReactBootstrap.Navbar bg="none" expand="lg">
            <ReactBootstrap.Navbar.Brand href="#" className="navbar-brand"><h2>M-Hme<span>ad</span></h2></ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse  className="justify-content-end" id="basic-navbar-nav">
              <ReactBootstrap.Nav>
                <ReactBootstrap.Nav.Link className=" TheLink active" exact to="/">Home</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link className="TheLink" href="#">About Us</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link className="TheLink"href="#">Services</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link className="TheLink"href="#">Portfolio</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link className="TheLink"href="#">Team</ReactBootstrap.Nav.Link>
                <ReactBootstrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Divider />
                  <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                </ReactBootstrap.NavDropdown>
                <ReactBootstrap.Nav.Link className="TheLink"href="#">Contact</ReactBootstrap.Nav.Link>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Navbar>
      </div>

    )
}
export default Navbar;
