import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
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
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </Layout>
);

export default NotFoundPage;
