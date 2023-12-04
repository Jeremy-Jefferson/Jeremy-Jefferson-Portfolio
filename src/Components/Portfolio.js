import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

class Portfolio extends Component {
  render() {
    const { projects } = this.props.data;

    if (!projects) return null;

    const projectItems = projects.map((project) => (
      <div key={project.id} className="columns portfolio-item">
        <div className="item-wrap">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {/* Your image and title display */}
            <Zmage alt={project.title} src={`images/portfolio/${project.image}`} />
            <div style={{ textAlign: "center" }}>{project.title}</div>
          </a>
        </div>
      </div>
    ));

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Latest Personal Projects 💻</h1>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projectItems}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
