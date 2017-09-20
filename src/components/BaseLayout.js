import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-faded">
          <img src=""/>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
        </nav>
        <main className="card">
          {this.props.children}
        </main>
      </div>
    )
  }
}
