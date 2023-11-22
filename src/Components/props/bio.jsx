import React, { Component } from 'react';

class Bio extends Component {
  aboutSection() {
    const info = `Innovative and driven front-end developer with a background in
    illustration and over 4+ years of experience, specializing in
    UI/UX design and project management, mastery in React, JavaScript,
    HTML, and CSS, adept at TypeScript, Node.js, Express, AngularJS,
    Vue.js, and MySQL. Possesses an indomitable foundation in
    front-end development through Fullstack Academy training, eager to
    apply a creative edge and technical expertise with meticulous
    attention to detail to contribute to project success. Endeavors to
    utilize keen interpersonal skills and efficacious communication to
    be collaborative and task-driven. Highly adaptable and capable
    self-starter, able to move seamlessly throughout the development
    lifecycle—including developing strategies, wireframes, mockups,
    branding guidelines, prototyping solutions, testing criteria (A/B
    testing), and knowledge transfer. Notable contributions include
    developing responsive websites for 40+ clients and tailoring each
    site to meet the unique branding and user experience requirements
    of individual clients. Implementing isomorphic React and Node.js
    for 40+ web applications, significantly decreasing load times by
    58% and enhancing overall user experience. Optimizing code for
    rendering components on UI, reducing HTTP requests by 70% for
    applications dealing with extensive data sets, such as e-commerce
    platforms and data analytics tools. Utilizing Object Oriented
    Programming concepts to develop reusable UI components, enhancing
    efficiency across various web applications. Spearheaded
    Agile/Scrum practices in multiple web development projects,
    conducting daily standup meetings to ensure transparent
    communication, track progress, and swiftly address challenges.`;
    return info;
  }

  render() {
    return (
      <div>
        <h2>About Me</h2>
        <p>{this.aboutSection()}</p>
      </div>
    );
  }
}

export default Bio;