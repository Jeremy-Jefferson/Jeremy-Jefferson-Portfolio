import React, { Component } from "react";
import Slide from "react-awesome-reveal"; // Importing the Slide component for animations

class Resume extends Component {
  // Function to generate a random color code
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    // If no data is passed, return null (no content to render)
    if (!this.props.data) return null;

    // Extracting education data to display
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          {/* Education details */}
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <ul>
            {/* Mapping through education description */}
            {education.description.map((item, itemIndex) => (
              <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>
        </div>
      );
    });

    // Extracting work experience data to display
    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          {/* Work experience details */}
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <ul>
            {/* Mapping through work description */}
            {work.description.map((item, itemIndex) => (
              <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>
        </div>
      );
    });

    // Extracting skills data to display as progress bars
    const skills = this.props.data.skills.map((skills) => {
      // Generating a random background color for each skill
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;
      return (
        <li key={skills.name}>
          {/* Displaying skill progress bars */}
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        {/* Education Section */}
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Work Experience Section */}
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>
            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        {/* Skills Section */}
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Technologies</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="skillmessage">
                <p>{this.props.data.skillmessage}</p>
              </div>
              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
