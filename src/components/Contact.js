import React from "react";
import {Button, Label, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap'; 
import { Control, Form, Errors} from 'react-redux-form';
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


const Contact = (props) => {

    const handleSubmit = (values)  => {
        console.log('Current State is: ' + JSON.stringify(values));
        props.postFeedback(values);
        props.resetFeedbackForm();
    }
  return (
    <div className="container col-lg-6 col-sm-12 feedback">

        <div className="row">
          <Breadcrumb>
              <BreadcrumbItem><Link  className = "link-dec" to='/'>Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
        <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
        </div>
        </div>
        <h3>Send us your Feedback</h3>
          <Form
            model="feedback"
            onSubmit={(values) => handleSubmit(values)}
          >
            <Row className="form-group">
              <Label htmlFor="firstName" md={2}>
                First Name
              </Label>
              <Col>
                <Control.text
                  model=".firstName"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstName"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <br />
            <Row className="form-group">
              <Label htmlFor="lastName" md={2}>
                Last Name
              </Label>
              <Col>
                <Control.text
                  model=".lastName"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".lastName"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <br />
            <Row className="form-group">
              <Label htmlFor="phone" md={2}>
                Phone(+91)
              </Label>
              <Col>
                <Control.text
                  model=".phone"
                  id="phone"
                  name="phone"
                  placeholder="Mobile Number"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(10),
                    maxLength: maxLength(10),
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".phone"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Must be 10 digits ",
                    maxLength: "Must be 10 digits ",
                    isNumber: "Must be a number",
                  }}
                />
              </Col>
            </Row>
            <br />
            <Row className="form-group">
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col>
                <Control.text
                  model=".email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: "Required ",
                    validEmail: "Invalid Email Address",
                  }}
                />
              </Col>
            </Row>
            <br />
            <Row className="form-group">
              <Col md={{ size: 6, offset: 2 }}>
                <div className="form-check">
                  <Label check>
                    <Control.checkbox
                      model=".agree"
                      name="agree"
                      className="form-check-input"
                    />{" "}
                    <strong>May we contact you?</strong>
                  </Label>
                </div>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Control.select
                  model=".contactType"
                  name="contactType"
                  className="form-control"
                >
                  <option>Phone</option>
                  <option>Email</option>
                </Control.select>
              </Col>
            </Row>
            <br />
            <Row className="form-group">
              <Label htmlFor="message" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  rows="12"
                  className="form-control"
                />
              </Col>
            </Row>
            <br />
            <Row className="form-group">
              <Col md={{ size: 10, offset: 2}}>
                <Button type="submit" color="danger">
                  Send Feedback
                </Button>
              </Col>
            </Row>
          </Form>
      </div>
  );
};

export default Contact;
