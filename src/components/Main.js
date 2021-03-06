import React, { useEffect } from "react";
import { Route, Routes} from "react-router";
import { useParams, useLocation, Navigate} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu"; 
import Home from "./Home";
import DishDetail from "./DishDetail";
import About from "./About";
import { connect } from "react-redux";
import Contact from "./Contact";
import {addAdminDish, deleteComment, deleteFavorite, fetchChefs, fetchComments, fetchDishes, fetchFavorites, loginUser, logoutUser, postComment, postFavorite, postFeedback, updateAdminDish, signUpUser, deleteAdminDish, deleteAdminUser} from '../components/redux/ActionCreaters';
import { actions } from "react-redux-form";
import Register from "./Register";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Favorite from "./Favorite";
import AddDish from "./AddDish";
import { baseUrl } from "../resources/baseURL";
import UpdateDish from "./UpdateDish";
import UpdateUser from "./UpdateUser";
const paths = ['/menu', '/menu/:dishId', '/home', '/aboutus', '/favorites', '/contactus', '/singUp'];
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    chefs: state.chefs,
    auth: state.auth,
    favorites: state.favorites,
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  postComment: (dishId, rating, comment) => dispatch(postComment(dishId, rating, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchComments: () => {dispatch(fetchComments())},
  fetchChefs: () => dispatch(fetchChefs()),
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  signUpUser: (newUser) => dispatch(signUpUser(newUser)),
  fetchFavorites: () => dispatch(fetchFavorites()),
  postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId)),
  postAdminDish: (file) => dispatch(addAdminDish(file)),
  updateAdminDish: (dishWithId) => dispatch(updateAdminDish(dishWithId)),
  deleteAdminDish: (dishId) => dispatch(deleteAdminDish(dishId)),
  deleteAdminUser: (email) => dispatch(deleteAdminUser(email))
});

const Main = (props) => {
  

  useEffect(() => {
    props.fetchDishes();
    props.fetchComments();
    props.fetchChefs();
    props.fetchFavorites();
  }, [])
  const HomePage = () => {
    return (
      props.auth.isAuthenticated ?
      <Home
        dishes={props.dishes.dishes.filter((dish) => dish.promotion)}
        errMess={props.dishes.errMess}
      />
      : <div >
        <img  style={{position: 'relative', width: '100%', marginTop: '-16px'}} src= {baseUrl + 'images/abc1.jpg'} srcset="" />
      </div>
    );
  };
  const DishWithID = () => {
    const {dishId} = useParams();
    return (

    props.auth.isAuthenticated ?
      <DishDetail
        dish={props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
        errMess={props.dishes.errMess}
        comments={props.comments.comments.filter((comment) => comment.DishId === parseInt(dishId,10))}
        commentsErrMess={props.comments.errMess}
        postComment={props.postComment}
        auth = {props.auth}
        deleteComment = {props.deleteComment}
        favorite={
          props.favorites.favorites ? 
          props.favorites.favorites.filter((favorite) => favorite.DishId === parseInt(dishId,10))
          : []
        }
        postFavorite = {props.postFavorite}
        deleteFavorite = {props.deleteFavorite}
        //comments = {props.comments.filter((comment) => comment.dishId == parseInt(dishId, 10))}
      />
      :

      <DishDetail
        dish={props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
        errMess={props.dishes.errMess}
        comments={props.comments.comments.filter((comment) => comment.DishId === parseInt(dishId,10))}
        commentsErrMess={props.comments.errMess}
        postComment={props.postComment}
        auth = {props.auth}
        deleteComment = {props.deleteComment}
        favorite= {null}
        postFavorite = {props.postFavorite}
        deleteFavorite = {props.deleteFavorite}
        //comments = {props.comments.filter((comment) => comment.dishId == parseInt(dishId, 10))}
      />

    )
  };

const location = useLocation();
function RequireAuthForSingUp({ children }) {
  const auth = props.auth.isAuthenticated; 
  

  if (auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/home" state={{ from: location }} />;
  }

  return children;
}

function RequireAuthForFav({ children }) {
  const auth = props.auth.isAuthenticated; 
  

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/home" state={{ from: location }} />;
  }

  return children;
}


  return (
    <div className="App">
      <Header 
        auth={props.auth} 
        loginUser={props.loginUser} 
        logoutUser={props.logoutUser} 
      />
      <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
      <Routes>
        <Route exact path="/menu" element={<Menu dishes={props.dishes} />} />
        <Route exact path="/menu/:dishId" element = {<DishWithID />}/>
        <Route exact path="/aboutus" element={<About chefs = {props.chefs}/>} />
        <Route exact path = "/contactus" element={<Contact resetFeedbackForm = {props.resetFeedbackForm} postFeedback = {props.postFeedback}/>} />
        <Route exact path="/signUp" element={<RequireAuthForSingUp><Register signUpUser={props.signUpUser} errMess = {props.auth.errMess}/></RequireAuthForSingUp>}/>
        <Route exact path="/favorites"  element={<RequireAuthForFav><Favorite favorites = {props.favorites} deleteFavorite={props.deleteFavorite}></Favorite></RequireAuthForFav>} />
        <Route exact path="/home" element={<HomePage />} />  
        <Route path = "*" element = {<Navigate replace to="/home" />} /> 
        <Route exact path = "/add-dish" element={<RequireAuthForFav><AddDish postAdminDish = {props.postAdminDish}/></RequireAuthForFav>} />
        <Route exact path = "/update-dish" element={<RequireAuthForFav><UpdateDish updateAdminDish = {props.updateAdminDish} deleteAdminDish = {props.deleteAdminDish}/></RequireAuthForFav>} />
        <Route exact path = "/update-user" element={<RequireAuthForFav><UpdateUser deleteAdminUser = {props.deleteAdminUser}/></RequireAuthForFav>} />
      </Routes>
      </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
