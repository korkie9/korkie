import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../environment/logo.jpg'
import {
  FaInstagram,
  FaHome,
  FaLinkedin,
  FaUser,
  FaClipboardList,
  FaEnvelope
} from 'react-icons/fa'
import { DiGithub } from 'react-icons/di'

const NavMenu = () => {
  return (
    <Navbar
      className="color-nav"
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
    >
      <NavLink className="nav-link" to="/Home">
        <div className="korkie-header">
        <img
          src={logo}
          width="30px"
          height="30px"
          className="nav-logo"
          alt=""
        />

        <strong>Korkie</strong>
        </div>
      </NavLink>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        
          <NavLink className="nav-link" to="/Home">
            <FaHome className="nav-icon" />
          </NavLink>

          <NavLink className="nav-link" to="/About">
            <FaUser className="nav-icon" />
          </NavLink>

          <NavLink className="nav-link" to="/Experience">
            <FaClipboardList className="nav-icon" />
          </NavLink>

          <NavLink className="nav-link" to="/Contact">
            <FaEnvelope className="nav-icon" />
          </NavLink>
        </Nav>
        <Nav>
          <Nav.Link href="https://www.instagram.com/korkiie/?hl=eneets">
            <FaInstagram className="nav-icon" />
          </Nav.Link>

          <Nav.Link href="https://www.linkedin.com/in/justin-korkie-513900192/?originalSubdomain=za">
            <FaLinkedin className="nav-icon" />
          </Nav.Link>

          <Nav.Link href="https://github.com/korkie9">
            <DiGithub className="nav-icon" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavMenu
