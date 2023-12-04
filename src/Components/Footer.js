import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    // If no data is passed, return null (no content to render)
    if (!this.props.data) return null;

    // Mapping through social network data to create social network icons
    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            {/* Rendering social network icons */}
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        {/* Footer section containing social links and copyright information */}
        <div className="row">
          {/* Adding a fade-in effect for the footer */}
          <Fade bottom>
            <div className="twelve columns">
              {/* List of social network links */}
              <ul className="social-links">{networks}</ul>

              {/* Copyright information */}
              <ul className="copyright">
                <li className="built-by">BUILT BY </li>
                {/* MY information and GitHub link */}
                <li>
                  &copy; 2023{" "}
                  <a title="JEJ" href="https://github.com/Jeremy-Jefferson">
                    Jeremy E. Jefferson
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          {/* "Back to Top" button */}
          <div id="go-top">
            {/* Link to scroll back to the top */}
            <a className="smoothscroll" title="Back to Top" href="#home">
              {/* Icon for scrolling to the top */}
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
