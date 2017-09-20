import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <img src=""/>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
          </nav>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
