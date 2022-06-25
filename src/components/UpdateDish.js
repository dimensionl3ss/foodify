import React, { useState } from "react";
import { Form, Control, Errors } from "react-redux-form";
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

const required = (val) => val && val.length;
const UpdateDish = (props) => {
  const [updateForm, setUpdateForm] = useState(false);
  const [dishId, setDishId] = useState(null);
  const handleDelete = (e) => {
    if (!dishId) {
      alert("Enter Valid dish id!");
      
    }
    props.deleteAdminDish(dishId);
    e.preventDefault();
  };
  const handleSubmit = (values) => {
    setUpdateForm(!updateForm);
    let dishWithId = {
      dishId: dishId,
      dish: values
    }
    //alert(JSON.stringify(dishWithId));
    props.updateAdminDish(dishWithId);
  };

  return (
    <div className="container col-lg-6 col-sm-12 update-dish">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link className="link-dec" to="/home">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Update dish</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Update a dish</h3>
          <hr />
        </div>
        <div className="row">
          <form onSubmit={handleDelete} method="post">
            <Row row>
              <Label for="dishId" sm={2}>
                Dish ID
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="dishId"
                  id="dishId"
                  placeholder="Enter Dish Id"
                  onChange={(e) => setDishId(e.target.value)}
                />
              </Col>
            </Row>
            <br />
            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button
                  color="success"
                  onClick={() => setUpdateForm(!updateForm)}
                >
                  Update
                </Button>{" "}
                <Button color="danger" type="submit">
                  Delete
                </Button>
              </Col>
            </Row>
          </form>
        </div>

        {updateForm ? (
          <div>
            <br />
            <div className="col-12">
              <h3>Enter details</h3>
              <hr />
            </div>
            <Form model="dish" onSubmit={(values) => handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="price" md={2}>
                  Price
                </Label>
                <Col>
                  <Control.text
                    model=".price"
                    id="price"
                    name="price"
                    placeholder="Price"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".price"
                    show="touched"
                    messages={{
                      required: "Required",
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
                        model=".featured"
                        name="featured"
                        className="form-check-input"
                      />{" "}
                      <strong>Featured</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".promotion"
                        name="promotion"
                        className="form-check-input"
                      />{" "}
                      <strong>Promotion</strong>
                    </Label>
                  </div>
                </Col>
              </Row>
              <br />
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="danger">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UpdateDish;
