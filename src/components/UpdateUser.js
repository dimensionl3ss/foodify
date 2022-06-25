import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";
const UpdateUser = (props) => {

  const [email, setEmail] = useState(null);
  const handleDelete = (e) => {
    if (!email) {
      alert("Enter Valid Email id!"); 
    }
    props.deleteAdminUser(email);
    e.preventDefault();
  };
  return (
    <div className="container col-lg-6 col-sm-12 delete-user">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link className="link-dec" to="/home">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Delete User</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Delete a user</h3>
          <hr />
        </div>
        <div className="row">
          <form onSubmit={handleDelete} method="post">
            <Row row>
              <Label for="email" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Email Id"
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </Col>
            </Row>
            <br />
            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button color="danger" type="submit">
                  Delete
                </Button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
