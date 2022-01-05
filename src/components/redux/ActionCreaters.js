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
        dishId: dishId,
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
    dispatch(dishesLoading(true));

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

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
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
            //dispatch(fetchFavorites());
            dispatch(receiveLogin(response));
        } 
        else {
            var error = new Error('Error: ' + response.status + ', message: '+ response.err.message);
            //error.response = response;
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
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(signUpError(error.message)))
};
