import React, { Component } from 'react'


export default class About extends Component {
  constructor(props){
    super(props);
    this.gotToContact = this.gotToContact.bind(this);
    this.goToPRoducts = this.goToPRoducts.bind(this);
  }
  gotToContact(){
    //window.alert('click...');
    this.props.history.push("/contact");
  }
  goToPRoducts(){
    this.props.history.push("/products");
  }
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <button className="btn btn-primary" onClick={this.gotToContact}>Go To Contact Page</button> | 
        <button className="btn btn-danger" onClick={this.goToPRoducts}>Go To Product Page</button>
      </div>
    )
  }
}
