import React, { useState } from "react";
import { Control, LocalForm } from "react-redux-form";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, Col, Fade, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { baseUrl } from "../resources/baseURL";
import {Stagger, FadeTransform} from 'react-animation-components'

const renderDelButton = ({dish, favorite, postFavorite, deleteFavorite, auth}) => {

  if(auth.isAuthenticated) {
    if(favorite.length > 0) {
      return (
        <Button color="danger" onClick={() => deleteFavorite(dish.id)} title="Remove from favorites">
            <span className="fa fa-heart fa-lg"></span>
        </Button>
      );
    }
    else {
      return (
            <Button outline color="danger" onClick={() => postFavorite(dish.id)} title="Add into favorites">
                <span className="fa fa-heart fa-lg"></span>
            </Button>
      );
    }
  }
  return null;
}
const RenderDish = (props) => {
    return (
      <FadeTransform in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
        <Card>
          <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name} />
          <CardImgOverlay>
              {renderDelButton(props)}
          </CardImgOverlay>
          <CardBody>
            <CardTitle >{props.dish.name}</CardTitle>
            <CardText>{props.dish.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
};
const RenderComments = ({dishId, comments, postComment, auth, handleDelete}) => {

  if (comments != null)
      return(
          <div className="">
              <h4>Reviews</h4>
              <hr />
              <ul className="list-unstyled">
                  <Stagger in>
                      {comments.map((comment) => {
                          return (
                              <Fade in key={comment.commentId}>
                                  <li>
                                  <p>{comment.comment + " "} <span> {
                                    //console.log(auth.user.email, comment.User.email),
                                    auth.isAuthenticated && auth.user.email === comment.User.email

                                      ?
                                      
                                      <a  type="submit" style={{color: 'red'}} onClick={() => handleDelete(comment)}>
                                        <span title="Delete" className="fa fa-trash fa-sm"></span>
                                      </a>
                                      :
                                      null
                                  }</span></p>
                                  <span>{comment.stars + " "}<span className="fa fa-star fa-lg"></span></span>
                                  <p> - {comment.User.firstName} {comment.User.lastName} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.updatedAt)))}</p>
                                  </li>
                                  
                                  <hr />
                              </Fade>
                          );
                      })}
                  </Stagger>
              </ul>
              <CommentForm dishId={dishId} postComment={postComment} />
          </div>
      );
  
  return  <CommentForm dishId={dishId} postComment={postComment} />;
}

const CommentForm = ({dishId, postComment}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const [stars, setStars] = useState(0);
  const handleSubmit = (values) => {
    //alert(JSON.stringify(values));
    console.log(dishId, values.stars, values.comment);
    postComment(dishId, values.stars, values.comment);
    toggleModal();
  }
  return (
    <div>
      <Button color="danger" outline onClick={toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Review</Button>
    <div className="row">
      <Modal isOpen = {isModalOpen} toggle = {toggleModal}>
        <ModalHeader toggle = {toggleModal}>Submit a Review</ModalHeader>
        <ModalBody>
        <LocalForm onSubmit={(values) => handleSubmit({stars, ...values})}>
          <Row className="form-group">
            <Col>
              <fieldset class="rating" onChange={(e) => setStars(e.target.value)}>
                  <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                  <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                  <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                  <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                  <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                  <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                  <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                  <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                  <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                  <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
              </fieldset>
            </Col>
          </Row>
          <Row className="form-group">
            <Col>
            <Control.textarea model=".comment" id="comment" rows={4} placeholder="Write Your Review" className="form-control"/>
            </Col>
          </Row>
          <Row className="form-group">
            <Col>
            <br />
            <Button type="submit" className="btn btn-danger" >Submit</Button>
            </Col>
          </Row>
          
        </LocalForm>
        </ModalBody>
       
      </Modal>
    </div>
    </div>
  )
}
const DishDetail = (props) => {

  const handleDelete = (commentId) => {
    props.deleteComment(commentId);
  }

if (props.errMess) {
    return(
        <div className="container">
            <div className="row">
                <h4>Hello{props.errMess}</h4>
            </div>
        </div>
    );
}
if (props.dish) {

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link className="link-dec" to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish 
              dish={props.dish} 
              favorite={props.favorite} 
              postFavorite={props.postFavorite}
              deleteFavorite = {props.deleteFavorite}
              auth = {props.auth}
            />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments 
                comments={props.comments} 
                dishId = {props.dish.id}
                postComment={props.postComment}
                auth = {props.auth}
                handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
else return <div></div>;
};

export default DishDetail;
