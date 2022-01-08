import React from "react";
import { Control, Errors, Form } from "react-redux-form";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button, Col, Label, Row } from "reactstrap";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const Register = (props) => {
    const handleRegister = (values) => {
        console.log(JSON.stringify(values))
        alert(JSON.stringify(values));
        props.signUpUser(values);
      }
  return (
    <div className="container col-lg-6 col-sm-12 register"> 
      <Breadcrumb>
          <BreadcrumbItem><Link className='link-dec' to="/">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>signUp</BreadcrumbItem>
      </Breadcrumb>
      <Form model="user" onSubmit={(values) => handleRegister(values)}>
        <h3>Register Here</h3>

        <Row className="form-group">
          <Label htmlFor="firstName">First Name</Label>
          <Col md={12}>
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
          <Label htmlFor="lastName">Last Name</Label>
          <Col md={12}>
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
          <Label htmlFor="email">Email</Label>
          <Col md={12}>
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
          <Label htmlFor="password">New Password</Label>
          <Col md={12}>
            <Control
              type="password"
              model=".password"
              id="password"
              name="password"
              placeholder="New Password"
              className="form-control"
              validators={{
                required,
              }}
            />
            <Errors
              className="text-danger"
              model=".password"
              show="touched"
              messages={{
                required: "Required ",
              }}
            />
          </Col>
        </Row>
        <br />
        <Row className="form-group">
          <Label htmlFor="phone">Phone ( +91 )</Label>
          <Col md={12}>
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
            <Label htmlFor="pin">Zip Code</Label>
            <Col md={12}>
            <Control.text
              model=".pin"
              id="pin"
              name="pin"
              placeholder="Zip Code"
              className="form-control"
              validators={{
                required,
                minLength: minLength(6),
                maxLength: maxLength(6),
                isNumber,
              }}
            />
            <Errors
              className="text-danger"
              model=".pin"
              show="touched"
              messages={{
                required: "Required ",
                minLength: "Must be 6 digits ",
                maxLength: "Must be 6 digits ",
                isNumber: "Must be a number",
              }}
            />
            </Col>
        </Row>
        <br />
        <Row className="form-group">
            <Col>
                <Button type="submit" className="block" color="danger" block>
                    Submit
                </Button>
            </Col>
        </Row>
        
      </Form>
    </div>
  );
};

export default Register;
