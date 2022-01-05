import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes} from "react-router";
import { useParams, useLocation, Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu"; 
import Home from "./Home";
import DishDetail from "./DishDetail";
import About from "./About";
import { connect } from "react-redux";
import Contact from "./Contact";

import {deleteComment, fetchComments, fetchDishes, loginUser, logoutUser, postComment, postFeedback, signUpUser} from '../components/redux/ActionCreaters';
import { actions } from "react-redux-form";
import Register from "./Register";

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    chefs: state.chefs,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  postComment: (dishId, rating, comment) => dispatch(postComment(dishId, rating, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchComments: () => {dispatch(fetchComments())},
  //fetchPromos: () => {dispatch(fetchPromos())},
  //fetchLeaders: () => dispatch(fetchLeaders()),
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  signUpUser: (newUser) => dispatch(signUpUser(newUser))
  //fetchFavorites: () => dispatch(fetchFavorites()),
  //postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  //deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId))
});

const Main = (props) => {
  

  useEffect(() => {
    props.fetchDishes();
    props.fetchComments();
    return () => {
    }
  }, [])
  const HomePage = () => {
    return (
      <Home
        dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={props.dishes.isLoading}
        dishesErrMess={props.dishes.errMess}
        //chef={props.chefs.chefs.filter((chef) => chef.featured)[0]}
        //chefLoading={props.chefs.isLoading}
        //chefErrMess={props.chefs.errMess}
      />
    );
  };
  const DishWithID = () => {
    const {dishId} = useParams();
    return (

      //props.auth.isAuthenticated ?
      <DishDetail
        dish={props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
        isLoading={props.dishes.isLoading}
        errMess={props.dishes.errMess}
        comments={props.comments.comments.filter((comment) => comment.dishId === parseInt(dishId,10))}
        commentsErrMess={props.comments.errMess}
        postComment={props.postComment}
        auth = {props.auth}
        deleteComment = {props.deleteComment}
        //comments = {props.comments.filter((comment) => comment.dishId == parseInt(dishId, 10))}
      />
    )
  };


  // const PrivateRoute = ({children, ...rest }) => (
  //     <Route {...rest} render={({location}) => (
  //       props.auth.isAuthenticated
  //         ? children
  //         : <Navigate to={{
  //             pathname: '/',
  //             state: { from: location }
  //           }} />
  //     )}/>
  //   );

//   const PrivateRoute = () => {
//     const auth = props.auth.isAuthenticated; // determine if authorized, from context or however you're doing it

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return !auth ? <Outlet /> : <Navigate to="/" />;
// }

function RequireAuth({ children }) {
  const auth = props.auth.isAuthenticated; 
  const location = useLocation();

  if (auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} />;
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
      

      
      <Routes>
        <Route exact path="/menu" element={<Menu dishes={props.dishes} />} />
        {/* <Route exact path="/" element={<HomePage />} /> */}
        <Route path="/menu/:dishId" element = {<DishWithID/>}/>
        {/* <Route exact path="/aboutus" element={<About chefs = {props.chefs}/>} /> */}
        <Route exact path = "/contactus" element={<Contact resetFeedbackForm = {props.resetFeedbackForm} postFeedback = {props.postFeedback}/>} />
        {/* <Route exact path = '/signUp' element={ !props.auth.isAuthenticated ? <Register signUpUser = {props.signUpUser} /> : <Navigate to='/' />} /> */}
        <Route path="/signUp" element={<RequireAuth><Register signUpUser={props.signUpUser} /></RequireAuth>}/>
      </Routes>
      
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
