import React, { Component } from "react";
import Layout from "../components/Layout";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class NotFoundPage extends Component {
  state = { name: "", email: "", message: "" };
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, message } = this.state;
    return (
      <Layout>
        <div>
          <h1>Contact</h1>
          <p>
            This is an adaption of{" "}
            <a href="https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/">
              our React+Netlify Forms guide from 2017
            </a>
          </p>
          <form
            // name="contact"
            // method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Your Name:{" "}
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p>
              <label>
                Your Email:{" "}
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p>
              <label>
                Message:{" "}
                <textarea
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </Layout>
    );
  }
}
