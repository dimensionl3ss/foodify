import React, { useRef, useState } from "react";
import {
  Button,
  Label,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Input,
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
const required = (val) => val && val.length;

const AddDish = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleSubmit = (values) => {
    // values = JSON.stringify(values);
    // values.image = selectedImage;
    // alert(values);
    const file = {
      dish: JSON.stringify(values),
      image: selectedImage,
    };
    props.postAdminDish(file);
  };

  const onChange = (event) => {
    //console.log(event.target.files[0]);
    setSelectedImage(event.target.files[0]);
  };
  return (
    <div className="container col-lg-6 col-sm-12 add-dish">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link className="link-dec" to="/home">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Add dish</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Add a dish</h3>
          <hr />
        </div>
      </div>
      <Form model="dish" onSubmit={(values) => handleSubmit(values)}>
        <Row className="form-group">
          <Label htmlFor="name" md={2}>
            Dish Name
          </Label>
          <Col>
            <Control.text
              model=".name"
              id="name"
              name="name"
              placeholder="Dish Name"
              className="form-control"
              validators={{
                required,
              }}
            />
            <Errors
              className="text-danger"
              model=".name"
              show="touched"
              messages={{
                required: "Required",
              }}
            />
          </Col>
        </Row>
        <br />
        <Row className="form-group">
          <Label htmlFor="description" md={2}>
            Description
          </Label>
          <Col md={10}>
            <Control.textarea
              model=".description"
              id="description"
              name="description"
              rows="6"
              className="form-control"
              validators={{ required }}
            />
            <Errors
              className="text-danger"
              model=".description"
              show="touched"
              messages={{
                required: "Required",
              }}
            />
          </Col>
        </Row>
        <br />
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
          <Label htmlFor="image" md={2}>
            Image
          </Label>
          <Col>
            <Input
              id="image"
              name="image"
              type="file"
              label="File"
              placeholder="Select Image"
              className="form-group"
              validators={{
                required,
              }}
              onChange={onChange}
            />
            <Errors
              className="text-danger"
              model=".image"
              show="touched"
              messages={{
                required: "Required",
              }}
            />
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
  );
};

export default AddDish;
