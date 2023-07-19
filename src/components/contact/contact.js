import React from "react";
import self from "../images/self.jpg";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contactpage m-auto">
      <div className="selfimg">
        <img src={self} alt="failed to load" />
      </div>
      <div className="formsection container mt-5">
        <form
          action="https://formsubmit.co/yuanc710@gmail.com"
          method="POST"
          className="row g-3"
        >
          <h1>Contact Me</h1>
          <div className="col-md-6">
            <label htmlFor="firstname" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastname" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              required
            />
          </div>
          <div className="col-md-8">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input type="text" className="form-control" id="email" required />
          </div>
          <div className="col-md-4">
            <label htmlFor="phone" className="form-label">
              Phone:
            </label>
            <input type="text" id="phone" className="form-control" />
          </div>
          <div className="col-md-12">
            <label htmlFor="comment" className="form-label">
              Comments & Question:
            </label>
            <input type="text" id="comment" className="form-control" />
          </div>
          <div class="col-md-12">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
