import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { baseUrl } from "../resources/baseURL";

const Menu = (props) => {
  const RenderMenuItem = ({ dish }) => {
    return (
      <Card key={dish.id}>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle style={{color: '#2335F', fontSize: '1.5rem'}}>
              {dish.name + " "}
            </CardTitle>
            {/* <CardText style={{marginTop: '25%', color:'white'}}>{dish.description}</CardText> */}
          </CardImgOverlay>
        </Link>
      </Card>
    );
  };
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-lg-4 col-md-6 col-sm-12">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  if (props.dishes.errMess) {
    return(
        <div className="container">
            <div className="row">
                <h4>{props.dishes.errMess}</h4>
            </div>
        </div>
    );
  }
  else return (
    <div className="container">
      <div className="row">
        <Breadcrumb> 
          <BreadcrumbItem>
            <Link className="link-dec" to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
