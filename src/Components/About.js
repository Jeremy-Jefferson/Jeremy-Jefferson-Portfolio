// Importing necessary components and libraries from React
import React, { Component } from "react";
import Fade from "react-reveal"; // Importing Fade for animations

// Creating an About component that extends React's Component class
class About extends Component {
  // Render method to render the about section
  render() {
    // If there is no data passed to the component, return null (nothing to render)
    if (!this.props.data) return null;

    // Destructuring data properties to use in the component
    const {
      name,
      image,
      bio1,
      bio2,
      address: { city, state, zip },
      phone,
      email,
      resumedownload,
    } = this.props.data;

    // Constructing the profile picture path
    const profilepic = "images/" + image;

    // Returning the about section
    return (
      <section id="about">
        {/* Adding a fade-in effect for the about section */}
        <Fade duration={1000}>
          <div className="row">
            {/* Column for the profile picture */}
            <div className="three columns">
              <img className="profile-pic" src={profilepic} alt="JEJ profile" />
            </div>
            {/* Main column for the bio and contact details */}
            <div className="nine columns main-col">
              {/* Title for the about section */}
              <h2>ABOUT ME</h2>
              {/* Displaying bio paragraphs */}
              <p>{bio1}</p>
              <p>{bio2}</p>
              {/* Row for contact details */}
              <div className="row">
                {/* Column for displaying contact details */}
                <div className="columns contact-details">
                  {/* Title for contact details */}
                  <h2>CONTACT DETAILS</h2>
                  {/* Displaying contact information */}
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Column for the 'Download CV' button */}
            <div className="columns download">
              {/* Link to download my CV/resume */}
              <p>
                <a href={resumedownload} className="button">
                  <i className="fa fa-download"></i>
                  DOWNLOAD CV
                </a>
              </p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

// Exporting the About component as the default export
export default About;
