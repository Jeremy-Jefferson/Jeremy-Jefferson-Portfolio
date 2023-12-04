import React, { Component } from "react";
import { Fade, Slide } from "react-awesome-reveal"; // Importing Fade and Slide for animations

class Contact extends Component {
  render() {
    // Check if data exists in this.props; if not, return null
    if (!this.props.data) return null;

    // Destructuring data properties to use in the component
    const { name, address, phone, email } = this.props.data;
    const { city, state, zip } = address;

    return (
      <section id="contact">
        {/* Adding a fade-in effect for the contact section header */}
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              {/* Header for the contact section */}
              <h1>
                <span>Get In Touch</span>
              </h1>
            </div>

            <div className="ten columns">
              {/* Subheader for the contact section */}
              <h2>
                Get in touch!
                <span>
                  Whether you have a query or just want to discuss art, design,
                  or technology, shoot me a message!
                </span>
              </h2>
            </div>
          </div>
        </Fade>

        <div className="row">
          {/* Slide-in animation from the left for the contact form */}
          <Slide left duration={1000}>
            <div className="eight columns">
              <form action="" method="post" id="contactForm" name="contactForm">
                {/* Form fields for name, email, subject, and message */}
                <div>
                  <label htmlFor="name">
                    Name: <span className="required">*</span>
                  </label>
                  <input type="text" size="35" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="contactEmail">
                    Email: <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    size="35"
                    id="email"
                    name="email"
                    required="true"
                  />
                </div>
                <div>
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    size="35"
                    id="subject"
                    name="subject"
                    required="false"
                  />
                </div>
                <div>
                  <label htmlFor="message">
                    Message: <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="7"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div>
                  <button className="submit">Submit</button>
                  {/* Loader image while submitting */}
                  <span id="image-loader">
                    <img alt="Loader" src="images/loader.gif" />
                  </span>
                </div>
              </form>

              {/* Displaying error message on form submission error */}
              <div id="message-warning"> Error boy</div>
              {/* Success message on successful form submission */}
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          {/* Slide-in animation from the right for contact info */}
          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div id="widget widget_contact">
                <h4>CONTACT INFO</h4>
                {/* Contact information */}
                <p className="detailss">
                  <span>👨🏽‍💻 {name} 👨🏽‍💻</span>
                  <span>
                    <br />
                    <span className="find">
                      FIND ME HERE.📍
                      <br />
                    </span>
                    {city}, {state} {zip}
                    <br />
                    <br />
                    <span className="hello">Say HELLO.🙋🏽‍♂️</span>
                    📧: {email}
                    <br />
                    ☎️: {phone}
                  </span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
