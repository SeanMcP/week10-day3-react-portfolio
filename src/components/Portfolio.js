import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      random: ''
    }
  }
  componentDidMount() {
    fetch('https://api.github.com/users/SeanMcP/repos')
    .then(response => response.json())
    .then(data => {
      let random = Math.floor(Math.random() * data.length)

      this.setState({data: data})

      console.log('Fetched data: ', this.state.data)
      console.log('this.state.random: ', this.state.data[random]);

      let rand = this.state.data[random]

      let github =
      <div className="card">
        <div className="card-header">Random GitHub Project</div>
        <div className="card-block p-4">
          <div className="card-title">{rand.name}</div>
          <p className="cart-text">{rand.description}</p>
          <Link className="btn btn-primary" to={rand.html_url}>Check it out</Link>
        </div>
      </div>

      this.setState({random: github})
    })
    .catch(err => console.log("Error fetching: ", err))
  }
  render() {
    return (
      <div className="card">
        <div className="card-block p-4">
          <h1 className="display-4">My Portfolio</h1>
          <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra urna in ante sodales facilisis. Phasellus nunc arcu, interdum nec aliquet ut, ornare eu lorem. Vestibulum massa elit, consectetur vitae tristique nec, porta ultricies metus. Phasellus eget sagittis nisl. Vestibulum eget vestibulum lectus, vel consequat diam.</p>
          {this.state.random}
        </div>
      </div>
    )
  }
}
