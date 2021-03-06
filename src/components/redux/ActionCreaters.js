import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../../resources/baseURL';


export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});
export const deleteComment = (comment) => (dispatch )=> {
    console.log(comment);
    const bearer = 'Bearer ' + localStorage.getItem('token');
    return fetch(baseUrl + `comments/${comment.commentId}`, {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': bearer,
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(comments => {dispatch(addComments(comments))})
    .catch(err => dispatch(commentsFailed(err.message)));

}


export const postComment = (dishId, rating, comment) => (dispatch) => {

    const newComment = {
        DishId: dishId,
        stars: rating,
        comment: comment
    }
    console.log('Comment ', newComment);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => {dispatch(addComment(response)); alert('Thank you for the review!')})
    .catch(error => { console.log('Post comments ', error.message);
        alert('Your comment could not be posted\nError: '+ error.message); })
}

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchDishes = () => (dispatch) => {

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


export const fetchChefs = () => (dispatch) => {

    return fetch(baseUrl + 'chefs')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(chefs => dispatch(addChefs(chefs)))
    .catch(error => dispatch(chefsFailed(error.message)));
}


export const chefsFailed = (errmess) => ({
    type: ActionTypes.CHEFS_FAILED,
    payload: errmess
});

export const addChefs = (chefs) => ({
    type: ActionTypes.ADD_CHEFS,
    payload: chefs
});





export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        mode: 'cors',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            dispatch(fetchFavorites());
            dispatch(receiveLogin(response));
        } 
        else {
            var error = new Error('Error: ' + response.status + ', message: '+ response.err.message);
            error.response = response;
            throw error;
        }
    })
    .catch(error => {dispatch(loginError(error.message)); alert(error.message);});
};

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    //dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout())
}


export const postFeedback = (feedback) => (dispatch) => {
        
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback),
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => { console.log('Feedback', response); 
                        alert('Thank you for your feedback!')})
    .catch(error =>  { console.log('Feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};

export const addAdminDish = (file) => (dispatch) => {

    const formData = new FormData();
    formData.append('imageFile', file.image);
    const bearer = 'Bearer ' + localStorage.getItem('token');
    return fetch(baseUrl + 'imageUpload', {
        method: 'POST',
        headers: {
            
            'Authorization': bearer
        },
        body: formData,
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok) {
            return response;
        }
        throw new Error(response.status + " " + response.statusText);
    })
    .then(response => response.json())
    .then(response => {
        //console.log(typeof file.dish);
        let dish = JSON.parse(file.dish);
        dish.image = 'images/' + response.filename;
        dish.featured = '1';
        dish = JSON.stringify(dish);
        console.log(dish);
        return fetch(baseUrl + 'dishes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': bearer
            },
            body: dish,
            credentials: 'same-origin'
            
        })
        .then((response) => {
            if(response.ok) {
                return response;
            }
            throw new Error(response.status + " " + response.statusText);
        })
        .then(response => response.json())
        .then((response) => {dispatch(fetchDishes()); alert('New dish added successfully!')})
        .catch((err) => alert(err));
    })
    .catch(err => {alert(err)});

}

export const requestSignUp = (newUser) => {
    return {
        type: ActionTypes.SIGNUP_REQUEST,
        newUser
    }
}

export const receiveSignUp = (newUser) => {
    return {
        type: ActionTypes.SIGNUP_SUCCESS,
        newUser
    }
}
  
export const signUpError = (message) => {
    return {
        type: ActionTypes.SIGNUP_FAILURE,
        message
    }
}

export const signUpUser = (newUser) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestSignUp(newUser))

    return fetch(baseUrl + 'users/signUp', {
        method: 'POST',
        mode: 'cors',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage 
            // Dispatch the success action
            //dispatch(fetchFavorites());
            const newUser = {email:response.newUser.email, password: response.newUser.password}
            dispatch(receiveSignUp(newUser));
            dispatch(loginUser(newUser));
        } 
        else {
            var error = new Error(response.status + " " +  response.message);
            error.response = response.message;
            throw error;
        }
    }, (err) => {throw err;})
    .catch(error => {
        dispatch(signUpError(error.message)); 
        alert(error.message);
    })
};

export const postFavorite = (dishId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'favorites', {
        method: "POST",
        body: JSON.stringify({"DishId": dishId}),
        headers: {
          "Content-Type": "application/json",
          'Authorization': bearer
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(favorites => { console.log('Favorite Added', favorites); dispatch(addFavorites(favorites)); })
    .catch(error => dispatch(favoritesFailed(error.message)));
}

export const deleteFavorite = (dishId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'favorites/' + dishId, {
        method: "DELETE",
        headers: {
          'Authorization': bearer
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(favorites => { console.log('Favorite Deleted', favorites); dispatch(addFavorites(favorites)); })
    .catch(error => dispatch(favoritesFailed(error.message)));
};

export const fetchFavorites = () => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'favorites', {
        headers: {
            'Authorization': bearer
        },
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(favorites => dispatch(addFavorites(favorites)))
    .catch(error => dispatch(favoritesFailed(error.message)));
}

export const updateAdminDish = ({dishId, dish}) => (dispatch) => {
    console.log(dish);
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + `dishes/${dishId}`, {
        method: "PUT",
        body: JSON.stringify(dish),
        headers: {
          "Content-Type": "application/json",
          'Authorization': bearer
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
    })
    .then(response => response.json())
    .then((response) => {dispatch(fetchDishes); alert(response.message)})
    .catch((err) => {alert(err)});

}

export const deleteAdminDish = (dishId) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + `dishes/${dishId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          'Authorization': bearer
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
    })
    .then(response => response.json())
    .then((response) => {dispatch(fetchDishes); alert(response.status)})
    .catch((err) => {alert(err)});

}

export const deleteAdminUser = (email) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + `users/${email}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          'Authorization': bearer
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
    })
    .then(response => response.json())
    .then((response) => {alert(response.status)})
    .catch((err) => {alert(err)});

}

export const favoritesFailed = (errmess) => ({
    type: ActionTypes.FAVORITES_FAILED,
    payload: errmess
});

export const addFavorites = (favorites) => ({
    type: ActionTypes.ADD_FAVORITES,
    payload: favorites
});