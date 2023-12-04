import React, { Component } from "react";
import Fade from "react-awesome-reveal"; // Importing the Fade component for animations

class Header extends Component {
  render() {
    // If no data is passed, return null (no content to render)
    if (!this.props.data) return null;

    // Extracting necessary data for header
    const project = this.props.data.project; // Link to the project
    const name = this.props.data.name; // User's name
    const description = this.props.data.description; // Description about the user

    return (
      <header
        id="home"
        style={{
          // Styling the header background image
          backgroundImage: "url(/images/RedNebula.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Navigation Section */}
        <nav id="nav-wrap">
          {/* Mobile navigation buttons */}
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          {/* Navigation links */}
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            {/* Other navigation links */}
            {/* Update navigation links here */}
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            {/* Add or remove other links as needed */}
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Banner Section */}
        <div className="row banner">
          <div className="banner-text">
            {/* Displaying name with a fade-in effect */}
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            {/* Displaying description with a fade-in effect */}
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            {/* Displaying a project link with an icon */}
            <Fade bottom duration={2000}>
              <span className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-code" /> PROJECT
                </a>
              </span>
            </Fade>
          </div>
        </div>

        {/* Scrolldown arrow */}
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
