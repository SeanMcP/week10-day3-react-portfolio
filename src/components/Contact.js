import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-block p-4">
          <h1 className="display-4">Contact me</h1>
          <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra urna in ante sodales facilisis. Phasellus nunc arcu, interdum nec aliquet ut, ornare eu lorem. Vestibulum massa elit, consectetur vitae tristique nec, porta ultricies metus. Phasellus eget sagittis nisl. Vestibulum eget vestibulum lectus, vel consequat diam.</p>
          <h4>Get in touch</h4>
          <ul>
            <li><a href="mailto:mail@mail.mail">Email</a></li>
            <li><a href="https://githubt.com">GitHub</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="tel:14048675309">(404) 867-5309</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
