import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-faded">
          <a href="http://seanmcp.com"><img src="http://seanmcp.com/img/favicon.png" alt="" style={{height: 50}}/></a>
          <NavLink activeClassName="selected" className="navlink" exact to="/">Home</NavLink>
          <NavLink activeClassName="selected" className="navlink"  to="/about">About</NavLink>
          <NavLink activeClassName="selected" className="navlink"  to="/portfolio">Portfolio</NavLink>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
