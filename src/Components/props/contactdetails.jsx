import React, { Component } from 'react';

class ContactDetails extends Component {
  details() {
    const info = 
    `Jeremy E. Jefferson
    Houston, TX 77027
    832.574.9862
    jeremyejefferson@gmail.com`;
    return info;
  }

  render() {
    return (
      <div>
        <h2>Contact Details</h2>
        <p>{this.details()}</p>
      </div>
    );
  }
}

export default ContactDetails;