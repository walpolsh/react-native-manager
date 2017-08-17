import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text, //the text the user typed into the form
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => console.log(user));
  };

  //action creator is called, ReduxThunk sees the function and calls it with dispatch
  //dispatch allows us to automatically dispatch an action anywhere in our code
  //send a request to firebase to authenticate email and password.
  //when thats found, log the user to the console.
};
