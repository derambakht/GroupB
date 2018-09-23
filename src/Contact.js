import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Contact extends Component {
  constructor(){
    super();
    this.state = {authorized : false};
  }
  render() {
    if (!window.localStorage.getItem('token')) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h1>Contact Page</h1>
      </div>
    )
  }
}
