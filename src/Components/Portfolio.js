// Importing necessary components and libraries from React
import React, { Component } from "react";
import Zmage from "react-zmage"; // Importing Zmage for image display
import Fade from "react-reveal/Fade"; // Importing Fade for animations

// Creating a Portfolio component that extends React's Component class
class Portfolio extends Component {
  render() {
    // Check if 'projects' exist within this.props.data; if not, set an empty array as a fallback
    const projects =
      this.props.data && this.props.data.projects
        ? this.props.data.projects
        : [];

    // Map through each project to create project items for display
    const projectItems = projects.map((project, index) => (
      <div key={index} className="columns portfolio-item">
        <div className="item-wrap">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {/* Displaying the project image using Zmage */}
            <Zmage
              alt={project.title}
              src={`images/portfolio/${project.image}`}
            />
            {/* Displaying the project title */}
            <div style={{ textAlign: "center" }}>{project.title}</div>
          </a>
        </div>
      </div>
    ));

    return (
      <section id="portfolio">
        {/* Adding a fade-in effect for the portfolio section */}
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Latest Personal Projects 💻</h1>
              {/* Wrapper for the project items */}
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projectItems} {/* Displaying all the project items */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio; // Exporting the Portfolio component as the default export
