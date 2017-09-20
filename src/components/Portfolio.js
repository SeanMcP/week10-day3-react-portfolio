import React, { Component } from 'react'

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
      <div className="card w-25 ml-4" style={{float: 'right'}}>
        <div className="card-header">Random GitHub Project</div>
        <div className="card-block p-4">
          <h3 className="card-title">{rand.name}</h3>
          <p className="cart-text">{rand.description}</p>
          <a className="btn btn-primary" href={rand.html_url}>Check it out</a>
        </div>
      </div>

      this.setState({random: github})
    })
    .catch(err => console.log("Error fetching: ", err))
  }
  render() {
    return (
      <div className="card d-flex">
        <div className="card-block p-4">
          {this.state.random}
          <h1 className="display-4">My Portfolio</h1>
          <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra urna in ante sodales facilisis. Phasellus nunc arcu, interdum nec aliquet ut, ornare eu lorem. Vestibulum massa elit, consectetur vitae tristique nec, porta ultricies metus. Phasellus eget sagittis nisl. Vestibulum eget vestibulum lectus, vel consequat diam.</p>
        </div>
      </div>
    )
  }
}
